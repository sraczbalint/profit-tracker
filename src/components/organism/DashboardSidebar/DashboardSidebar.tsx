import { FunctionComponent, useEffect } from "react";
import GroupIcon from "@mui/icons-material/Group";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import {
  Box,
  Divider,
  Drawer,
  Link,
  Theme,
  useMediaQuery,
} from "@mui/material";
import NextLink from "next/link";
import { useRouter } from "next/router";

import { Logo } from "assets/logo";
import Typography from "components/atoms/Typography";
import NavItem from "components/page-components/NavItem";
import { useAuth } from "context/AuthContext";

interface Items {
  href: string;
  icon: JSX.Element;
  title: string;
  onClick?: () => void;
}

interface Props {
  open: boolean;
  onClose: () => void;
}

const DashboardSidebar: FunctionComponent<Props> = ({ open, onClose }) => {
  const router = useRouter();
  const { onSignOut } = useAuth();
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });

  const items: Items[] = [
    {
      href: "/",
      icon: <SignalCellularAltIcon fontSize="small" />,
      title: "Dashboard",
    },
    {
      href: "/customers",
      icon: <GroupIcon fontSize="small" />,
      title: "Customers",
    },
    {
      href: "/products",
      icon: <ShoppingBagIcon fontSize="small" />,
      title: "Products",
    },
    {
      href: "/settings",
      icon: <SettingsIcon fontSize="small" />,
      title: "Settings",
    },
    {
      href: "/account",
      icon: <GroupIcon fontSize="small" />,
      title: "Account",
    },
    {
      href: "/login",
      icon: <LogoutIcon fontSize="small" />,
      title: "Logout",
      onClick: () => onSignOut(),
    },
  ];

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div>
          <Box sx={{ p: 3 }}>
            <NextLink href="/" passHref>
              <Link>
                <Logo
                  style={{
                    height: 42,
                    width: 42,
                  }}
                />
              </Link>
            </NextLink>
          </Box>
          <Box sx={{ px: 2 }}>
            <Box
              sx={{
                alignItems: "center",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                px: 3,
                py: "11px",
                borderRadius: 1,
              }}
            >
              <div>
                <Typography color="inherit" variant="subtitle1">
                  Profit Tracker
                </Typography>
                <Typography color="neutral.400" variant="body2">
                  Előfizetésed: Ingyenes
                </Typography>
              </div>
            </Box>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: "#2D3748",
            my: 3,
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
              onClick={item.onClick}
            />
          ))}
        </Box>
        <Divider sx={{ borderColor: "#2D3748" }} />
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "neutral.900",
            color: "#FFFFFF",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.900",
          color: "#FFFFFF",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

export default DashboardSidebar;
