import { styled } from '@mui/material';
import { Stack, Typography } from '@mui/material';
import { GlobalSpacing } from '../../../components/layout/styles';
import {
  teamMember1Img,
  teamMember2Img,
  teamMember3Img,
  teamMember4Img,
} from '../../../assets/image';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import { FirstButton } from '../../../components/buttons/buttons';

const list = [
  {
    image: teamMember1Img,
    name: 'Aladdin',
    title: 'CEO & Founder',
  },
  {
    image: teamMember2Img,
    name: 'Aladdin',
    title: 'CEO & Founder',
  },
  {
    image: teamMember3Img,
    name: 'Aladdin',
    title: 'CEO & Founder',
  },
  {
    image: teamMember4Img,
    name: 'Aladdin',
    title: 'CEO & Founder',
  },
];

const TeamSection = () => {
  return (
    <TeamSectionWrapper>
      <TeamSectionContainer>
        <HeaderSection>
          <Typography variant='h2' width={'40%'}>
            The amazing team behind our company
          </Typography>

          <NavigationButtons display={{ xs: 'none', md: 'flex' }}>
            <NavigationButton>
              <NavigateBeforeIcon fontSize='medium' />
            </NavigationButton>

            <NavigationButton>
              <NavigateNextIcon fontSize='medium' />
            </NavigationButton>
          </NavigationButtons>
        </HeaderSection>

        {/* Features Grid */}
        <ProfileGrid>
          {list.map((item, index) => (
            <ProfileCard key={index}>
              <ProfileImage>
                <img src={item.image} alt={item.name} />
              </ProfileImage>
              <Typography variant='h5'>{item.name}</Typography>
              <Typography variant='body2'>{item.title}</Typography>
            </ProfileCard>
          ))}
        </ProfileGrid>

        <NavigationButtons display={{ xs: 'flex', md: 'none' }} justifyContent='center'>
          <NavigationButton>
            <NavigateBeforeIcon fontSize='medium' />
          </NavigationButton>

          <NavigationButton>
            <NavigateNextIcon fontSize='medium' />
          </NavigationButton>
        </NavigationButtons>
      </TeamSectionContainer>
    </TeamSectionWrapper>
  );
};

const TeamSectionWrapper = styled(GlobalSpacing)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  overflow: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    left: '50%',
    top: '50%',
    width: '95%',
    height: '100%',
    backgroundColor: theme.palette.common.firstBoxBg,
    transform: 'translate(-50%, -50%)',
    borderRadius: '50px',
    zIndex: 1,

    [theme.breakpoints.down('md')]: {
      borderRadius: '20px',
    },
  },

  [theme.breakpoints.down('lg')]: {},
}));

const TeamSectionContainer = styled(Stack)(({ theme }) => ({
  zIndex: 2,
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(5),
  padding: theme.spacing(15, 0),
  paddingBottom: theme.spacing(10),

  [theme.breakpoints.down('lg')]: {
    gap: theme.spacing(6),
    padding: theme.spacing(10, 0),
    paddingBottom: theme.spacing(5),
  },

  [theme.breakpoints.down('md')]: {
    gap: theme.spacing(4),
    padding: theme.spacing(6, 0),
    paddingBottom: theme.spacing(3),
  },
}));

const HeaderSection = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(3),

  h2: {
    fontWeight: 600,
    color: theme.palette.common.firstTypography,
  },

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
}));

const ProfileGrid = styled(Stack)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: theme.spacing(3),
  width: '100%',

  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: theme.spacing(2),
  },

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gap: theme.spacing(2),
  },
}));

const NavigationButtons = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(2),
}));

const NavigationButton = styled(FirstButton)(({ theme }) => ({
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  transition: 'all 0.3s ease',
  minWidth: 'auto',

  svg: {
    color: theme.palette.common.firstTypography,
  },

  '&:hover': {
    backgroundColor: theme.palette.common.firstButton,
    boxShadow: `0 0 10px ${theme.palette.common.firstButton}`,

    svg: {
      color: theme.palette.common.white,
    },
  },

  [theme.breakpoints.down('lg')]: {
    width: '40px',
    height: '40px',

    svg: {
      width: '20px',
      height: '20px',
    },
  },
}));

const ProfileCard = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(3),
  backgroundColor: theme.palette.common.white,
  borderRadius: '15px',
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.05)',
  transition: 'all 0.3s ease',
  cursor: 'pointer',

  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
  },
}));

const ProfileImage = styled('div')(({ theme }) => ({
  width: '100%',
  height: '300px',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'start',
  marginBottom: theme.spacing(1),
  border: '1px solid #D3D8DD',
  borderRadius: '20px',
  img: {
    width: '100%',
  },
}));

export { TeamSection };
