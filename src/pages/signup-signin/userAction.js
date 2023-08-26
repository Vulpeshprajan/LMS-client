import { toast } from "react-toastify";
import { loginUser } from "../../helper/axios";

export const signInAdminAction = async (userObj) => {
  const { status, message } = await loginUser(userObj);
  toast[status](message);
};
