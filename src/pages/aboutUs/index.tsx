import { styled } from '@mui/material/styles';
import { Stack } from '@mui/material';
import { Layout } from '../../components/layout/layout';
import { Hero } from './components/hero';
import { WhyChooseFlashTransfer } from './components/whyChooseFlashTransfer';
import { TeamSection } from './components/team';
import { SeenInMedia } from './components/seenInMedia';
import { VisitOurOffice } from './components/visitOurOffice';

const AboutUs = () => {
  return (
    <Layout>
      <HomeWrapper>
        <Hero />
        <WhyChooseFlashTransfer />
        <TeamSection />
        <SeenInMedia />
        <VisitOurOffice />
      </HomeWrapper>
    </Layout>
  );
};

const HomeWrapper = styled(Stack)({
  display: 'flex',
  flexDirection: 'column',
});

export default AboutUs;
