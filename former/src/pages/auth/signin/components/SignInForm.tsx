import { makeStyles } from '@mui/styles';
// import { authBannerImg } from '../../../../assets/image';
import { Theme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { Input } from 'antd';
import { FirstButton, ThirdButton } from '../../../../components/buttons/buttons';
import AppleIcon from '@mui/icons-material/Apple';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { icons } from '../../../../assets/image';
import { useNavigate } from 'react-router-dom';
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

const SignInForm = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/');
  };

  return (
    <div className={`${classes.root} max-lg:!w-full max-sm:px-8`}>
      <Box className='flex flex-col justify-center items-center'>
        <Typography variant='h2'>Sign in</Typography>
        <Typography variant='h5' mt={2}>
          Welcome back 👋
        </Typography>
      </Box>

      <Box className={`${classes.inputWrap} max-sm:!w-full`}>
        <Box className='flex flex-col gap-3'>
          <label className='text-lg' htmlFor='email'>
            Email address
          </label>
          <Input id='email' size='large' placeholder='Enter your email' className='py-3' />
        </Box>
        <Box className='flex flex-col gap-3'>
          <label className='text-lg' htmlFor='password'>
            Password
          </label>
          <Input.Password
            id='password'
            size='large'
            placeholder='Enter your password'
            className='py-3'
          />
        </Box>
        <Box className='flex justify-end'>
          <a href='/auth/forgot_password' className='text-[blue] font-[500] text-[14px]'>
            Forgot Password
          </a>
        </Box>
        <FirstButton onClick={handleLogin}>
          <Typography variant='body2'>Log in</Typography>
        </FirstButton>
      </Box>

      <Box className='flex justify-between items-center w-3/5 gap-5 max-sm:w-full'>
        <hr className='w-full' />
        <Box>OR</Box>
        <hr className='w-full' />
      </Box>

      <Box className='flex flex-col w-3/5 gap-5 max-sm:w-full'>
        <Box className='flex justify-between gap-5'>
          <ThirdButton className='w-1/2 bg-slate-50 sm-max:w-full'>
            <img src={icons.google} alt='' />
            <Typography variant='body2'>Google</Typography>
          </ThirdButton>
          <ThirdButton className='w-1/2 bg-slate-50 sm-max:w-full'>
            <img src={icons.facebook} alt='' className='bg-[blue] rounded-full' />
            <Typography variant='body2'>Facebook</Typography>
          </ThirdButton>
        </Box>
        <Box className='flex justify-between gap-5'>
          <ThirdButton className='w-1/2 bg-slate-50 sm-max:w-full'>
            <AppleIcon className='text-[black]' />
            <Typography variant='body2'>Apple</Typography>
          </ThirdButton>
          <ThirdButton className='w-1/2 bg-slate-50 sm-max:w-full'>
            <AccountBalanceWalletIcon className='text-[black]' />
            <Typography variant='body2'>Wallet</Typography>
          </ThirdButton>
        </Box>
      </Box>

      <Box className='flex items-center justify-center gap-2 max-sm:w-full'>
        <Typography variant='body2' className='text-[#000]'>
          Do not have an account?
        </Typography>
        <a href='/auth/signup' className='text-[blue] font-[500] text-[14px] hover:underline'>
          Register
        </a>
      </Box>
    </div>
  );
};

export default SignInForm;
