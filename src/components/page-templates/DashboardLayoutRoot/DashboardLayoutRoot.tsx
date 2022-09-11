import { FunctionComponent, PropsWithChildren, useState } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import DashboardNavbar from "components/organism/DashboardNavbar";
import DashboardSidebar from "components/organism/DashboardSidebar/DashboardSidebar";

const DashboardLayoutRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
  paddingTop: 64,
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 280,
  },
}));

// eslint-disable-next-line @typescript-eslint/no-empty-interface, prettier/prettier
interface Props {}

export const DashboardLayout: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
}) => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(true);

  return (
    <>
      <DashboardLayoutRoot>
        <Box
          sx={{
            display: "flex",
            flex: "1 1 auto",
            flexDirection: "column",
            width: "100%",
          }}
        >
          {children}
        </Box>
      </DashboardLayoutRoot>
      <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)} />
      <DashboardSidebar
        onClose={() => setSidebarOpen(false)}
        open={isSidebarOpen}
      />
    </>
  );
};

export default DashboardLayout;
