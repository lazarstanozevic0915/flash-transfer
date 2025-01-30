import { styled } from "@mui/material/styles";
import { Stack, Typography } from "@mui/material";

import { GlobalSpacing } from "../../../components/layout/styles";
import { binanceImg, blockmateImg, coinbaseImg, julayaImg, microsoftImg } from "../../../assets/image";
import { mooveMoneyImg, mtnImg, orangeMoneyImg, walletConnectImg, waveImg } from "../../../assets/image";

const partners = [
	coinbaseImg,
	binanceImg,
	microsoftImg,
	orangeMoneyImg,
	mtnImg,
	waveImg,
	mooveMoneyImg,
	walletConnectImg,
	blockmateImg,
	julayaImg,
];

const TrustedPartners = () => {
	return (
		<TrustedPartnersWrapper>
			<TrustedPartnersContainer>
				{/* Header Section */}
				<HeaderSection>
					<Typography variant="h2">
						Choose from our trusted partners
					</Typography>

					<SubtitleSection>
						<Typography variant="h6" component="span">
							We make sure your money is delivered quickly and easily.&nbsp;
						</Typography>

						<Typography variant="h6" component="span">
							Choose payment types from our network: cash collection points, mobile money and bank transfer.
						</Typography>
					</SubtitleSection>
				</HeaderSection>

				{/* Partners Grid */}
				<PartnersGrid>
					{partners.map((partner, index) => (
						<PartnerBox key={index}>
							<img src={partner} alt={`partner-${index}`} />
						</PartnerBox>
					))}
				</PartnersGrid>
			</TrustedPartnersContainer>
		</TrustedPartnersWrapper>
	);
};

const TrustedPartnersWrapper = styled(GlobalSpacing)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	backgroundColor: theme.palette.common.mainBg,
}));

const TrustedPartnersContainer = styled(Stack)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: theme.spacing(6),
	padding: theme.spacing(10, 0),

	[theme.breakpoints.down('lg')]: {
		gap: theme.spacing(4),
		padding: theme.spacing(8, 0),
	},

	[theme.breakpoints.down('md')]: {
		gap: theme.spacing(3),
		padding: theme.spacing(5, 0),
	},
}));

const HeaderSection = styled(Stack)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	textAlign: "center",
	gap: theme.spacing(4),

	h2: {
		fontWeight: 600,
		color: theme.palette.common.firstTypography,
	},

	[theme.breakpoints.down('md')]: {
		gap: theme.spacing(3),
	},
}));

const SubtitleSection = styled("span")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",

	span: {
		fontWeight: 400,
		color: theme.palette.common.secondTypography,
	},

	[theme.breakpoints.down('md')]: {
		display: "block",
	},
}));

const PartnersGrid = styled(Stack)(({ theme }) => ({
	display: "grid",
	gridTemplateColumns: "repeat(5, 1fr)",
	gap: theme.spacing(3),

	[theme.breakpoints.down('lg')]: {
		gridTemplateColumns: "repeat(4, 1fr)",
		gap: theme.spacing(2),
	},

	[theme.breakpoints.down('md')]: {
		gridTemplateColumns: "repeat(3, 1fr)",
		gap: theme.spacing(1.5),
	},

	[theme.breakpoints.down('sm')]: {
		gridTemplateColumns: "repeat(2, 1fr)",
		gap: theme.spacing(1),
	},
}));

const PartnerBox = styled(Stack)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",

	borderRadius: "10px",
	padding: theme.spacing(1.5),
	backgroundColor: theme.palette.common.white,
	border: `1px solid ${theme.palette.common.headerBorder}`,
	transition: "transform 0.3s ease",
	cursor: "pointer",
	height: 100,

	img: {
		height: 60,
		width: "auto",
		maxWidth: "90%",
		objectFit: "contain",
	},

	"&:hover": {
		transform: "scale(1.05)",
		boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
	},

	[theme.breakpoints.down('xl')]: {
		height: 80,

		img: {
			height: 50,
		},
	},

	[theme.breakpoints.down('md')]: {
		height: 60,

		img: {
			height: 40,
		},
	},
}));

export { TrustedPartners };

