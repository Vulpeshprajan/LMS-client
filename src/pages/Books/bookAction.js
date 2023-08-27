import { toast } from "react-toastify";
import { postBook } from "../../helper/axios";

export const postBookAction = (bookObj) => async (dispatch) => {
  const dataPending = postBook(bookObj);

  toast.promise(dataPending, {
    pending: "Please wait....",
  });

  const { status, message } = await dataPending;

  toast[status](message);
  if (status === "success") {
    // need to fetch all the books
  }
};
