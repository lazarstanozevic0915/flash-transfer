import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const TransparentButton = styled(Button)(({ theme }) => ({
	textTransform: "none",
	padding: "10px 20px",
	borderRadius: "10px",
	backgroundColor: "transparent",

	"&:hover": {
		backgroundColor: "transparent",
	},

	"h1, h2, h3, h4, h5, h6, p, span, a": {
		textTransform: "none",
		textDecoration: "none",
	},
}))

const FirstButton = styled(Button)(({ theme }) => ({
	textTransform: "none",
	padding: "10px 20px",
	borderRadius: "10px",
	backgroundColor: theme.palette.common.firstButton,
	boxShadow: `0px 0px 2px 0px ${theme.palette.common.firstButton}`,

	"&:hover": {
		backgroundColor: theme.palette.common.firstButton,
	},

	"h1, h2, h3, h4, h5, h6, p, span, a": {
		textTransform: "none",
		textDecoration: "none",
	},
}))

const FirstOutlineButton = styled(FirstButton)(({ theme }) => ({
	border: `1px solid ${theme.palette.common.firstButton}`,
	backgroundColor: "unset",

	"&:hover": {
		backgroundColor: "unset",
	}
}))

const SecondButton = styled(Button)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	gap: theme.spacing(1),

	textTransform: "none",
	padding: "10px 20px",
	borderRadius: "10px",
	backgroundColor: theme.palette.common.secondButton,
	boxShadow: `0px 0px 2px 0px ${theme.palette.common.secondButton}`,

	img: {
		height: "24px",
		width: "24px",
	},

	"&:hover": {
		backgroundColor: theme.palette.common.secondButton,
	},

	"h1, h2, h3, h4, h5, h6, p, span, a": {
		textTransform: "none",
		textDecoration: "none",
		color: theme.palette.common.white,
	},
}))

const SecondOutlineButton = styled(SecondButton)(({ theme }) => ({
	border: `1px solid ${theme.palette.common.secondButton}`,
	backgroundColor: "unset",

	"&:hover": {
		backgroundColor: "unset",
	}
}))

const ThirdButton = styled(Button)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	gap: theme.spacing(1),

	textTransform: "none",
	padding: "10px 20px",
	borderRadius: "10px",
	backgroundColor: theme.palette.common.thirdButton,
	boxShadow: `0px 0px 2px 0px ${theme.palette.common.thirdButton}`,

	img: {
		height: "24px",
		width: "24px",
	},

	"&:hover": {
		backgroundColor: theme.palette.common.thirdButton,
	},

	"h1, h2, h3, h4, h5, h6, p, span, a": {
		textTransform: "none",
		textDecoration: "none",
		color: theme.palette.common.firstTypography,
	},
}))

const ThirdOutlineButton = styled(ThirdButton)(({ theme }) => ({
	border: `1px solid ${theme.palette.common.thirdButton}`,
	backgroundColor: "unset",

	"&:hover": {
		backgroundColor: "unset",
	}
}))

export {
	TransparentButton,

	FirstButton,
	FirstOutlineButton,

	SecondButton,
	SecondOutlineButton,

	ThirdButton,
	ThirdOutlineButton
};