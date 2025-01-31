import { Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { heroBackgroundImg } from '../../../assets/image';
import { GlobalSpacing } from '../../../components/layout/styles';
import Address from './address';

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroHeaderBackground>
        <HeroBackground1 src={heroBackgroundImg} alt='' />
        <HeroBackground2 src={heroBackgroundImg} alt='' />
      </HeroHeaderBackground>

      <HeroContainer>
        <ContentSection>
          <Typography variant='h1'>Track a Transfer</Typography>

          <Typography variant='h6'>
            Home is behind, the world ahead and there are many paths to tread through shadows to the
            edge.
          </Typography>
        </ContentSection>
        <AddressFormSection>
          <Address />
        </AddressFormSection>
      </HeroContainer>
    </HeroWrapper>
  );
};

const HeroWrapper = styled(GlobalSpacing)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  minHeight: 'calc((100vh - 100px))',
  gap: 0,

  justifyContent: 'center',
}));

const HeroHeaderBackground = styled(GlobalSpacing)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minHeight: 'calc((100vh - 100px)/2)',
  width: '100%',
  backgroundColor: theme.palette.common.firstBoxBg,
  borderRadius: '0 0 50px 50px',

  [theme.breakpoints.down('lg')]: {
    minHeight: 'calc((100vh - 80px)/2)',
    borderRadius: '0 0 20px 20px',
  },
}));

const HeroBackground1 = styled('img')(({ theme }) => ({
  bottom: 0,
  right: '-32%',
  position: 'absolute',
  width: '80%',
  height: '80%',
  objectFit: 'contain',
  userSelect: 'none',
  zIndex: 1,

  [theme.breakpoints.down('lg')]: {
    height: '100%',
    width: '100%',
    right: '0',
  },
}));

const HeroBackground2 = styled('img')(({ theme }) => ({
  bottom: 0,
  left: '-42.5%',
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
  flexDirection: 'column',
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
  alignItems: 'center',

  h1: {
    fontWeight: 600,
    maxWidth: 600,
    textAlign: 'center',
  },

  h6: {
    maxWidth: 720,
    color: theme.palette.common.secondTypography,
    textAlign: 'center',
  },

  [theme.breakpoints.down('lg')]: {
    maxWidth: '100%',
    alignItems: 'center',

    h1: {
      maxWidth: 'unset',
    },

    h6: {
      maxWidth: 'unset',
    },
  },
}));

const AddressFormSection = styled(Stack)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  width: '100%',

  [theme.breakpoints.down('lg')]: {
    alignItems: 'center',
    width: '100%',
  },
}));

export { Hero };
