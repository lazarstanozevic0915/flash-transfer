import { styled } from '@mui/material/styles';
import { Stack } from '@mui/material';

import { Layout } from '../../components/layout/layout';
import { Hero } from './components/hero';

const TrackMyOrder = () => {
  return (
    <Layout>
      <HomeWrapper>
        <Hero />
      </HomeWrapper>
    </Layout>
  );
};

const HomeWrapper = styled(Stack)({
  display: 'flex',
  flexDirection: 'column',
});

export { TrackMyOrder };
