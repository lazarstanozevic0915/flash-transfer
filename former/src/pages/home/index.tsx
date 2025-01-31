import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";

import { Hero } from "./components/hero";
import { Layout } from "../../components/layout/layout";
import { TrustedPartners } from "./components/trustedPartners";
import { GlobalExchange } from "./components/globalExchange";
import { WhyChooseUs } from "./components/whyChooseUs";
import { SecureTransfer } from "./components/secureTransfer";
import { FewStepStart } from "./components/fewStepStart";
import { MostSecure } from "./components/mostSecure";
import { Faq } from "./components/faq";
import { CustomersSays } from "./components/customersSays";

const Dashboard = () => {
	return (
		<Layout>
			<HomeWrapper>
				<Hero />
				<TrustedPartners />
				<GlobalExchange />
				<WhyChooseUs />
				<SecureTransfer />
				<FewStepStart />
				<MostSecure />
				<Faq />
				<CustomersSays />
			</HomeWrapper>
		</Layout>
	)
}

const HomeWrapper = styled(Stack)({
	display: "flex",
	flexDirection: "column",
})

export { Dashboard };