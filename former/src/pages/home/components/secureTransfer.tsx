import { styled } from "@mui/material/styles";
import { Stack, Typography } from "@mui/material";

import { GlobalSpacing } from "../../../components/layout/styles";
import { secureTransferImg, icons } from "../../../assets/image";

const list = [
	{
		icon: icons.decentralized,
		title: "100% Decentralized",
		description: "Keep control of your private keys, send your crypto, or connect your wallet via WalletConnect."
	}, {
		icon: icons.fiatCrypto,
		title: "Convert Fiat & Crypto",
		description: "Convert between fiat and crypto seamlessly with + 36 currencies available."
	},
];

const SecureTransfer = () => {
	return (
		<SecureTransferWrapper>
			<SecureTransferContainer>
				{/* Right Image Section */}
				<ImageSection>
					<img src={secureTransferImg} alt="secure-transfer" />
				</ImageSection>

				{/* Left Content Section */}
				<ContentSection>
					<Typography variant="h2">
						Fast, Secure Money Transfers
					</Typography>

					<Typography variant="h6">
						Exchange your favorite cryptocurrencies and fiat currencies seamlessly with fast transactions, low fees, and 24/7 support.
					</Typography>

					<FeaturesSection>
						{list.map((item, index) => (
							<FeatureBox key={index}>
								<FeatureIcon>
									<img src={item.icon} alt={item.title} />
								</FeatureIcon>

								<FeatureContent>
									<Typography variant="h5">{item.title}</Typography>
									<Typography variant="h6">{item.description}</Typography>
								</FeatureContent>
							</FeatureBox>
						))}
					</FeaturesSection>
				</ContentSection>
			</SecureTransferContainer>
		</SecureTransferWrapper>
	);
};

const SecureTransferWrapper = styled(GlobalSpacing)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	backgroundColor: theme.palette.common.mainBg,
}));

const SecureTransferContainer = styled(Stack)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	gap: theme.spacing(5),
	padding: theme.spacing(10, 0),

	[theme.breakpoints.down('lg')]: {
		flexDirection: "column",
		gap: theme.spacing(4),
		padding: theme.spacing(8, 0),
	},

	[theme.breakpoints.down('md')]: {
		gap: theme.spacing(3),
		padding: theme.spacing(5, 0),
	},
}));

const ContentSection = styled(Stack)(({ theme }) => ({
	flex: 1,
	display: "flex",
	flexDirection: "column",
	gap: theme.spacing(3),

	h2: {
		maxWidth: 500,
		fontWeight: 600,
		color: theme.palette.common.firstTypography,
	},

	h6: {
		maxWidth: 500,
		fontWeight: 400,
		color: theme.palette.common.secondTypography,
	},

	[theme.breakpoints.down('lg')]: {
		alignItems: "center",
	},

	[theme.breakpoints.down('md')]: {
		gap: theme.spacing(2),

		h2: {
			maxWidth: "unset",
		},

		h6: {
			maxWidth: "unset",
		},
	},
}));

const FeaturesSection = styled(Stack)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: theme.spacing(3),
	marginTop: theme.spacing(3),

	[theme.breakpoints.down('lg')]: {
		width: "100%",
		maxWidth: 600,
		gap: theme.spacing(2),
		marginTop: theme.spacing(2),
	},
}));

const FeatureBox = styled(Stack)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "flex-start",
	gap: theme.spacing(3),
	transition: "all 0.3s ease",
	cursor: "pointer",

	"&:hover": {
		transform: "translateX(10px)",
	},

	[theme.breakpoints.down('lg')]: {
		gap: theme.spacing(2.5),
		borderRadius: "15px",
	},

	[theme.breakpoints.down('md')]: {
		gap: theme.spacing(2),
		borderRadius: "10px",
	},
}));

const FeatureIcon = styled(Stack)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	minWidth: "70px",
	height: "70px",
	borderRadius: "50%",
	backgroundColor: theme.palette.common.secondSectionBg,
	boxShadow: `0 0px 10px ${theme.palette.common.secondSectionBg}`,

	img: {
		width: "50%",
		height: "50%",
		transition: "all 0.3s ease",
	},

	[theme.breakpoints.down('lg')]: {
		minWidth: "60px",
		height: "60px",
	},

	[theme.breakpoints.down('md')]: {
		minWidth: "50px",
		height: "50px",
	},
}));

const FeatureContent = styled(Stack)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: theme.spacing(1),

	h5: {
		fontWeight: 600,
		color: theme.palette.common.firstTypography,
	},

	p: {
		maxWidth: 500,
		fontWeight: 400,
		color: theme.palette.common.secondTypography,
	},

	[theme.breakpoints.down('lg')]: {
		gap: theme.spacing(0.5),
	},
}));

const ImageSection = styled(Stack)(({ theme }) => ({
	flex: 1,
	display: "flex",
	justifyContent: "flex-end",

	img: {
		width: "100%",
		height: "auto",
		maxWidth: 600,
		objectFit: "contain",
	},

	[theme.breakpoints.down('lg')]: {
		justifyContent: "center",

		img: {
			maxWidth: 500,
		},
	},

	[theme.breakpoints.down('md')]: {
		img: {
			maxWidth: 400,
		},
	},
}));

export { SecureTransfer };

