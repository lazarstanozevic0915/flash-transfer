import { styled } from '@mui/material/styles';
import { Stack } from '@mui/material';
import { Layout } from '../../components/layout/layout';
import { Hero } from './components/hero';
import { VisitUs } from './components/visitUs';
import { LocationSection } from './components/location';
import { VisitOurOffice } from './components/visitOurOffice';

const ContactUs = () => {
  return (
    <Layout>
      <HomeWrapper>
        <Hero />
        <VisitUs />
        <LocationSection />
        <VisitOurOffice />
      </HomeWrapper>
    </Layout>
  );
};

const HomeWrapper = styled(Stack)({
  display: 'flex',
  flexDirection: 'column',
});

export default ContactUs;
