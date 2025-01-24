import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Stack, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { GlobalSpacing } from './styles';
import { currency, customerImg, icons, language, logoImg } from '../../assets/image';
import { FirstButton, FirstOutlineButton, TransparentButton } from '../buttons/buttons';
import { Drawer } from '../drawer/drawer';
import { Divider } from 'antd';

interface MenuItemData {
  title: string;
  link: string;
}

const menuItems: MenuItemData[] = [
  { title: 'Send', link: '#' },
  { title: 'Find location', link: '#' },
  { title: 'Track a transfer', link: '#' },
  { title: 'Help', link: '#' },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigation = useNavigate();

  const navigate = (to: string) => {
    navigation(to);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const mobileMenu = (
    <MobileMenuContainer>
      <MobileMenuHeader>
        <LogoSection to='/' onClick={handleDrawerToggle}>
          <img src={logoImg} alt='flash-transfer' />
          <Typography variant='h6'>Flash Transfer</Typography>
        </LogoSection>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </MobileMenuHeader>

      <MobileMenuItems>
        {menuItems.map((item, index) => (
          <MenuItem key={index} href={item.link} onClick={handleDrawerToggle}>
            <Typography variant='body1'>{item.title}</Typography>
          </MenuItem>
        ))}
      </MobileMenuItems>

      <MobileAuthButtons>
        <FirstOutlineButton fullWidth onClick={() => navigate('/auth/signin')}>
          <Typography variant='body1'>Login</Typography>
        </FirstOutlineButton>
        <FirstButton fullWidth onClick={() => navigate('/auth/signup')}>
          <Typography variant='body1'>Sign up</Typography>
        </FirstButton>
      </MobileAuthButtons>
    </MobileMenuContainer>
  );

  const authButtonSection = (
    <RightSection>
      <TransparentButton onClick={() => navigate('/auth/signin')}>
        <Typography variant='body1'>Login</Typography>
      </TransparentButton>
      <FirstButton onClick={() => navigate('/auth/signup')}>
        <Typography variant='body1'>Sign up</Typography>
      </FirstButton>
    </RightSection>
  );

  const afterLoginSection = (
    <LoginRightSection>
      <WalletAmountWrapper>
        <WalletAmountSection>
          <SelectedCurrencyContainer>
            <img src={currency.usdt} alt='' />

            <Stack direction='row' alignItems='center'>
              <ExpandMoreIcon fontSize='medium' />
            </Stack>
          </SelectedCurrencyContainer>

          <Divider variant='solid' type='vertical' className='!mx-0' />

          <Typography variant='body2' className='!text-[#6E757D]'>
            $100.00
          </Typography>
        </WalletAmountSection>
      </WalletAmountWrapper>
      <HeaderButtonsSection>
        <img src={icons.nft} alt='nft icon' />
      </HeaderButtonsSection>
      <HeaderButtonsSection>
        <img src={icons.wallet} alt='wallet icon' />
      </HeaderButtonsSection>
      <HeaderButtonsSection>
        <img src={icons.notification} alt='notification icon' />
      </HeaderButtonsSection>
      <HeaderButtonsSection>
        <img src={language.english} alt='language icon' />
      </HeaderButtonsSection>
      <UserInfoSection>
        <img src={customerImg} alt='user image' />
        <Stack direction='row' alignItems='center' marginRight={0.5} color={'#6E757D'}>
          <ExpandMoreIcon fontSize='medium' />
        </Stack>
      </UserInfoSection>
    </LoginRightSection>
  );

  return (
    <HeaderWrapper>
      <HeaderContainer>
        {/* Left Section - Logo and Menu */}
        <LeftSection>
          <LogoSection to='/'>
            <img src={logoImg} alt='flash-transfer' />
            <Typography variant='h6'>Flash Transfer</Typography>
          </LogoSection>

          <MenuSection>
            {menuItems.map((item, index) => (
              <MenuItem key={index} href={item.link}>
                <Typography variant='body1'>{item.title}</Typography>
              </MenuItem>
            ))}
          </MenuSection>
        </LeftSection>

        {/* Right Section - Auth Buttons */}
        {afterLoginSection}

        {/* Mobile Menu Button */}
        <MobileMenuButton onClick={handleDrawerToggle} aria-label='open menu'>
          <MenuIcon />
        </MobileMenuButton>
      </HeaderContainer>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor='right'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {mobileMenu}
      </Drawer>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled(GlobalSpacing)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minHeight: '100px',
  backgroundColor: theme.palette.common.headerBg,
  borderBottom: `1px solid ${theme.palette.common.headerBorder}`,

  [theme.breakpoints.down('lg')]: {
    minHeight: '80px',
  },
}));

const HeaderContainer = styled(Stack)({
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const LeftSection = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(4),

  h6: {
    fontWeight: 600,
  },

  [theme.breakpoints.down('lg')]: {
    gap: theme.spacing(3),
  },

  [theme.breakpoints.down('md')]: {
    gap: theme.spacing(2),
  },
}));

const LogoSection = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  gap: theme.spacing(1.5),

  '& img': {
    height: '50px',
  },

  [theme.breakpoints.down('lg')]: {
    '& img': {
      height: '40px',
    },

    h6: {
      display: 'none',
    },
  },
}));

const MenuSection = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacing(4),

  [theme.breakpoints.down('lg')]: {
    display: 'none', // Hide on mobile
  },
}));

const MenuItem = styled('a')(({ theme }) => ({
  textDecoration: 'none',

  p: {
    color: theme.palette.common.secondTypography,
  },

  '&:hover': {
    p: {
      opacity: 0.8,
      color: theme.palette.common.firstTypography,
    },
  },

  [theme.breakpoints.down('lg')]: {
    p: {
      opacity: 0.75,
      color: theme.palette.common.white,
    },

    '&:hover': {
      p: {
        opacity: 1,
        color: theme.palette.common.white,
      },
    },
  },
}));

const RightSection = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacing(2),

  [theme.breakpoints.down('lg')]: {
    display: 'none', // Hide on mobile
  },
}));

const LoginRightSection = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacing(1),

  [theme.breakpoints.down('lg')]: {
    display: 'none', // Hide on mobile
  },
}));

// Mobile specific styles
const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  borderRadius: '50%',
  padding: theme.spacing(1.1),
  backgroundColor: theme.palette.common.white,

  svg: {
    color: theme.palette.common.firstTypography,
  },

  [theme.breakpoints.down('lg')]: {
    display: 'flex',
  },
}));

const MobileMenuContainer = styled(Stack)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(3),
}));

const MobileMenuHeader = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(3),
}));

const MobileMenuItems = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(3),
  marginBottom: theme.spacing(4),
}));

const MobileAuthButtons = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(2),

  'h1, h2, h3, h4, h5, h6, p, span, a': {
    color: theme.palette.common.white,
  },
}));

const WalletAmountWrapper = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(0),
  padding: theme.spacing(1),
  backgroundColor: '#ffffff',

  borderRadius: '35px',

  borderColor: '#EBECED',

  width: '155px',

  span: {
    fontWeight: 400,
    textAlign: 'center',
  },

  [theme.breakpoints.down('md')]: {
    borderRadius: '10px',
  },
}));

const WalletAmountSection = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'start',

  p: {
    cursor: 'pointer',
    fontWeight: 400,
    borderRadius: '10px',
    padding: theme.spacing(0.5, 1),
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.firstTypography,
  },
}));

const SelectedCurrencyContainer = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(0.5),
  cursor: 'pointer',
  userSelect: 'none',

  img: {
    width: 24,
    height: 24,
  },

  h6: {
    fontWeight: 500,
  },

  svg: {
    color: theme.palette.common.firstTypography,
  },

  [theme.breakpoints.down('md')]: {
    gap: theme.spacing(0.5),

    img: {
      width: 25,
      height: 25,
    },
  },
}));

const HeaderButtonsSection = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(1),
  backgroundColor: '#ffffff',
  borderRadius: '100%',
  height: theme.spacing(6),
  width: theme.spacing(6),
}));

const UserInfoSection = styled(Stack)(({ theme }) => ({
  height: theme.spacing(6),
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: theme.spacing(3),
  backgroundColor: '#ffffff',
  padding: theme.spacing(0.5),
  gap: theme.spacing(1.5),
  border: '1px solid #D3D8DD',

  img: {
    width: theme.spacing(4.8),
    height: theme.spacing(4.8),
    borderRadius: theme.spacing(2.4),
  },
}));

export { Header };
