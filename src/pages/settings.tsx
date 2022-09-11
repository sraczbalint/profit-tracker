import { Box, Container, Typography } from "@mui/material";
import Head from "next/head";
import Notifications from "components/page-components/Notifications";
import SettingsPassword from "components/page-components/PasswordSettings";
import DashboardLayout from "components/page-templates/DashboardLayoutRoot";
import ConnectWebshopContainer from "containers/ConnectWebshopContainer";

const Settings = () => (
  <>
    <DashboardLayout>
      <Head>
        <title>Settings | Material Kit</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography sx={{ mb: 3 }} variant="h4">
            Settings
          </Typography>
          <Notifications />
          <Box sx={{ pt: 3 }}>
            <SettingsPassword />
          </Box>
          <Box sx={{ pt: 3 }}>
            <ConnectWebshopContainer />
          </Box>
        </Container>
      </Box>
    </DashboardLayout>
  </>
);

export default Settings;
