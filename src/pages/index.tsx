import { Box, Container, Grid } from "@mui/material";
import Head from "next/head";
import { LatestOrders } from "components/dashboard/latest-orders";
import { LatestProducts } from "components/dashboard/latest-products";
import { Sales } from "components/dashboard/sales";
import { TrafficByDevice } from "components/dashboard/traffic-by-device";
import ConnectWebshopModal from "components/organism/ConnectWebshopModal";
import DashboardLayout from "components/page-templates/DashboardLayoutRoot";
import DashboardSummaryCards from "containers/DashboardSummaryCards";

const Dashboard = () => (
  <>
    <Head>
      <title>Dashboard</title>
    </Head>
    <DashboardLayout>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            <Grid item lg={12} xs={12}>
              <Box bgcolor="orange" padding={"5px"} borderRadius={"10px"}>
                <ConnectWebshopModal buttonColor="white" />
              </Box>
            </Grid>
            <Grid item lg={12} xs={12}>
              <DashboardSummaryCards />
            </Grid>
            <Grid item lg={8} md={12} xl={9} xs={12}>
              <Sales />
            </Grid>
            <Grid item lg={4} md={6} xl={3} xs={12}>
              <TrafficByDevice style={{ height: "100%" }} />
            </Grid>
            <Grid item lg={4} md={6} xl={3} xs={12}>
              <LatestProducts style={{ height: "100%" }} />
            </Grid>
            <Grid item lg={8} md={12} xl={9} xs={12}>
              <LatestOrders />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </DashboardLayout>
  </>
);

export default Dashboard;
