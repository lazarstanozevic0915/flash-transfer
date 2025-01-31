import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { GlobalSpacing } from "./styles";
import { FirstButton } from "../buttons/buttons";
import { icons, logoImg } from "../../assets/image";
import { TransparentTextField } from "../textfield/textfield";

const socialLinks = [
	{ icon: icons.twitter, link: "#" },
	{ icon: icons.facebook, link: "#" },
	{ icon: icons.instagram, link: "#" },
	{ icon: icons.youtubeWhite, link: "#" },
	{ icon: icons.pinterest, link: "#" },
];

const links = [
	{
		title: "Company",
		links: [
			{ title: "About", link: "#" },
			{ title: "FAQ", link: "#" },
			{ title: "Blog", link: "#" },
			{ title: "Countries", link: "#" },
		]
	}, {
		title: "Information",
		links: [
			{ title: "Download App", link: "#" },
			{ title: "All currency", link: "#" },
			{ title: "Support", link: "#" },
			{ title: "Status", link: "#" },
		]
	}
];

const Footer = () => {
	return (
		<FooterWrapper>
			<GlobalSpacing>
				<FooterContainer>
					{/* Logo Section */}
					<LogoSection>
						<LogoBox>
							<img src={logoImg} alt="" />
							<Typography variant="h5">Flash Transfer</Typography>
						</LogoBox>

						<Typography variant="h6">
							Easily send, buy, and sell crypto worldwide with Flash Transfer.
						</Typography>

						<SocialLinks>
							{socialLinks.map((item, index) => (
								<SocialLink key={index} href={item.link} target="_blank">
									<img src={item.icon} alt="social" />
								</SocialLink>
							))}
						</SocialLinks>
					</LogoSection>

					{/* Links Section */}
					<LinksSection>
						{links.map((section, index) => (
							<LinkGroup key={index}>
								<Typography variant="h6" component="h5">{section.title}</Typography>

								<LinkList>
									{section.links.map((item, idx) => (
										<LinkItem key={idx} href={item.link}>
											<Typography variant="h6">{item.title}</Typography>
										</LinkItem>
									))}
								</LinkList>
							</LinkGroup>
						))}
					</LinksSection>

					{/* Newsletter Section */}
					<NewsletterSection>
						<Typography variant="h6" component="h5">
							Stay Up to Date
						</Typography>

						<Typography variant="h6">
							Subscribe to our weekly newsletter for updates
						</Typography>

						<NewsletterForm>
							<TransparentTextField placeholder="Enter your email"/>
							<FirstButton>
								<Typography variant="h6" component="span">Sign up</Typography>
							</FirstButton>
						</NewsletterForm>
					</NewsletterSection>
				</FooterContainer>
			</GlobalSpacing>

			<CopyRight variant="h6">
				Copyright 2022 @ Flash Technologies, All rights reserved.
			</CopyRight>
		</FooterWrapper>
	);
};

const FooterWrapper = styled(Stack)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	backgroundColor: theme.palette.common.firstBoxBg,
	borderRadius: "50px 50px 0 0",

	[theme.breakpoints.down("md")]: {
		borderRadius: "30px 30px 0 0",
	},
}));

const FooterContainer = styled(Stack)(({ theme }) => ({
	display: "grid",
	gridTemplateColumns: "1.2fr 2fr 1.2fr",
	gap: theme.spacing(8),
	padding: theme.spacing(8, 0, 6),

	[theme.breakpoints.down("lg")]: {
		gridTemplateColumns: "repeat(2, 1fr)",
		gap: theme.spacing(6),
		padding: theme.spacing(6, 0, 4),
	},

	[theme.breakpoints.down("md")]: {
		gridTemplateColumns: "1fr",
		gap: theme.spacing(5),
		padding: theme.spacing(4, 0, 3),
		textAlign: "center",
	},
}));

const LogoSection = styled(Stack)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: theme.spacing(3),

	h6: {
		fontWeight: 400,
		color: theme.palette.common.secondTypography,
	},

	[theme.breakpoints.down("md")]: {
		gap: theme.spacing(2),
		alignItems: "center",
		textAlign: "center",

		h6: {
			maxWidth: "280px",
		}
	},

	[theme.breakpoints.down("sm")]: {
		gap: theme.spacing(1),
	},
}));

const LogoBox = styled(Stack)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	gap: theme.spacing(1.5),

	img: {
		height: "40px",
	},

	h5: {
		fontWeight: 600,
		color: theme.palette.common.firstTypography,
	},

	[theme.breakpoints.down("lg")]: {
		img: {
			height: "35px",
		}
	},

	[theme.breakpoints.down("md")]: {
		img: {
			height: "30px",
		},
	},
}));

const SocialLinks = styled(Stack)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	gap: theme.spacing(2),

	[theme.breakpoints.down("md")]: {
		gap: theme.spacing(1.5),
	},
}));

const SocialLink = styled("a")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	width: "40px",
	height: "40px",
	borderRadius: "50%",
	backgroundColor: theme.palette.common.secondSectionBg,
	transition: "all 0.3s ease",

	img: {
		width: "20px",
		height: "20px",
	},

	"&:hover": {
		transform: "translateY(-3px)",
		boxShadow: `0 0 10px ${theme.palette.common.secondSectionBg}`,
	},

	[theme.breakpoints.down("lg")]: {
		width: "35px",
		height: "35px",

		img: {
			width: "18px",
			height: "18px",
		},
	},
}));

const LinksSection = styled(Stack)(({ theme }) => ({
	display: "grid",
	gridTemplateColumns: "repeat(2, 1fr)",
	gap: theme.spacing(8),

	[theme.breakpoints.down("lg")]: {
		gap: theme.spacing(6),
	},

	[theme.breakpoints.down("md")]: {
		gap: theme.spacing(4),
	},

	[theme.breakpoints.down("sm")]: {
		gridTemplateColumns: "1fr",
		gap: theme.spacing(3),
	},
}));

const LinkGroup = styled(Stack)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: theme.spacing(2),

	h5: {
		fontWeight: 600,
		color: theme.palette.common.firstTypography,
	},

	[theme.breakpoints.down("lg")]: {
		gap: theme.spacing(1),
	},
}));

const LinkList = styled(Stack)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: theme.spacing(1.5),

	[theme.breakpoints.down("lg")]: {
		gap: theme.spacing(1),
	},
}));

const LinkItem = styled("a")(({ theme }) => ({
	textDecoration: "none",

	h6: {
		fontWeight: 400,
		color: theme.palette.common.secondTypography,
		transition: "all 0.3s ease",
	},

	"&:hover": {
		h6: {
			transform: "translateX(5px)",
		},
	},
}));

const NewsletterSection = styled(Stack)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: theme.spacing(2),

	h5: {
		fontWeight: 600,
		color: theme.palette.common.firstTypography,
	},

	h6: {
		fontWeight: 400,
		color: theme.palette.common.secondTypography,
	},

	[theme.breakpoints.down("lg")]: {
		gridColumn: "span 2",
		gap: theme.spacing(1.5),
	},

	[theme.breakpoints.down("md")]: {
		gridColumn: "auto",
		gap: theme.spacing(1),
	},
}));

const NewsletterForm = styled(Stack)(({ theme }) => ({
	maxWidth: "400px",
	marginTop: theme.spacing(1),

	display: "flex",
	flexDirection: "row",
	gap: theme.spacing(1),

	border: `1px solid ${theme.palette.common.headerBorder}`,
	borderRadius: "12px",

	button: {
		borderRadius: "0px 12px 12px 0px",
	},

	[theme.breakpoints.down("lg")]: {
		maxWidth: "unset",
	},
}));

const CopyRight = styled(Typography)(({ theme }) => ({
	borderTop: `1px solid ${theme.palette.common.firstDivider}`,
	color: theme.palette.common.secondTypography,
	padding: theme.spacing(3),
	fontWeight: 400,
	textAlign: "center",

	[theme.breakpoints.down("md")]: {
		padding: theme.spacing(2, 6),
	},
}));

export { Footer };
