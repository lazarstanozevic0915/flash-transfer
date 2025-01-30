import { styled } from "@mui/material/styles";
import { Stack, Typography } from "@mui/material";

import { mostSecureImg, icons } from "../../../assets/image";
import { GlobalSpacing } from "../../../components/layout/styles";
import { SecondButton } from "../../../components/buttons/buttons";

const MostSecure = () => {
	return (
		<MostSecureWrapper>
			<MostSecureContainer>
				{/* Left Content Section */}
				<ContentSection>
					<Typography variant="h2">
						Fastest & Most Secure Way to Send Crypto to Fiat Globally
					</Typography>
					<Typography variant="h6">
						Send crypto to fiat globally with unmatched speed, security, and low fees.
					</Typography>

					<ButtonsGroup>
						<SecondButton>
							<img src={icons.apple} alt="apple" />
							<Typography variant="h6" component="p">Apple Store</Typography>
						</SecondButton>

						<SecondButton>
							<img src={icons.googlePlay} alt="google-play" />
							<Typography variant="h6" component="p">Play Store</Typography>
						</SecondButton>
					</ButtonsGroup>
				</ContentSection>

				{/* Right Image Section */}
				<ImageSection>
					<img src={mostSecureImg} alt="secure-transfer" />
				</ImageSection>
			</MostSecureContainer>
		</MostSecureWrapper>
	);
};

const MostSecureWrapper = styled(GlobalSpacing)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	backgroundColor: theme.palette.common.mainBg,
}));

const MostSecureContainer = styled(Stack)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	gap: theme.spacing(5),
	padding: theme.spacing(10, 0),

	[theme.breakpoints.down('lg')]: {
		flexDirection: "column-reverse",
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
	maxWidth: 600,

	h2: {
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
		gap: theme.spacing(2),

		h6: {
			maxWidth: "unset",
		},
	},
}));

const ButtonsGroup = styled(Stack)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	gap: theme.spacing(3),
	marginTop: theme.spacing(3),

	[theme.breakpoints.down('lg')]: {
		width: "100%",
		maxWidth: 600,
		gap: theme.spacing(2),
		marginTop: theme.spacing(2),
	},

	[theme.breakpoints.down('md')]: {
		button: {
			flex: 1,
		}
	},
}));

const ImageSection = styled(Stack)(({ theme }) => ({
	flex: 1,
	display: "flex",
	justifyContent: "flex-start",
	alignItems: "flex-end",

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

export { MostSecure };

