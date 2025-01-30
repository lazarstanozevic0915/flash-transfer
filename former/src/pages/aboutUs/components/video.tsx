import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { aboutUsHeroImg } from '../../../assets/image';

const Video = () => {
  return (
    <HeroWrapper>
      <VideoContainer>
        <img src={aboutUsHeroImg} alt='aboutUsHeroImg' />
        <PlayButton>
          <PlayArrowIcon />
        </PlayButton>
      </VideoContainer>
    </HeroWrapper>
  );
};

const HeroWrapper = styled(Stack)({
  flex: 1,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'start',
  width: '100%',
});

const VideoContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  maxWidth: 690,
  height: '450px',
  borderRadius: '20px',
  overflow: 'hidden',
  backgroundColor: theme.palette.common.white,
  border: '6px solid #FFFFFF',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',

  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center top',
  },

  [theme.breakpoints.down('lg')]: {
    maxWidth: 'none',
  },

  [theme.breakpoints.down('md')]: {
    height: '350px',
    borderRadius: '10px',
    border: '4px solid #FFFFFF',
  },
}));

const PlayButton = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '56px',
  height: '56px',
  backgroundColor: '#FFFFFF',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.15)',
  transition: 'all 0.2s ease-in-out',

  '& svg': {
    color: '#2475FF',
    fontSize: '28px',
    marginLeft: '3px',
  },

  '&:hover': {
    transform: 'translate(-50%, -50%) scale(1.05)',
    backgroundColor: '#2475FF',
    '& svg': {
      color: '#FFFFFF',
    },
  },

  [theme.breakpoints.down('md')]: {
    width: '48px',
    height: '48px',
    '& svg': {
      fontSize: '24px',
      marginLeft: '2px',
    },
  },
}));

export default Video;
