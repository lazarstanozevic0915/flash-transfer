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

const PageWrapper = styled(Stack)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  height: '100vh',
});

export { SignUp };
