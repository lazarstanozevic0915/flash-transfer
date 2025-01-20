import { styled } from "@mui/material";
import { Stack, Typography } from "@mui/material";
import { GlobalSpacing } from "../../../components/layout/styles";
import { heroBackgroundImg } from "../../../assets/image";

const GlobalExchange = () => {
	return (
		<GlobalExchangeWrapper>
			<GlobalExchangeBackground src={heroBackgroundImg} alt="" />

			<GlobalExchangeContainer>
				{/* Left Content Section */}
				<ContentSection>
					<Typography variant="body1" component="span">
						Fast, Secure Exchange
					</Typography>

					<Typography variant="h2">
						Global Fiat and Crypto Exchange at Your Fingertips
					</Typography>

					<Typography variant="h6">
						Exchange your favorite cryptocurrencies and fiat currencies seamlessly with fast transactions, low fees, and 24/7 support.
					</Typography>
				</ContentSection>

				{/* Right Features Section */}
				<FeaturesSection>
					<Stack flex={1}>
						<FirstFeatureBox>
							<Typography variant="h1">20</Typography>

							<FeatureContent>
								<Typography variant="body1">
									Popular cryptocurrencies available !
								</Typography>
								<Typography variant="body2" component="span">
									You can exchange your cryptocurrencies: BTC, ETH, FLASH, USDC, USDT, DAI, BNB, POL, SOL, AVAX, CRO, SUI and more.
								</Typography>
							</FeatureContent>
						</FirstFeatureBox>

						<SecondFeatureBox>
							<Typography variant="h1">200+</Typography>

							<FeatureContent>
								<Typography variant="body1">
									Fiat Currencies Support
								</Typography>
								<Typography variant="body2" component="span">
									We support all Fiat currencies in the world!
								</Typography>
							</FeatureContent>
						</SecondFeatureBox>
					</Stack>

					<Stack flex={1} flexDirection="column" justifyContent="center">
						<ThirdFeatureBox>
							<Typography variant="h1">5K</Typography>

							<FeatureContent>
								<Typography variant="body1">
									Active Users
								</Typography>
								<Typography variant="body2" component="span">
									Our users are satisfied with the speed, low fees and support !
								</Typography>
							</FeatureContent>
						</ThirdFeatureBox>
					</Stack>
				</FeaturesSection>
			</GlobalExchangeContainer>
		</GlobalExchangeWrapper>
	);
};

const GlobalExchangeWrapper = styled(GlobalSpacing)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	position: "relative",
	overflow: "hidden",

	"&::before": {
		content: '""',
		position: "absolute",
		left: "50%",
		top: "50%",
		width: "95%",
		height: "100%",
		backgroundColor: theme.palette.common.firstBoxBg,
		transform: "translate(-50%, -50%)",
		borderRadius: "50px",
		zIndex: 1,

		[theme.breakpoints.down('md')]: {
			borderRadius: "20px",
		},
	},
}));

const GlobalExchangeBackground = styled("img")(({ theme }) => ({
	bottom: 0,
	right: "-10%",
	position: "absolute",
	width: "100%", height: "100%",
	objectFit: "contain",
	userSelect: "none",
	zIndex: 1,

	[theme.breakpoints.down('lg')]: {
		display: "none",
	},
}))

const GlobalExchangeContainer = styled(Stack)(({ theme }) => ({
	position: "relative",
	zIndex: 2,
	padding: theme.spacing(15, 0),
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	gap: theme.spacing(5),

	[theme.breakpoints.down('lg')]: {
		flexDirection: "column",
		padding: theme.spacing(10, 0),
		paddingBottom: theme.spacing(5),
		gap: theme.spacing(6),
	},

	[theme.breakpoints.down('md')]: {
		padding: theme.spacing(6, 0),
		paddingBottom: theme.spacing(3),
		gap: theme.spacing(4),
	},
}));

const ContentSection = styled(Stack)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: theme.spacing(2.5),
	width: "40%",

	span: {
		fontWeight: 400,
		width: "fit-content",
		borderRadius: "20px",
		padding: theme.spacing(0.5, 2),
		border: `1px solid ${theme.palette.common.firstDivider}`,
		backgroundColor: theme.palette.common.white,
		color: theme.palette.common.firstTypography,
	},

	h2: {
		maxWidth: 600,
	},

	h6: {
		maxWidth: 500,
		color: theme.palette.common.secondTypography,
	},

	[theme.breakpoints.down('lg')]: {
		alignItems: "center",
		textAlign: "center",
		width: "100%",

		span: {
			margin: "0 auto",
		},

		h2: {
			maxWidth: 800,
		},

		h6: {
			maxWidth: 600,
		},
	},

	[theme.breakpoints.down('md')]: {
		gap: theme.spacing(1.5),

		h2: {
			maxWidth: "unset",
		},

		h6: {
			maxWidth: "unset",
		},
	},
}));

const FeaturesSection = styled(Stack)(({ theme }) => ({
	width: "60%",
	display: "flex",
	flexDirection: "row",
	gap: theme.spacing(4),

	[theme.breakpoints.down('lg')]: {
		width: "100%",
		maxWidth: 800,
		flexDirection: "column",
		gap: theme.spacing(3),
	},
}));

const FeatureBox = styled(Stack)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: theme.spacing(2),
	padding: theme.spacing(2, 3),
	backgroundColor: theme.palette.common.white,
	borderRadius: "15px",
	transition: "transform 0.3s ease",
	cursor: "pointer",

	"&:hover": {
		transform: "translateY(-5px)",
	},

	[theme.breakpoints.down('md')]: {
		padding: theme.spacing(1, 2),
		gap: theme.spacing(1),
		borderRadius: "10px",
	},
}));

const FeatureContent = styled(Stack)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: theme.spacing(1),

	p: {
		fontWeight: 600,
		color: theme.palette.common.firstTypography,
	},

	span: {
		fontWeight: 400,
		color: theme.palette.common.secondTypography,
	},

	[theme.breakpoints.down('lg')]: {
		gap: theme.spacing(0.5),
	},
}));

const FirstFeatureBox = styled(FeatureBox)(({ theme }) => ({
	maxWidth: "80%",
	marginLeft: "auto",

	[theme.breakpoints.down('lg')]: {
		maxWidth: "unset",
		marginLeft: "unset",
	},
}));

const SecondFeatureBox = styled(FeatureBox)(({ theme }) => ({
	marginTop: theme.spacing(4),

	[theme.breakpoints.down('lg')]: {
		marginTop: theme.spacing(2),
	},
}));

const ThirdFeatureBox = styled(FeatureBox)(({ theme }) => ({
	marginTop: "20%",

	[theme.breakpoints.down('lg')]: {
		marginTop: "unset",
	},
}));

export { GlobalExchange };