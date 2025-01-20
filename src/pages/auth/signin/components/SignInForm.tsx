import { makeStyles } from "@mui/styles";
import { authBannerImg } from '../../../../assets/image'
import { Theme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { TransparentTextField } from "../../../../components/textfield/textfield";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '50%'
    },
    inputWrap: {
        width: '60%',
        height: '190px',
        display: 'flex',
        flexDirection: 'column'
    }
}));

const SignInForm = () => {
    const classes = useStyles();
  return (
    <div className={classes.root}>
        <Typography variant="h2">Sign in</Typography>
        <Typography variant="h5" mt={2}>Welcome back 👋</Typography>
        <Box className={classes.inputWrap}>
            
        </Box>
    </div>
  )
}

export default SignInForm;