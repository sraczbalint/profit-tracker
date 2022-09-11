import { useRouter } from "next/router";
import { queryStringToString } from "utils";

export const useGetShopId = () => {
  const { query } = useRouter();
  return queryStringToString(query.shopId);
};
