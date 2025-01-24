import { makeStyles } from '@mui/styles';
// import { authBannerImg } from '../../../../assets/image';
import { Theme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { Input } from 'antd';
import { ThirdButton } from '../../../../components/buttons/buttons';
import AppleIcon from '@mui/icons-material/Apple';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { icons } from '../../../../assets/image';
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

const SignUpForm = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box className='flex flex-col justify-center items-center'>
        <Typography variant='h2'>Create an account</Typography>
        <Typography variant='h5' mt={2}>
          Welcome back 👋
        </Typography>
      </Box>

      <Box className={classes.inputWrap}>
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
          <a href='/forgot_password' className='text-[blue] font-[500] text-[14px]'>
            Forgot Password
          </a>
        </Box>
      </Box>

      <Box className='flex justify-between items-center w-3/5 gap-5'>
        <hr className='w-full' />
        <Box>OR</Box>
        <hr className='w-full' />
      </Box>

      <Box className='flex flex-col w-3/5 gap-5'>
        <Box className='flex justify-between gap-5'>
          <ThirdButton className='w-1/2 bg-slate-50'>
            <img src={icons.google} alt='' />
            <Typography variant='body2'>Google</Typography>
          </ThirdButton>
          <ThirdButton className='w-1/2 bg-slate-50'>
            <img src={icons.facebook} alt='' className='bg-[blue] rounded-full' />
            <Typography variant='body2'>Facebook</Typography>
          </ThirdButton>
        </Box>
        <Box className='flex justify-between gap-5'>
          <ThirdButton className='w-1/2 bg-slate-50'>
            <AppleIcon className='text-[black]' />
            <Typography variant='body2'>Apple</Typography>
          </ThirdButton>
          <ThirdButton className='w-1/2 bg-slate-50'>
            <AccountBalanceWalletIcon className='text-[black]' />
            <Typography variant='body2'>Wallet</Typography>
          </ThirdButton>
        </Box>
      </Box>

      <Box className='flex items-center gap-2'>
        <Typography variant='body2' className='text-[#000]'>
          Do not have an account?
        </Typography>
        <a href='/register' className='text-[blue] font-[500] text-[14px] hover:underline'>
          Register
        </a>
      </Box>
    </div>
  );
};

export default SignUpForm;
