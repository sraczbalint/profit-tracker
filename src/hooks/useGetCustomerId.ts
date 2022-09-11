import { useRouter } from "next/router";
import { queryStringToString } from "utils";

export const useGetCustomerId = () => {
  const { query } = useRouter();
  return queryStringToString(query.customerId);
};
