import { ADD_COMMENT } from "../types/FacebookType";

const initialState = {
  comments: [
    {
      name: "Dat",
      content: "Hi ! Dat",
      avatar: "https://i.pravatar.cc/150?u=dat",
    },
    {
      name: "Diep",
      content: "Hi ! Diep",
      avatar: "https://i.pravatar.cc/150?u=diep",
    },
  ],
};

const FacebookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT: {
      state.comments = [...state.comments, action.userComment];
      return { ...state };
    }
    default:
      break;
  }
  return { ...state };
};
export default FacebookReducer;
