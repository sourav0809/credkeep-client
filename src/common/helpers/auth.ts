import { cookieKeys } from "@/constant/keyConstants";
import Cookies from "js-cookie";

export const getAuthToken = () => {
  return Cookies.get(cookieKeys.AUTH_TOKEN);
};
