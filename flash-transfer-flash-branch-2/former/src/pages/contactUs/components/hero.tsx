import { Stack, Typography, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

import { heroBackgroundImg, icons } from '../../../assets/image';
import { GlobalSpacing } from '../../../components/layout/styles';

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Contact from './contact';

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroBackground src={heroBackgroundImg} alt='' />

      <HeroContainer>
        <ContentSection>
          <Typography variant='h1'>Contact Us</Typography>
          <Typography variant='h6'>
            Get in touch with us for any questions, support, or feedback. Our team is ready to
            assist you every step of the way!
          </Typography>

          <ContactDetails>
            <ContactItem>
              <IconWrapper>
                <LocationOnOutlinedIcon className='!text-[#2475FF]' />
              </IconWrapper>
              <Typography variant='body1'>742 Evergreen Terrace Springfield, OR 12345</Typography>
            </ContactItem>

            <ContactItem>
              <IconWrapper>
                <img src={icons.phone} alt='phone' />
              </IconWrapper>
              <Typography variant='body1'>+1 (555) 123-4567</Typography>
            </ContactItem>

            <ContactItem>
              <IconWrapper>
                <EmailOutlinedIcon className='!text-[#2475FF]' />
              </IconWrapper>
              <Typography variant='body1'>support@example.com</Typography>
            </ContactItem>
          </ContactDetails>

          <Typography variant='body1'>
            Looking for careers?{' '}
            <Link href='/jobs' underline='hover' className='!text-[#2475FF]'>
              View all job openings.
            </Link>
          </Typography>
        </ContentSection>

        <ContactSection>
          <Contact />
        </ContactSection>
      </HeroContainer>

      {/* Contact Section */}
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
    maxWidth: 580,
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

const ContactSection = styled(Stack)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',

  [theme.breakpoints.down('lg')]: {
    alignItems: 'center',
    width: '100%',
  },
}));

const ContactDetails = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  margin: theme.spacing(2, 0),
  gap: theme.spacing(2),
}));

const ContactItem = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const IconWrapper = styled('div')(({ theme }) => ({
  fontSize: theme.typography.h6.fontSize,
  color: theme.palette.primary.main,
  width: 52,
  height: 52,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.common.white,
  borderRadius: 26,
}));

export { Hero };
