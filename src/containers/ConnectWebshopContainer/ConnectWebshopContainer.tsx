import { Card, CardContent, CardHeader, Divider } from "@mui/material";
import ConnectWebshopModal from "components/organism/ConnectWebshopModal/ConnectWebshopModal";

export default function ConnectWebshopContainer() {
  return (
    <Card>
      <CardHeader subheader="Set your credentials" title="Webshop API" />
      <Divider />
      <CardContent>
        <ConnectWebshopModal buttonColor="primary" />
      </CardContent>
    </Card>
  );
}
