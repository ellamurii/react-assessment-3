import jsonPlaceholder from "../api/jsonPlaceholder";
import { FETCH_USERS } from "./userActionTypes";
import faker from "faker";

export const fetchUsers = () => async (dispatch) => {
  const { data } = await jsonPlaceholder.get("/users");
  const payload = data.map((item) => ({
    ...item,
    avatar: faker.image.avatar(),
  }));
  dispatch({ type: FETCH_USERS, payload });
};
