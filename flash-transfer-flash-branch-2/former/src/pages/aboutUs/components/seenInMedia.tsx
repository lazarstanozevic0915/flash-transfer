import { styled } from '@mui/material/styles';
import { Stack, Typography } from '@mui/material';

import { GlobalSpacing } from '../../../components/layout/styles';
import { mediaIcons } from '../../../assets/image';

const partners = [
  mediaIcons.benzinga,
  mediaIcons.bloomberg,
  mediaIcons.yahoo,
  mediaIcons.digitalJournal,
];

const SeenInMedia = () => {
  return (
    <SeenInMediaWrapper>
      <SeenInMediaContainer>
        {/* Header Section */}
        <HeaderSection>
          <Typography variant='h2'>Seen in the Media</Typography>

          <SubtitleSection>
            <Typography variant='h6' component='span'>
              A short paragraph describing your team. You may want to describe what they are
              responsible for
            </Typography>
          </SubtitleSection>
        </HeaderSection>

        {/* Partners Grid */}
        <MediaGrid>
          {partners.map((partner, index) => (
            <PartnerBox key={index}>
              <img src={partner} alt={`partner-${index}`} />
            </PartnerBox>
          ))}
        </MediaGrid>
      </SeenInMediaContainer>
    </SeenInMediaWrapper>
  );
};

const SeenInMediaWrapper = styled(GlobalSpacing)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.common.mainBg,
}));

const SeenInMediaContainer = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(6),
  padding: theme.spacing(10, 0),

  [theme.breakpoints.down('lg')]: {
    gap: theme.spacing(4),
    padding: theme.spacing(8, 0),
  },

  [theme.breakpoints.down('md')]: {
    gap: theme.spacing(3),
    padding: theme.spacing(5, 0),
  },
}));

const HeaderSection = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: theme.spacing(4),

  h2: {
    fontWeight: 600,
    color: theme.palette.common.firstTypography,
  },

  [theme.breakpoints.down('md')]: {
    gap: theme.spacing(3),
  },
}));

const SubtitleSection = styled('span')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',

  span: {
    fontWeight: 400,
    color: theme.palette.common.secondTypography,
    maxWidth: 600,
  },

  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
}));

const MediaGrid = styled(Stack)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: theme.spacing(3),

  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: theme.spacing(2),
  },

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: theme.spacing(1.5),
  },
}));

const PartnerBox = styled(Stack)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  borderRadius: '10px',
  padding: theme.spacing(1.5),
  backgroundColor: '#F6F6F6',
  border: `1.25px solid #D3D8DD`,
  transition: 'transform 0.3s ease',
  cursor: 'pointer',
  height: 100,

  img: {
    height: 40,
    width: 'auto',
    maxWidth: '90%',
    objectFit: 'contain',
  },

  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },

  [theme.breakpoints.down('xl')]: {
    height: 80,

    img: {
      height: 50,
    },
  },

  [theme.breakpoints.down('md')]: {
    height: 60,

    img: {
      height: 40,
    },
  },
}));

export { SeenInMedia };
