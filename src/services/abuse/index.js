import { getInstance } from "@/configs/axios";
import { CSRFRequest } from "@/services/auth/csrf";



export const fetchUserAbuse = async () => {
  return CSRFRequest().then(() => {
    getInstance().get("/api/customer/v1/support/abuse");
  });
};
