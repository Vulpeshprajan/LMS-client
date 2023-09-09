import { toast } from "react-toastify";
import { fetchBurrow, postBurrow } from "../../helper/axios";
import { fetchBookAction } from "../Books/bookAction.js";
import { setBurrows } from "./burrowSlice.js";

export const addBurrowAction = (obj) => async (dispatch) => {
  const { status, message } = await postBurrow(obj);
  toast[status](message);

  if (status === "success") {
    //fetch user burrow
    dispatch(fetchBookAction());
  }
};

export const getBurrowAction = () => async (dispatch) => {
  const { status, message, burrowHistory } = await fetchBurrow();
  toast[status](message);

  if (status === "success") {
    // fetch user burrow
    dispatch(setBurrows(burrowHistory));
  }
};
