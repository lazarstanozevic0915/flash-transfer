import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Stack, Typography, IconButton, Menu } from '@mui/material';
import MuiMenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LogoutIcon from '@mui/icons-material/Logout';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import { GlobalSpacing } from './styles';
import { currency, customerImg, gradeImg, icons, language, logoImg } from '../../assets/image';
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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // Add state for each popup
  const [currencyAnchorEl, setCurrencyAnchorEl] = useState<null | HTMLElement>(null);
  const [nftAnchorEl, setNftAnchorEl] = useState<null | HTMLElement>(null);
  const [walletAnchorEl, setWalletAnchorEl] = useState<null | HTMLElement>(null);
  const [notificationAnchorEl, setNotificationAnchorEl] = useState<null | HTMLElement>(null);
  const [languageAnchorEl, setLanguageAnchorEl] = useState<null | HTMLElement>(null);

  const navigation = useNavigate();

  const navigate = (to: string) => {
    navigation(to);
    handleClose();
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Create handlers for each popup
  const handlePopupOpen = (event: React.MouseEvent<HTMLElement>, setter: Function) => {
    setter(event.currentTarget);
  };

  const handlePopupClose = (setter: Function) => {
    setter(null);
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
          <MenuLink key={index} href={item.link} onClick={handleDrawerToggle}>
            <Typography variant='body1'>{item.title}</Typography>
          </MenuLink>
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

  const userMenu = [
    { icon: <img src={icons.user} alt='profile' />, title: 'My Profile', link: '/profile' },
    {
      icon: <img src={icons.myTransaction} alt='myTransaction' />,
      title: 'My Transaction',
      link: '/transactions',
    },
    {
      icon: <img src={icons.myRecipients} alt='myRecipients' />,
      title: 'My Recipients',
      link: '/recipients',
    },
    {
      icon: <img src={icons.trackTransfer} alt='trackTransfer' />,
      title: 'Track a Transfer',
      link: '/track',
    },
    { icon: <img src={icons.nft} alt='nft' />, title: 'NFT', link: '/nft' },
    { icon: <img src={icons.myRank} alt='myRank' />, title: 'My Rank', link: '/rank' },
    { icon: <img src={icons.myCard} alt='myCard' />, title: 'My Cards', link: '/cards' },
    {
      icon: <img src={icons.referFriends} alt='referFriends' />,
      title: 'Refer a Friend',
      link: '/refer',
    },
    { icon: <img src={icons.setting} alt='setting' />, title: 'Setting', link: '/settings' },
  ];

  const languageMenu = [
    { icon: language.french, label: 'french', lanugage: 'French' },
    { icon: language.germany, label: 'germany', lanugage: 'Germany' },
    { icon: language.spanish, label: 'spanish', lanugage: 'Spanish' },
    { icon: language.netherlands, label: 'netherlands', lanugage: 'Netherlands' },
    { icon: language.portuguese, label: 'portuguese', lanugage: 'Portuguese' },
    { icon: language.arabic, label: 'arabic', lanugage: 'Arabic' },
    { icon: language.indian, label: 'indian', lanugage: 'Indian' },
    { icon: language.vietnamese, label: 'vietnamese', lanugage: 'Vietnamese' },
  ];

  const afterLoginSection = (
    <LoginRightSection>
      <WalletAmountWrapper onClick={(e) => handlePopupOpen(e, setCurrencyAnchorEl)}>
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

      <HeaderButtonsSection onClick={(e) => handlePopupOpen(e, setNftAnchorEl)}>
        <img src={icons.nft} alt='nft icon' />
      </HeaderButtonsSection>

      <HeaderButtonsSection onClick={(e) => handlePopupOpen(e, setWalletAnchorEl)}>
        <img src={icons.wallet} alt='wallet icon' />
      </HeaderButtonsSection>

      <HeaderButtonsSection onClick={(e) => handlePopupOpen(e, setNotificationAnchorEl)}>
        <img src={icons.notification} alt='notification icon' />
      </HeaderButtonsSection>

      <HeaderButtonsSection onClick={(e) => handlePopupOpen(e, setLanguageAnchorEl)}>
        <img src={language.english} alt='language icon' />
      </HeaderButtonsSection>

      <UserInfoSection onClick={handleClick}>
        <img src={customerImg} alt='user image' />
        <Stack direction='row' alignItems='center' marginRight={0.5} color={'#6E757D'}>
          <ExpandMoreIcon fontSize='medium' />
        </Stack>
      </UserInfoSection>

      {/* Add popups for each section */}
      <StyledMenu
        anchorEl={currencyAnchorEl}
        open={Boolean(currencyAnchorEl)}
        onClose={() => handlePopupClose(setCurrencyAnchorEl)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {/* Add currency menu items */}
        <StyledMenuItem>
          <Typography variant='body1'>USDT</Typography>
        </StyledMenuItem>
        <StyledMenuItem>
          <Typography variant='body1'>BTC</Typography>
        </StyledMenuItem>
      </StyledMenu>

      <StyledMenu
        anchorEl={nftAnchorEl}
        open={Boolean(nftAnchorEl)}
        onClose={() => handlePopupClose(setNftAnchorEl)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {/* Add NFT menu items */}
        <StyledMenuItem>
          <Typography variant='body1'>My NFTs</Typography>
        </StyledMenuItem>
        <StyledMenuItem>
          <Typography variant='body1'>Marketplace</Typography>
        </StyledMenuItem>
      </StyledMenu>

      <StyledMenu
        anchorEl={walletAnchorEl}
        open={Boolean(walletAnchorEl)}
        onClose={() => handlePopupClose(setWalletAnchorEl)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {/* Add wallet menu items */}
        <StyledMenuItem>
          <Typography variant='body1'>Balance</Typography>
        </StyledMenuItem>
        <StyledMenuItem>
          <Typography variant='body1'>Transactions</Typography>
        </StyledMenuItem>
      </StyledMenu>

      <StyledMenu
        anchorEl={notificationAnchorEl}
        open={Boolean(notificationAnchorEl)}
        onClose={() => handlePopupClose(setNotificationAnchorEl)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {/* Add notification menu items */}
        <StyledMenuItem>
          <Typography variant='body1'>Recent Notifications</Typography>
        </StyledMenuItem>
      </StyledMenu>

      <StyledMenu
        anchorEl={languageAnchorEl}
        open={Boolean(languageAnchorEl)}
        onClose={() => handlePopupClose(setLanguageAnchorEl)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {languageMenu.map((item, index) => (
          <LanguageItem>
            <CountrySection>
              <IconSection>
                <img src={item.icon} alt={item.label} />
              </IconSection>
              <Typography variant='body1'>{item.lanugage}</Typography>
            </CountrySection>
            <Divider className='!my-0' />
          </LanguageItem>
        ))}
      </StyledMenu>

      <StyledMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <UserProfileSection>
          <UserAvatar>
            <img src={customerImg} alt='user avatar' />
          </UserAvatar>
          <UserInfo>
            <Typography variant='subtitle1'>Alex Smeth</Typography>
            <StatusWrapper>
              <StatusIndicator>
                <img src={gradeImg} alt='gradeImg' />
              </StatusIndicator>
              <BorderLinearProgress variant='determinate' value={50} />
            </StatusWrapper>
          </UserInfo>
        </UserProfileSection>
        <Divider className='!my-2' />
        {userMenu.map((item, index) => (
          <StyledMenuItem key={index} onClick={() => navigate(item.link)}>
            <IconSection>{item.icon}</IconSection>
            <Typography variant='body1'>{item.title}</Typography>
          </StyledMenuItem>
        ))}
        <Divider className='!my-2' />
        <StyledMenuItem onClick={() => navigate('/')}>
          <IconSection>
            <LogoutIcon />
          </IconSection>
          <Typography variant='body1'>Log Out</Typography>
        </StyledMenuItem>
      </StyledMenu>
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

// Rename to avoid conflict with Material-UI MenuItem
const MenuLink = styled('a')(({ theme }) => ({
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

const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    minWidth: 345,
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    marginTop: theme.spacing(1),
    padding: '10px',
  },
}));

const StyledMenuItem = styled(MuiMenuItem)(({ theme }) => ({
  padding: theme.spacing(1.5, 2),
  gap: theme.spacing(2),

  svg: {
    color: theme.palette.common.secondTypography,
    fontSize: 20,
  },

  p: {
    color: theme.palette.common.firstTypography,
    fontWeight: 400,
  },

  '&:hover': {
    backgroundColor: theme.palette.common.firstBoxBg,

    svg: {
      color: theme.palette.common.firstTypography,
    },

    p: {
      color: theme.palette.common.firstTypography,
    },
  },
}));

const UserProfileSection = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(2),
}));

const UserAvatar = styled('div')(({ theme }) => ({
  width: 48,
  height: 48,
  borderRadius: '50%',
  overflow: 'hidden',

  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));

const UserInfo = styled(Stack)(({ theme }) => ({
  flexGrow: '1',
  '& .MuiTypography-subtitle1': {
    fontWeight: 600,
    color: theme.palette.common.firstTypography,
  },
  '& .MuiTypography-body2': {
    color: theme.palette.common.secondTypography,
  },
}));

const StatusWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
});

const StatusIndicator = styled('div')({
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  backgroundColor: '#F4F5F7',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',

  img: {
    width: '14px',
    height: '14px',
  },
});

const IconSection = styled('div')({
  width: '30px',
  height: '30px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
});

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  width: '100%',
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles('light', {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#F4F5F7',
    ...theme.applyStyles('dark', {
      backgroundColor: '#00C735',
    }),
  },
}));

const LanguageItem = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  gap: theme.spacing(2),

  '&:hover': {
    backgroundColor: theme.palette.common.firstBoxBg,

    svg: {
      color: theme.palette.common.firstTypography,
    },

    p: {
      color: theme.palette.common.firstTypography,
    },
  },
}));

const CountrySection = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'start',
  alignItems: 'center',

  padding: theme.spacing(1, 2),

  gap: theme.spacing(1),
}));

export { Header };
