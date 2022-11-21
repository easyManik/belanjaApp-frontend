import axios from "axios";
export const VerifOtp = (data, navigate) => async (dispact, req, res, next) => {
  try {
    const result = await axios.post(`http://localhost:4200/users/verif`, data);
    const user = result.data.data;
    console.log(user);
    localStorage.setItem("Token ", user.token);
    dispact({ type: "USER_VERIFICATION_SUCCESS", payload: user });
    navigate("/loginCust");
    console.log("user verif success");
  } catch (err) {
    console.log("user verif fail");
    console.log(err);
  }
};
