import { styled } from "@mui/material/styles";
import { Stack, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { GlobalSpacing } from "../../../components/layout/styles";

const faqList = [
	{
		question: "How send crypto to Flash Transfer?",
		answer: "Find answers to common inquiries and get the support you need in our Frequently Asked Questions section."
	}, {
		question: "Where can the Flash Transfer service be used?",
		answer: "Flash Transfer can be used worldwide except in the following countries: Cuba, Iran, North Korea, Syria, Venezuela."
	}, {
		question: "In which/how many countries does Flash Transfer operate?",
		answer: "Flash Transfer operates in over 40 countries and supports more than 36 currencies."
	}, {
		question: "How to convert your cryptocurrency to fiat?",
		answer: "You can convert your cryptocurrency to fiat by using the Flash Transfer service."
	}, {
		question: "How to send the cryptocurrency so that the beneficiary receives it in cash ?",
		answer: "You can send the cryptocurrency to the beneficiary's account in cash by using the Flash Transfer service."
	}, {
		question: "How much are the transaction fees ?",
		answer: "The transaction fees are 0.5% of the amount sent."
	}
];

const Faq = () => {
	return (
		<FaqWrapper>
			<FaqContainer>
				{/* Header Section */}
				<HeaderSection>
					<Typography variant="h2">
						Frequently asked questions
					</Typography>

					<SubtitleSection>
						<Typography variant="h6" component="span">
							Find answers to common inquiries and get the support you need in our&nbsp;
						</Typography>

						<Typography variant="h6" component="span">
							Frequently Asked Questions section.
						</Typography>
					</SubtitleSection>
				</HeaderSection>

				{/* FAQ Accordion Section */}
				<AccordionSection>
					{faqList.map((item, index) => (
						<StyledAccordion key={index} disableGutters>
							<StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
								<Typography variant="h5">{item.question}</Typography>
							</StyledAccordionSummary>

							<StyledAccordionDetails>
								<Typography variant="body1">{item.answer}</Typography>
							</StyledAccordionDetails>
						</StyledAccordion>
					))}
				</AccordionSection>
			</FaqContainer>
		</FaqWrapper>
	);
};

const FaqWrapper = styled(GlobalSpacing)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	backgroundColor: theme.palette.common.mainBg,
}));

const FaqContainer = styled(Stack)(({ theme }) => ({
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
	gap: theme.spacing(3),

	h2: {
		fontWeight: 600,
		color: theme.palette.common.firstTypography,
	},

	[theme.breakpoints.down('md')]: {
		gap: theme.spacing(2),
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

const AccordionSection = styled(Stack)(({ theme }) => ({
	display: "grid",
	gridTemplateColumns: "repeat(2, 1fr)",
	gap: theme.spacing(3),
	width: "100%",

	[theme.breakpoints.down('lg')]: {
		gridTemplateColumns: "1fr",
		gap: theme.spacing(2),
	},

	[theme.breakpoints.down('md')]: {
		gap: theme.spacing(1.5),
	},
}));

const StyledAccordion = styled(Accordion)(({ theme }) => ({
	backgroundColor: theme.palette.common.white,
	boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
	border: `1px solid ${theme.palette.common.firstBoxBg}`,
	borderRadius: "15px !important",
	transition: "all 0.3s ease",

	"&:before": {
		display: "none",
	},

	"&.Mui-expanded": {
		margin: 0,
	},

	[theme.breakpoints.down('md')]: {
		borderRadius: "10px !important",
	},
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
	padding: theme.spacing(2, 3),
	minHeight: "unset",

	".MuiAccordionSummary-content": {
		margin: theme.spacing(1.5, 0),

		"&.Mui-expanded": {
			margin: theme.spacing(1.5, 0),
		},
	},

	h5: {
		fontWeight: 500,
		color: theme.palette.common.firstTypography,
	},

	".MuiAccordionSummary-expandIconWrapper": {
		color: theme.palette.common.firstTypography,
	},

	[theme.breakpoints.down('md')]: {
		padding: theme.spacing(1.5, 2),

		".MuiAccordionSummary-content": {
			margin: theme.spacing(1, 0),

			"&.Mui-expanded": {
				margin: theme.spacing(1, 0),
			},
		},
	},
}));

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
	padding: theme.spacing(0, 3, 3),

	p: {
		maxWidth: "80%",
		color: theme.palette.common.secondTypography,
	},

	[theme.breakpoints.down('md')]: {
		padding: theme.spacing(0, 2, 2),

		p: {
			maxWidth: "100%",
		}
	},
}));

export { Faq };