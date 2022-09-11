import { Box, Container } from "@mui/material";
import Head from "next/head";
import { customers } from "__mocks__/customers";
import { CustomerListResults } from "components/customer/customer-list-results";
import { CustomerListToolbar } from "components/customer/customer-list-toolbar";
import DashboardLayout from "components/page-templates/DashboardLayoutRoot";

const Customers = () => (
  <>
    <DashboardLayout>
      <Head>
        <title>Customers</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <CustomerListToolbar />
          <Box sx={{ mt: 3 }}>
            <CustomerListResults customers={customers} />
          </Box>
        </Container>
      </Box>
    </DashboardLayout>
  </>
);

export default Customers;
