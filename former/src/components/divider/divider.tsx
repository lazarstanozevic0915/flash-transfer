import { styled } from "@mui/material/styles";
import { Divider as MuiDivider } from "@mui/material";

const Divider = styled(MuiDivider)(({ theme }) => ({
	backgroundColor: theme.palette.common.firstDivider,
}))

export { Divider };
