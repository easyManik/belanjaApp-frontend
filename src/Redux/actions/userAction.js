import axios from "../../axios";
import swal from "sweetalert";

export const loginUser = (dataForm, Navigate) => async (dispatch) => {
  try {
    dispatch({ type: "USER_LOGIN_PENDING" });
    const result = await axios.post("/users/login", dataForm);
    const user = result.data.data;
    localStorage.setItem("token", user.token);
    localStorage.setItem("refreshToken", user.refreshToken);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: user });
    swal("Good Job!", "Login Success", "success").then(() => {
      if (user.role === "user") {
        swal("Good Job!", "Login sebagai customer", "success");
        Navigate("/home");
      } else {
        swal("Good Job!", "Login sebagai seller", "success");
        Navigate("/home");
      }
    });
  } catch (error) {
    swal("Login Failed", "wrong email or password", "error");
  }
};

export const registerUser = (dataForm, Navigate) => async (dispatch) => {
  try {
    dispatch({ type: "USER_REGISTER_PENDING" });
    const result = await axios.post("/users/register", dataForm);
    const user = result.data.data;
    dispatch({ type: "USER_REGISTER_SUCCESS", payload: user });
    swal("Good Job!", "Register Success", "success");
    Navigate("/verifOtp");
  } catch (error) {
    swal("Register Failed", "email has been registered", "error");
  }
};

export const loginSeller = (dataForm, Navigate) => async (dispatch) => {
  try {
    dispatch({ type: "SELLER_LOGIN_PENDING" });
    const result = await axios.post("/sellers/login", dataForm);
    const seller = result.data.data;
    localStorage.setItem("token", seller.token);
    localStorage.setItem("refreshToken", seller.refreshToken);
    dispatch({ type: "SELLER_LOGIN_SUCCESS", payload: seller });
    swal("Good Job!", "Login Success", "success");
    Navigate("/home");
  } catch (error) {
    swal("Login Failed", "wrong email or password", "error");
  }
};

export const registerSeller = (dataForm, Navigate) => async (dispatch) => {
  try {
    dispatch({ type: "SELLER_REGISTER_PENDING" });
    const result = await axios.post("/sellers/register", dataForm);
    const seller = result.data.data;
    dispatch({ type: "SELLER_REGISTER_SUCCESS", payload: seller });
    swal("Good Job!", "Register Success", "success");
    Navigate("/loginSell");
  } catch (error) {
    swal("Register Failed", "email has been registered", "error");
  }
};

export const VerifOtp = (data, Navigate) => async (dispatch) => {
  try {
    dispatch({ type: "USER_VERIFICATION_PENDING" });

    const result = await axios.post(`/users/verif`, data);
    const user = result.data.data;
    console.log(user);
    localStorage.setItem("Token ", user.token);
    dispatch({ type: "USER_VERIFICATION_SUCCESS", payload: user });
    swal("Good Job!", "Akun anda telah diverifikasi", "success");
    Navigate("/loginCust");

    console.log("user verif success");
  } catch (err) {
    console.log("user verif fail");
    console.log(err);
  }
};
