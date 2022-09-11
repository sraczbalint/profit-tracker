import { useEffect } from "react";
import { useRouter } from "next/router";
import useAuthState from "./useAuthState";

export const useAuthUser = () => {
  const [user, isUserAuthloading] = useAuthState();
  const router = useRouter();

  const userId = user?.uid;

  useEffect(() => {
    if (!userId && isUserAuthloading) {
      return;
    }
    if (!userId && !isUserAuthloading) {
      router.push(`/login?redirectPath=${encodeURIComponent(router?.asPath)}`);
    }
  }, [userId, isUserAuthloading, router]);

  return {
    status: isUserAuthloading ? "LOADING" : "SUCCESS",
  };
};
