import axios from "axios";
export const login = (data, navigate) => async (dispact) => {
  try {
    const result = await axios.post("http://localhost:4200/users/login", data);
    const user = result.data.data;
    console.log(user);
    localStorage.setItem("Token ", user.token);
    dispact({ type: "USER_LOGIN_SUCCESS", payload: user });
    navigate("/myProduct");
    console.log("user login success");
  } catch (err) {
    console.log("user login fail");
    console.log(err);
  }
};
