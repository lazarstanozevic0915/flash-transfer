import { styled } from '@mui/material/styles';
import { Stack, Typography } from '@mui/material';

import { GlobalSpacing } from '../../../components/layout/styles';
import { icons } from '../../../assets/image';

const list = [
  {
    icon: icons.customerSupport,
    title: '24/7 Customer Support',
    description:
      'Our dedicated support team is available around the clock to assist with any questions, ensuring a smooth and reliable experience.',
  },
  {
    icon: icons.secureTransferIcon,
    title: 'Secure Transfers',
    description:
      'Enjoy peace of mind with robust security protocols that protect every transaction, making transfers safe and secure.',
  },
  {
    icon: icons.employees,
    title: '200+ employees',
    description:
      'With a team of over 200 skilled professionals, we bring extensive knowledge and commitment to supporting our users worldwide.',
  },
];

const WhyChooseFlashTransfer = () => {
  return (
    <WhyChooseFlashTransferWrapper>
      <WhyChooseFlashTransferContainer>
        {/* Header Section */}
        <HeaderSection>
          <Typography variant='h2'>Why Choose Flash Transfer?</Typography>

          <SubtitleSection>
            <Typography variant='h6' component='span'>
              With 24/7 support, secure transfers, and a team of 200+ experts, Flash Transfer
              ensures crypto transactions are simple, safe, and fully supported.&nbsp;
            </Typography>
          </SubtitleSection>
        </HeaderSection>

        {/* Features Grid */}
        <FeaturesGrid>
          {list.map((item, index) => (
            <FeatureBox key={index}>
              <FeatureIcon>
                <img src={item.icon} alt={item.title} />
              </FeatureIcon>

              <FeatureContent>
                <Typography variant='h5'>{item.title}</Typography>
                <Typography variant='body1'>{item.description}</Typography>
              </FeatureContent>
            </FeatureBox>
          ))}
        </FeaturesGrid>
      </WhyChooseFlashTransferContainer>
    </WhyChooseFlashTransferWrapper>
  );
};

const WhyChooseFlashTransferWrapper = styled(GlobalSpacing)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.common.mainBg,
}));

const WhyChooseFlashTransferContainer = styled(Stack)(({ theme }) => ({
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

  maxWidth: '60%',

  span: {
    fontWeight: 400,
    color: theme.palette.common.secondTypography,
  },

  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
}));

const FeaturesGrid = styled(Stack)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: theme.spacing(5),

  [theme.breakpoints.down('lg')]: {
    gap: theme.spacing(3),
  },

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
}));

const FeatureBox = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: theme.spacing(3),
  padding: theme.spacing(6),
  backgroundColor: theme.palette.common.firstSectionBg,
  borderRadius: '20px',
  transition: 'all 0.3s ease',
  cursor: 'pointer',

  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.05)',
  },

  [theme.breakpoints.down('lg')]: {
    padding: theme.spacing(5),
    gap: theme.spacing(2),
    borderRadius: '15px',
  },

  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(3),
    borderRadius: '10px',
  },
}));

const FeatureIcon = styled(Stack)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '90px',
  height: '90px',
  borderRadius: '50%',
  backgroundColor: theme.palette.common.secondSectionBg,
  boxShadow: `0 0px 10px ${theme.palette.common.secondSectionBg}`,

  img: {
    width: '50%',
    height: '50%',
    transition: 'all 0.3s ease',
  },

  [theme.breakpoints.down('lg')]: {
    width: '80px',
    height: '80px',
  },

  [theme.breakpoints.down('md')]: {
    width: '70px',
    height: '70px',
  },
}));

const FeatureContent = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),

  h5: {
    fontWeight: 600,
    color: theme.palette.common.firstTypography,
  },

  p: {
    maxWidth: '400px',
    color: theme.palette.common.secondTypography,
  },

  [theme.breakpoints.down('lg')]: {
    gap: theme.spacing(0.5),
    maxWidth: '250px',
  },
}));

export { WhyChooseFlashTransfer };
