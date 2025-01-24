import { makeStyles } from '@mui/styles';
// import { authBannerImg } from '../../../../assets/image';
import { Theme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { Checkbox, Input, Select } from 'antd';
import { FirstButton, ThirdButton } from '../../../../components/buttons/buttons';
import AppleIcon from '@mui/icons-material/Apple';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { icons } from '../../../../assets/image';
// import { TransparentTextField } from '../../../../components/textfield/textfield';
import Flag from 'react-world-flags';
import { useState } from 'react';

const { Option } = Select;

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

const countries = [
  { code: 'US', name: 'United States' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'CA', name: 'Canada' },
  { code: 'AU', name: 'Australia' },
];

const SignUpForm = () => {
  const [selectedLocation, setSelectedLocation] = useState<string | undefined>('US');
  const classes = useStyles();

  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (e: any) => {
    setChecked(e.target.checked);
  };

  const handleChange = (value: string) => {
    setSelectedLocation(value);
  };
  return (
    <div className={classes.root}>
      <Box className='flex flex-col justify-center items-center'>
        <Typography variant='h2'>Create an account</Typography>
        <Typography variant='h6' mt={2}>
          Let&apos;s get started with your 30 days free trial
        </Typography>
      </Box>

      <Box className={classes.inputWrap}>
        <Box className='flex flex-col gap-3'>
          <label className='text-lg' htmlFor='email'>
            Send Form
          </label>
          <Select
            className='w-full'
            defaultValue={selectedLocation}
            onChange={handleChange}
            size='large'
            placeholder='Choose your location'
          >
            {countries.map((country) => (
              <Option key={country.code} value={country.code} className='w-full'>
                <div className='flex items-center gap-2'>
                  <Flag code={country.code} className='w-5 h-5' />
                  <span>{country.name}</span>
                </div>
              </Option>
            ))}
          </Select>
        </Box>
        <Box className='flex flex-col gap-3'>
          <label className='text-lg' htmlFor='email'>
            Email address
          </label>
          <Input id='email' size='large' placeholder='Enter your email' className='py-3' />
        </Box>
        <Box className='flex flex-col gap-3'>
          <label className='text-lg' htmlFor='password'>
            Set Password
          </label>
          <Input.Password
            id='password'
            size='large'
            placeholder='Set your password'
            className='py-3'
          />
        </Box>
        <Box className='flex flex-col gap-3'>
          <label className='text-lg' htmlFor='password'>
            Confirm Password
          </label>
          <Input.Password
            id='password'
            size='large'
            placeholder='Re-enter your password'
            className='py-3'
          />
        </Box>
        <Box className='flex items-start gap-3'>
          <Checkbox
            id='marketing-checkbox'
            className='pt-1'
            checked={checked}
            onChange={handleCheckboxChange}
          />
          <label
            htmlFor='marketing-checkbox'
            className='text-gray-700 text-base cursor-pointer'
            onClick={handleCheckboxChange}
          >
            If you <strong className='font-semibold uppercase'>DO NOT</strong> wish to receive
            marketing information about our products and special offers, please check this box.
          </label>
        </Box>
        <FirstButton>
          <Typography variant='body2'>Create Account</Typography>
        </FirstButton>
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
          Already have an account?
        </Typography>
        <a href='/auth/signin' className='text-[blue] font-[500] text-[14px] hover:underline'>
          Login
        </a>
      </Box>
    </div>
  );
};

export default SignUpForm;
