import { Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { heroBackgroundImg } from '../../../assets/image';
import { GlobalSpacing } from '../../../components/layout/styles';
import Video from './video';

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroBackground src={heroBackgroundImg} alt='' />

      <HeroContainer>
        {/* Left Content Section */}
        <ContentSection>
          <Typography variant='h1'>
            World first platform to convert directly crypto to cash
          </Typography>

          <Typography variant='h6'>
            Flash Transfer is the world&apos;s first platform enabling direct crypto-to-cash
            conversion, making it easy to buy, sell, or exchange crypto for cash with secure,
            instant transactions.
          </Typography>
        </ContentSection>

        <VideoSection>
          <Video />
        </VideoSection>
      </HeroContainer>
    </HeroWrapper>
  );
};

const HeroWrapper = styled(GlobalSpacing)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minHeight: 'calc(100vh - 100px)',
  backgroundColor: theme.palette.common.firstBoxBg,
  borderRadius: '0 0 50px 50px',

  [theme.breakpoints.down('lg')]: {
    minHeight: 'calc(100vh - 80px)',
    borderRadius: '0 0 20px 20px',
  },
}));

const HeroBackground = styled('img')(({ theme }) => ({
  bottom: 0,
  right: '-10%',
  position: 'absolute',
  width: '80%',
  height: '80%',
  objectFit: 'contain',
  userSelect: 'none',
  zIndex: 1,

  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
}));

const HeroContainer = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(4),
  padding: theme.spacing(4, 0),
  zIndex: 2,

  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    gap: theme.spacing(6),
    padding: theme.spacing(2, 0),
  },
}));

const ContentSection = styled(Stack)(({ theme }) => ({
  flex: 1,
  gap: theme.spacing(3),

  h1: {
    fontWeight: 600,
    maxWidth: 600,
  },

  h6: {
    maxWidth: 720,
    color: theme.palette.common.secondTypography,
  },

  [theme.breakpoints.down('lg')]: {
    maxWidth: '100%',
    alignItems: 'center',

    h1: {
      maxWidth: 'unset',
      textAlign: 'center',
    },

    h6: {
      maxWidth: 'unset',
      textAlign: 'center',
    },
  },
}));

const VideoSection = styled(Stack)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',

  [theme.breakpoints.down('lg')]: {
    alignItems: 'center',
    width: '100%',
  },
}));

export { Hero };
