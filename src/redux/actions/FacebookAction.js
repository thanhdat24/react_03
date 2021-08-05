import { ADD_COMMENT } from "../types/FacebookType";

export const actionFacebook = (userComment) => ({
  type: ADD_COMMENT,
  userComment,
});
