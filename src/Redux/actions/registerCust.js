import axios from "axios";
export const register = (data, navigate) => async (dispact, req, res, next) => {
  try {
    const result = await axios.post(
      `http://localhost:4200/users/register/cust`,
      data
    );
    const user = result.data.data;
    console.log(user);
    localStorage.setItem("Token ", user.token);
    dispact({ type: "USER_REGISTER_SUCCESS", payload: user });
    navigate("/verifOtp");
    console.log("user register success");
  } catch (err) {
    console.log("user register fail");
    console.log(err);
  }
};
