import { styled } from "@mui/material/styles";
import { Stack, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import { GlobalSpacing } from "../../../components/layout/styles";
import { customer1Img, customer2Img, customer3Img, icons } from "../../../assets/image";
import { FirstButton } from "../../../components/buttons/buttons";

const list = [
	{
		rate: 5,
		avatar: customer1Img,
		name: "Bertram Jensen",
		author: "Author at Panoply Store",
		review: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
	}, {
		rate: 4,
		avatar: customer2Img,
		name: "Bertram Jensen",
		author: "Author at Panoply Store",
		review: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
	}, {
		rate: 5,
		avatar: customer3Img,
		name: "Bertram Jensen",
		author: "Author at Panoply Store",
		review: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
	}
];

const CustomersSays = () => {
	const renderStars = (rate: number) => {
		return (
			<RatingStars>
				{[...Array(5)].map((_, index) => (
					index < rate ? (
						<StarIcon key={index} />
					) : (
						<StarBorderIcon key={index} />
					)
				))}
			</RatingStars>
		);
	};

	return (
		<CustomersSaysWrapper>
			<CustomersSaysContainer>
				{/* Header Section */}
				<HeaderSection>
					<LabelBox>
						<img src={icons.trustpilot} alt="" />
						<Typography variant="h6" component="span">Trustpilot</Typography>
						<Typography variant="h6">Our reviews verified by Trustpilot</Typography>
					</LabelBox>

					<TitleSection>
						<Typography variant="h2">
							What our customers says
						</Typography>

						{/* Navigation Buttons */}
						<NavigationButtons display={{ xs: "none", md: "flex" }}>
							<NavigationButton>
								<NavigateBeforeIcon fontSize="medium" />
							</NavigationButton>

							<NavigationButton>
								<NavigateNextIcon fontSize="medium" />
							</NavigationButton>
						</NavigationButtons>
					</TitleSection>
				</HeaderSection>

				{/* Reviews Grid */}
				<ReviewsGrid>
					{list.map((item, index) => (
						<ReviewBox key={index}>
							<ReviewContent>
								{renderStars(item.rate)}
								<Typography variant="h6">{item.review}</Typography>
							</ReviewContent>

							<ReviewAuthor>
								<AuthorAvatar>
									<img src={item.avatar} alt={item.name} />
								</AuthorAvatar>

								<AuthorInfo>
									<Typography variant="h6" component="h5">{item.name}</Typography>
									<Typography variant="h6">{item.author}</Typography>
								</AuthorInfo>
							</ReviewAuthor>
						</ReviewBox>
					))}
				</ReviewsGrid>

				{/* Navigation Buttons */}
				<NavigationButtons display={{ xs: "flex", md: "none" }} justifyContent="center">
					<NavigationButton>
						<NavigateBeforeIcon fontSize="medium" />
					</NavigationButton>

					<NavigationButton>
						<NavigateNextIcon fontSize="medium" />
					</NavigationButton>
				</NavigationButtons>
			</CustomersSaysContainer>
		</CustomersSaysWrapper>
	);
};

const CustomersSaysWrapper = styled(GlobalSpacing)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	backgroundColor: theme.palette.common.mainBg,
}));

const CustomersSaysContainer = styled(Stack)(({ theme }) => ({
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
	gap: theme.spacing(3),

	[theme.breakpoints.down('md')]: {
		gap: theme.spacing(2),
	},
}));

const LabelBox = styled(Stack)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	gap: theme.spacing(1),

	img: {
		width: "30px",
		height: "30px",
	},

	span: {
		fontWeight: 600,
		color: theme.palette.common.firstTypography,
	},

	h6: {
		fontWeight: 400,
		color: theme.palette.common.secondTypography,
	},

	[theme.breakpoints.down('lg')]: {
		img: {
			width: "25px",
			height: "25px",
		},
	},
}));

const TitleSection = styled(Stack)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-between",
	gap: theme.spacing(3),

	h2: {
		fontWeight: 600,
		color: theme.palette.common.firstTypography,
	},

	[theme.breakpoints.down('md')]: {
		flexDirection: "column",
		gap: theme.spacing(2),
	},
}));

const NavigationButtons = styled(Stack)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	gap: theme.spacing(2),
}));

const NavigationButton = styled(FirstButton)(({ theme }) => ({
	width: "48px",
	height: "48px",
	borderRadius: "50%",
	transition: "all 0.3s ease",
	minWidth: "auto",

	svg: {
		color: theme.palette.common.firstTypography,
	},

	"&:hover": {
		backgroundColor: theme.palette.common.firstButton,
		boxShadow: `0 0 10px ${theme.palette.common.firstButton}`,

		svg: {
			color: theme.palette.common.white,
		},
	},

	[theme.breakpoints.down('lg')]: {
		width: "40px",
		height: "40px",

		svg: {
			width: "20px",
			height: "20px",
		},
	},
}));

const ReviewsGrid = styled(Stack)(({ theme }) => ({
	display: "grid",
	gridTemplateColumns: "repeat(3, 1fr)",
	gap: theme.spacing(3),
	width: "100%",

	[theme.breakpoints.down('lg')]: {
		gridTemplateColumns: "repeat(2, 1fr)",
		gap: theme.spacing(2),
	},

	[theme.breakpoints.down('md')]: {
		gridTemplateColumns: "1fr",
		gap: theme.spacing(2),
	},
}));

const ReviewBox = styled(Stack)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: theme.spacing(3),
	padding: theme.spacing(5),
	backgroundColor: theme.palette.common.firstBoxBg,
	boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
	transition: "transform 0.3s ease",
	borderRadius: "20px",
	cursor: "pointer",

	"&:hover": {
		transform: "translateY(-5px)",
	},

	[theme.breakpoints.down('lg')]: {
		padding: theme.spacing(3),
		gap: theme.spacing(2.5),
		borderRadius: "15px",
	},

	[theme.breakpoints.down('md')]: {
		padding: theme.spacing(2),
		gap: theme.spacing(2),
		borderRadius: "10px",
	},
}));

const ReviewContent = styled(Stack)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",

	h6: {
		fontWeight: 400,
		color: theme.palette.common.secondTypography,
	},
}));

const ReviewAuthor = styled(Stack)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	gap: theme.spacing(2),
}));

const AuthorAvatar = styled(Stack)(({ theme }) => ({
	width: "60px",
	height: "60px",
	borderRadius: "50%",
	overflow: "hidden",

	img: {
		width: "100%",
		height: "100%",
		objectFit: "cover",
	},

	[theme.breakpoints.down('lg')]: {
		width: "45px",
		height: "45px",
	},
}));

const AuthorInfo = styled(Stack)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",

	h5: {
		fontWeight: 600,
		color: theme.palette.common.firstTypography,
	},

	h6: {
		fontWeight: 400,
		color: theme.palette.common.secondTypography,
	},
}));

const RatingStars = styled(Stack)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	gap: theme.spacing(0.5),
	marginBottom: theme.spacing(1),

	svg: {
		width: "30px",
		height: "30px",
		color: theme.palette.common.firstButton,
	},

	[theme.breakpoints.down('lg')]: {
		svg: {
			width: "25px",
			height: "25px",
		},
	},

	[theme.breakpoints.down('md')]: {
		svg: {
			width: "20px",
			height: "20px",
		},
	},
}));

export { CustomersSays };