import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { ForgotPassword } from "./forgot_password";
import { SignIn } from "./signin";
import { SignUp } from "./signup";

const AuthPage = () => {
	return (
            <Routes>
                <Route path="/signin" element={<SignIn/>} />
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/forgot_password" element={<ForgotPassword/>} />
            </Routes>
	)
}

export { AuthPage };