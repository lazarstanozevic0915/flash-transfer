import { styled } from "@mui/material/styles";
import { Drawer as MuiDrawer } from "@mui/material";

const Drawer = styled(MuiDrawer)(({ theme }) => ({
	display: "none",


	'& .MuiDrawer-paper': {
		width: '100%',
		maxWidth: '400px'
	},

	[theme.breakpoints.down('lg')]: {
		display: "block",
	},
}));

export { Drawer };