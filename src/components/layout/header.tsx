import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Stack, Typography, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { GlobalSpacing } from "./styles";
import { logoImg } from "../../assets/image";
import { FirstButton, FirstOutlineButton, TransparentButton } from "../buttons/buttons";
import { Drawer } from "../drawer/drawer";

interface MenuItemData {
	title: string;
	link: string;
}


const menuItems: MenuItemData[] = [
	{ title: "Send", link: "#" },
	{ title: "Find location", link: "#" },
	{ title: "Track a transfer", link: "#" },
	{ title: "Help", link: "#" },
];

const Header = () => {
	const [mobileOpen, setMobileOpen] = useState(false);
	
	const navigation = useNavigate();
	
	const navigate = (to: string) => {
		navigation(to);
	}
	
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const mobileMenu = (
		<MobileMenuContainer>
			<MobileMenuHeader>
				<LogoSection to="/" onClick={handleDrawerToggle}>
					<img src={logoImg} alt="flash-transfer" />
					<Typography variant="h6">Flash Transfer</Typography>
				</LogoSection>
				<IconButton onClick={handleDrawerToggle}>
					<CloseIcon />
				</IconButton>
			</MobileMenuHeader>

			<MobileMenuItems>
				{menuItems.map((item, index) => (
					<MenuItem key={index} href={item.link} onClick={handleDrawerToggle}>
						<Typography variant="body1">{item.title}</Typography>
					</MenuItem>
				))}
			</MobileMenuItems>

			<MobileAuthButtons>
				<FirstOutlineButton fullWidth onClick={() => (navigate('/auth/signin'))}>
					<Typography variant="body1">Login</Typography>
				</FirstOutlineButton>
				<FirstButton fullWidth onClick={() => (navigate('/auth/signup'))}>
					<Typography variant="body1">Sign up</Typography>
				</FirstButton>
			</MobileAuthButtons>
		</MobileMenuContainer>
	);

	return (
		<HeaderWrapper>
			<HeaderContainer>
				{/* Left Section - Logo and Menu */}
				<LeftSection>
					<LogoSection to="/">
						<img src={logoImg} alt="flash-transfer" />
						<Typography variant="h6">Flash Transfer</Typography>
					</LogoSection>

					<MenuSection>
						{menuItems.map((item, index) => (
							<MenuItem key={index} href={item.link}>
								<Typography variant="body1">{item.title}</Typography>
							</MenuItem>
						))}
					</MenuSection>
				</LeftSection>

				{/* Right Section - Auth Buttons */}
				<RightSection>
					<TransparentButton onClick={() => (navigate('/auth/signin'))}>
						<Typography variant="body1">Login</Typography>
					</TransparentButton>
					<FirstButton onClick={() => (navigate('/auth/signup'))}>
						<Typography variant="body1">Sign up</Typography>
					</FirstButton>
				</RightSection>

				{/* Mobile Menu Button */}
				<MobileMenuButton
					onClick={handleDrawerToggle}
					aria-label="open menu"
				>
					<MenuIcon />
				</MobileMenuButton>
			</HeaderContainer>

			{/* Mobile Menu Drawer */}
			<Drawer anchor="right"
				open={mobileOpen}
				onClose={handleDrawerToggle}
				ModalProps={{ keepMounted: true }}
			>
				{mobileMenu}
			</Drawer>
		</HeaderWrapper>
	);
};

const HeaderWrapper = styled(GlobalSpacing)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	minHeight: "100px",
	backgroundColor: theme.palette.common.headerBg,
	borderBottom: `1px solid ${theme.palette.common.headerBorder}`,

	[theme.breakpoints.down('lg')]: {
		minHeight: "80px",
	},
}));

const HeaderContainer = styled(Stack)({
	width: "100%",
	flexDirection: "row",
	justifyContent: "space-between",
	alignItems: "center",
});

const LeftSection = styled(Stack)(({ theme }) => ({
	flexDirection: "row",
	alignItems: "center",
	gap: theme.spacing(4),

	h6: {
		fontWeight: 600,
	},

	[theme.breakpoints.down('lg')]: {
		gap: theme.spacing(3),
	},

	[theme.breakpoints.down('md')]: {
		gap: theme.spacing(2),
	},
}));

const LogoSection = styled(Link)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	textDecoration: "none",
	gap: theme.spacing(1.5),

	"& img": {
		height: "50px",
	},

	[theme.breakpoints.down('lg')]: {
		"& img": {
			height: "40px",
		},
		
		h6: {
			display: "none",
		},
	},
}));

const MenuSection = styled(Stack)(({ theme }) => ({
	flexDirection: "row",
	gap: theme.spacing(4),

	[theme.breakpoints.down('lg')]: {
		display: 'none', // Hide on mobile
	},
}));

const MenuItem = styled("a")(({ theme }) => ({
	textDecoration: "none",

	p: {
		color: theme.palette.common.secondTypography,
	},

	"&:hover": {
		p: {
			opacity: 0.8,
			color: theme.palette.common.firstTypography,
		},
	},

	[theme.breakpoints.down('lg')]: {
		p: {
			opacity: 0.75,
			color: theme.palette.common.white,
		},

		"&:hover": {
			p: {
				opacity: 1,
				color: theme.palette.common.white,
			},
		},
	},
}));

const RightSection = styled(Stack)(({ theme }) => ({
	flexDirection: "row",
	gap: theme.spacing(2),

	[theme.breakpoints.down('lg')]: {
		display: 'none', // Hide on mobile
	},
}));

// Mobile specific styles
const MobileMenuButton = styled(IconButton)(({ theme }) => ({
	display: 'none',
	borderRadius: "50%",
	padding: theme.spacing(1.1),
	backgroundColor: theme.palette.common.white,

	svg: {
		color: theme.palette.common.firstTypography,
	},

	[theme.breakpoints.down('lg')]: {
		display: 'flex',
	},
}));

const MobileMenuContainer = styled(Stack)(({ theme }) => ({
	height: '100%',
	padding: theme.spacing(3),
}));

const MobileMenuHeader = styled(Stack)(({ theme }) => ({
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-between',
	marginBottom: theme.spacing(3),
}));

const MobileMenuItems = styled(Stack)(({ theme }) => ({
	gap: theme.spacing(3),
	marginBottom: theme.spacing(4),
}));

const MobileAuthButtons = styled(Stack)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'row',
	gap: theme.spacing(2),

	"h1, h2, h3, h4, h5, h6, p, span, a": {
		color: theme.palette.common.white,
	},
}));

export { Header };
