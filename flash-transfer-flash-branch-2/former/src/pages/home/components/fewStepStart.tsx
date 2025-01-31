import { styled } from "@mui/material";
import { Stack, Typography } from "@mui/material";
import { GlobalSpacing } from "../../../components/layout/styles";
import { icons } from "../../../assets/image";

const list = [
	{
		icon: icons.register,
		title: "Register for free",
		description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
	}, {
		icon: icons.crypto,
		title: "Send your crypto",
		description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
	}, {
		icon: icons.withdraw,
		title: "Go withdraw your cash",
		description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
	}
];

const FewStepStart = () => {
	return (
		<FewStepStartWrapper>
			<FewStepStartContainer>
				{/* Header Section */}
				<HeaderSection>
					<Typography variant="h2">
						Just few steps to start
					</Typography>

					<SubtitleSection>
						<Typography variant="h6" component="span">
							Its easiest as you think.Follow 3 easiest step
						</Typography>
					</SubtitleSection>
				</HeaderSection>

				{/* Features Grid */}
				<FeaturesGrid>
					{list.map((item, index) => (
						<FeatureBox key={index}>
							<FeatureIcon>
								<img src={item.icon} alt={item.title} />
							</FeatureIcon>

							<FeatureContent>
								<Typography variant="h5">{item.title}</Typography>
								<Typography variant="body1">{item.description}</Typography>
							</FeatureContent>
						</FeatureBox>
					))}
				</FeaturesGrid>
			</FewStepStartContainer>
		</FewStepStartWrapper>
	);
};

const FewStepStartWrapper = styled(GlobalSpacing)(({ theme }) => ({
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

	[theme.breakpoints.down('lg')]: {
	},
}));

const FewStepStartContainer = styled(Stack)(({ theme }) => ({
	zIndex: 2,
	position: "relative",

	display: "flex",
	flexDirection: "column",
	gap: theme.spacing(5),
	padding: theme.spacing(15, 0),
	paddingBottom: theme.spacing(10),

	[theme.breakpoints.down('lg')]: {
		gap: theme.spacing(6),
		padding: theme.spacing(10, 0),
		paddingBottom: theme.spacing(5),
	},

	[theme.breakpoints.down('md')]: {
		gap: theme.spacing(4),
		padding: theme.spacing(6, 0),
		paddingBottom: theme.spacing(3),
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

const FeaturesGrid = styled(Stack)(({ theme }) => ({
	display: "grid",
	gridTemplateColumns: "repeat(3, 1fr)",
	gap: theme.spacing(5),

	[theme.breakpoints.down('lg')]: {
		gap: theme.spacing(3),
	},

	[theme.breakpoints.down('md')]: {
		gridTemplateColumns: "repeat(1, 1fr)",
	},
}));

const FeatureBox = styled(Stack)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	textAlign: "center",
	gap: theme.spacing(3),
	padding: theme.spacing(6),
	backgroundColor: theme.palette.common.white,
	borderRadius: "20px",
	transition: "all 0.3s ease",
	cursor: "pointer",

	"&:hover": {
		transform: "translateY(-5px)",
		boxShadow: "0 10px 20px rgba(0, 0, 0, 0.05)",
	},

	[theme.breakpoints.down('lg')]: {
		padding: theme.spacing(5),
		gap: theme.spacing(2),
		borderRadius: "15px",
	},

	[theme.breakpoints.down('md')]: {
		padding: theme.spacing(3),
		borderRadius: "10px",
	},
}));

const FeatureIcon = styled(Stack)(({ theme }) => ({
	display: "flex",
	alignItems: "center", 
	justifyContent: "center",
	width: "90px",
	height: "90px",
	borderRadius: "50%",
	backgroundColor: `${theme.palette.common.secondSectionBg}20`,
	boxShadow: `0 0px 20px ${theme.palette.common.secondSectionBg}20`,

	img: {
		width: "50%",
		height: "50%",
		transition: "all 0.3s ease",
	},

	[theme.breakpoints.down('lg')]: {
		width: "80px",
		height: "80px",
	},

	[theme.breakpoints.down('md')]: {
		width: "70px",
		height: "70px",
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
		maxWidth: "300px",
		color: theme.palette.common.secondTypography,
	},

	[theme.breakpoints.down('lg')]: {
		gap: theme.spacing(0.5),
		maxWidth: "250px",
	},
}));

export { FewStepStart };