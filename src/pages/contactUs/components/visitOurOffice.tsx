import { styled } from '@mui/material/styles';
import { Stack, Typography } from '@mui/material';

import { GlobalSpacing } from '../../../components/layout/styles';
import { countryFlags } from '../../../assets/image';
import { Divider } from 'antd';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useEffect, useState } from 'react';

const partners = [
  {
    icon: countryFlags.UAEflag,
    country: 'Dubai',
  },
  {
    icon: countryFlags.Franceflag,
    country: 'Paris',
  },
  {
    icon: countryFlags.IvoryCoastflag,
    country: 'Ivory Coast',
  },
  {
    icon: countryFlags.UKflag,
    country: 'London Soon ...',
  },
  {
    icon: countryFlags.Singaporflag,
    country: 'Singapor Soon ...',
  },
  {
    icon: countryFlags.HongKongflag,
    country: 'Honk Kong Soon ...',
  },
];

const VisitOurOffice = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <VisitOurOfficeWrapper>
      <VisitOurOfficeContainer>
        {/* Header Section */}
        <HeaderSection>
          <Typography
            variant='h2'
            className={`${isMobile === false ? '!w-2/5 !text-start' : '!w-3/4 !text-center'}`}
          >
            Visit our offices around the world
          </Typography>

          <SubtitleSection>
            <Typography variant='h6' component='span'>
              A short paragraph describing your team. You may want to describe what they are
              responsible for
            </Typography>
          </SubtitleSection>
        </HeaderSection>

        {/* Partners Grid */}

        <MediaGrid>
          {partners.map((item, index) => (
            <DubaiCardWrapper key={index}>
              <FlagAndTitle>
                <FlagIcon>
                  <img src={item.icon} alt='UAE Flag' />
                </FlagIcon>
                <Typography fontSize={'32px'} fontWeight={600}>
                  {item.country}
                </Typography>
              </FlagAndTitle>
              <Divider />
              <Typography fontSize={'20px'} color='#6E757D'>
                <MailOutlineIcon fontSize='medium' className='mr-3 mb-1' />
                contact@flash-transfer.com
              </Typography>
            </DubaiCardWrapper>
          ))}
        </MediaGrid>
      </VisitOurOfficeContainer>
    </VisitOurOfficeWrapper>
  );
};

const VisitOurOfficeWrapper = styled(GlobalSpacing)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.common.mainBg,
}));

const VisitOurOfficeContainer = styled(Stack)(({ theme }) => ({
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
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: theme.spacing(4),

  h2: {
    fontWeight: 600,
    color: theme.palette.common.firstTypography,
  },

  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
  },

  [theme.breakpoints.down('md')]: {
    gap: theme.spacing(3),
  },
}));

const SubtitleSection = styled('span')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '28%',

  span: {
    fontWeight: 400,
    color: theme.palette.common.secondTypography,
    maxWidth: 600,
  },

  [theme.breakpoints.down('lg')]: {
    width: '70%',
    textAlign: 'center',
  },

  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
}));

const MediaGrid = styled(Stack)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: theme.spacing(3),

  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: theme.spacing(2),
  },

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: theme.spacing(1.5),
  },
}));

const DubaiCardWrapper = styled(Stack)(({ theme }) => ({
  width: '100%',
  backgroundColor: '#F9F9F9',
  borderRadius: '12px',
  padding: theme.spacing(2),
  textAlign: 'center',
  alignItems: 'start',
  justifyContent: 'center',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.05)',
}));

const FlagAndTitle = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  justifyContent: 'center',
}));

const FlagIcon = styled('div')(() => ({
  width: '52px',
  height: '52px',
  borderRadius: '50%',
  overflow: 'hidden',

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));

export { VisitOurOffice };
