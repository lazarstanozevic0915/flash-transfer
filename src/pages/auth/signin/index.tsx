import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";
import Banner from "./components/Banner";
import SignInForm from "./components/SignInForm";

const SignIn = () => {
	return (
		<PageWrapper>
            <Banner />
            <SignInForm />
        </PageWrapper>
	)
}

const PageWrapper = styled(Stack)({
	display: "flex",
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100vh'
})
export { SignIn };