import { createNewDate } from "../../../helper/date";

export const addTodolist = (data) => async (dispatch) => {
  dispatch({ type: "ADD_TODO_PENDING" });
  const createdAt = await createNewDate();
  const result = {
    name: data,
    createdAt: createdAt,
  };
  dispatch({ type: "ADD_TODO_SUCCESS", payload: result });
};
