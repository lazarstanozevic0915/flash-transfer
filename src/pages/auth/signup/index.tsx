import { styled } from '@mui/material/styles';
import { Stack } from '@mui/material';
import Banner from './components/Banner';
import SignUpForm from './components/SignUpForm';

const SignUp = () => {
  return (
    <PageWrapper>
      <Banner />
      <SignUpForm />
    </PageWrapper>
  );
};

const PageWrapper = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  height: '100vh',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    gap: theme.spacing(6),
    padding: theme.spacing(2, 0),
    height: 'auto',
  },
}));

export { SignUp };
