import { styled } from "@mui/material/styles";
import { TextField as MuiTextField } from "@mui/material";

const TransparentTextField = styled(MuiTextField)(({ theme }) => ({
	flex: 1,
	outline: "none", 
	border: "none",

	fieldset: {
		display: "none",
	},

	input: {
		fontSize: 20,
		fontWeight: 500,
		textAlign: "start",
		color: theme.palette.common.firstTypography,
		padding: theme.spacing(2),
		
		[theme.breakpoints.down("md")]: {
			fontSize: 16,
			padding: theme.spacing(1.5),
		}
	},
}))

export { TransparentTextField }
