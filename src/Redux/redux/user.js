const initialState = {
  user: {
    id: "",
    email: "",
    fullname: "",
    role: "",
    token: "",
  },
};
// "data": {
//     "id": "39de0f3a-30fc-41e7-acbc-759e1151dd1b",
//     "email": "easymanik4@gmail.com",
//     "fullname": "easy destini manik",
//     "role": "cust",
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVhc3ltYW5pazRAZ21haWwuY29tIiwicm9sZSI6ImN1c3QiLCJpYXQiOjE2Njg2MTMxNTQsImV4cCI6MTY2ODYxNjc1NH0.dj8M5PW6oB4cCrxLKqq2g-We0PHRgJX-3MSW0VQAkiE"
// },

const userReducer = (state = initialState, action) => {
  if (action.type === "USER_LOGIN_PENDING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "USER_LOGIN_SUCCESS") {
    return {
      ...state,
      user: action.payload,
      isLoading: false,
    };
  } else {
    return state;
  }
};

export default userReducer;
