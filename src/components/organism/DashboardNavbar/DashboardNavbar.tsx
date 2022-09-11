import { FunctionComponent } from "react";
import styled from "@emotion/styled";
import GroupIcon from "@mui/icons-material/Group";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
} from "@mui/material";
import { useTheme } from "@mui/styles";
import NextLink from "next/link";
import { ITheme } from "theme";

const DashboardNavbarRoot = styled(AppBar)(() => {
  const theme: ITheme = useTheme();

  return {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
  };
});

interface Props {
  onSidebarOpen: () => void;
}

const DashboardNavbar: FunctionComponent<Props> = ({ onSidebarOpen }) => {
  return (
    <>
      <DashboardNavbarRoot
        sx={{
          left: {
            lg: 280,
          },
          width: {
            lg: "calc(100% - 280px)",
          },
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2,
          }}
        >
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: "inline-flex",
                lg: "none",
              },
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Tooltip title="Search">
            <IconButton sx={{ ml: 1 }}>
              <SearchIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Box sx={{ flexGrow: 1 }} />
          <Tooltip title="Contacts">
            <IconButton sx={{ ml: 1 }}>
              <GroupIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Notifications">
            <IconButton sx={{ ml: 1 }}>
              <Badge badgeContent={4} color="primary" variant="dot">
                <NotificationsIcon fontSize="small" />
              </Badge>
            </IconButton>
          </Tooltip>
          <NextLink href={"/account"}>
            <Avatar
              sx={{
                height: 40,
                width: 40,
                ml: 1,
              }}
              src="/static/images/avatars/avatar_1.png"
            ></Avatar>
          </NextLink>
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
};

export default DashboardNavbar;
