import { makeStyles } from '@mui/styles';
// import { authBannerImg } from '../../../../assets/image';
import { Theme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { Input } from 'antd';
import { FirstButton } from '../../../../components/buttons/buttons';
// import { TransparentTextField } from '../../../../components/textfield/textfield';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '50%',
    gap: '30px',
  },
  inputWrap: {
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  socialButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 16px',
    borderRadius: '8px',
    backgroundColor: '#F8FAFC',
    '&:hover': {
      backgroundColor: '#F1F5F9',
    },
  },
}));

const ForgotPasswordForm = () => {
  const classes = useStyles();
  return (
    <div className={`${classes.root} max-lg:!w-full`}>
      <Box className='flex flex-col justify-center items-center'>
        <Typography variant='h2'>Forgot Password</Typography>
        <Typography variant='h6' mt={2} color={'#6E757D'} className='w-3/4 text-center'>
          Reset your password to securely regain access to your account.
        </Typography>
      </Box>

      <Box className={classes.inputWrap}>
        <Box className='flex flex-col gap-3'>
          <label className='text-lg' htmlFor='email'>
            Enter your email to reset your password
          </label>
          <Input id='email' size='large' placeholder='Enter your email' className='py-3' />
        </Box>
        <FirstButton>
          <Typography variant='body2'>Send an email</Typography>
        </FirstButton>
      </Box>

      <Box className='flex items-center gap-2'>
        <Typography variant='body2' className='text-[#000]'>
          Already have an account?
        </Typography>
        <a href='/auth/signin' className='text-[blue] font-[500] text-[14px] hover:underline'>
          Login
        </a>
      </Box>
    </div>
  );
};

export default ForgotPasswordForm;
