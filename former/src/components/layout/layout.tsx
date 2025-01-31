import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

import { Header } from "./header";
import { Footer } from "./footer";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<LayoutWrapper>
			<Header />

			<LayoutContainer>
				{children}
			</LayoutContainer>

			<Footer />
		</LayoutWrapper>
	);
};

const LayoutWrapper = styled(Stack)({
	display: "flex",
	flexDirection: "column",
	minHeight: "100vh",
});

const LayoutContainer = styled(Stack)({
	display: "flex",
	flexDirection: "column",
});

export { Layout };
