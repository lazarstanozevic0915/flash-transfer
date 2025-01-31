import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Stack, Typography, IconButton, Menu, Button } from '@mui/material';
import MuiMenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LogoutIcon from '@mui/icons-material/Logout';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import CopyIcon from '@mui/icons-material/ContentCopy';

import DoneIcon from '@mui/icons-material/Done';

import { GlobalSpacing } from './styles';
import {
  currency,
  customerImg,
  gradeImg,
  icons,
  language,
  logoImg,
  nftIcons,
} from '../../assets/image';
import {
  FirstButton,
  FirstOutlineButton,
  ThirdButton,
  TransparentButton,
} from '../buttons/buttons';
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
  const [isLogin, setIsLogin] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = () => {
      const token = localStorage.getItem('token');

      if (token) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    };

    fetchData();
  }, []);

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
    const isMobile = window.innerWidth < 1024; // lg breakpoint

    if (isMobile) {
      // For mobile, position at top-right of screen
      setter({
        getBoundingClientRect: () => ({
          top: 0,
          right: 0,
          left: window.innerWidth - 311, // 311px is the width of the popup
          bottom: 0,
          width: 311,
          height: 0,
        }),
      });
    } else {
      // For desktop, position relative to clicked element
      setter(event.currentTarget);
    }

    setMobileOpen(false);
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

      {isLogin ? (
        <MobileLoginSection>
          <MobileWalletSection>
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
          </MobileWalletSection>

          <MobileActionButtons>
            <MobileIconButton onClick={(e) => handlePopupOpen(e, setNftAnchorEl)}>
              <img src={icons.nft} alt='nft icon' />
            </MobileIconButton>
            <MobileIconButton onClick={(e) => handlePopupOpen(e, setWalletAnchorEl)}>
              <img src={icons.wallet} alt='wallet icon' />
            </MobileIconButton>
            <MobileIconButton onClick={(e) => handlePopupOpen(e, setNotificationAnchorEl)}>
              <img src={icons.notification} alt='notification icon' />
            </MobileIconButton>
            <MobileIconButton onClick={(e) => handlePopupOpen(e, setLanguageAnchorEl)}>
              <img src={language.english} alt='language icon' />
            </MobileIconButton>
          </MobileActionButtons>

          <MobileUserSection onClick={handleClick}>
            <img src={customerImg} alt='customer' />
            <Typography variant='subtitle1'>Alex Smeth</Typography>
            <ExpandMoreIcon />
          </MobileUserSection>
        </MobileLoginSection>
      ) : (
        <MobileAuthButtons>
          <FirstOutlineButton fullWidth onClick={() => navigate('/auth/signin')}>
            <Typography variant='body1'>Login</Typography>
          </FirstOutlineButton>
          <FirstButton fullWidth onClick={() => navigate('/auth/signup')}>
            <Typography variant='body1'>Sign up</Typography>
          </FirstButton>
        </MobileAuthButtons>
      )}
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

  const nftMenu = [
    {
      icon: nftIcons.bronzeFeeReduction,
      label: 'Bronze Fee Reduction',
      lanugage: 'Discount on transaction fees - Bronze #44',
    },
    {
      icon: nftIcons.silverFeeReduction,
      label: 'Silver Fee Reduction',
      lanugage: 'Discount on transaction fees - Silver #30',
    },
    {
      icon: nftIcons.bronzeFeeReduction,
      label: 'Bronze Fee Reduction',
      lanugage: 'Ranking increase - Bronze #88',
    },
    {
      icon: nftIcons.silverFeeReduction,
      label: 'Silver Fee Reduction',
      lanugage: 'Ranking increase - Silver #67',
    },
  ];

  const notificationMenu = [
    {
      icon: <DoneIcon color='success' fontSize='small' />,
      label: 'success',
      title: 'Payment sent!',
      content: 'your payment #1234 has been send',
    },
    {
      icon: <CloseIcon color='error' fontSize='small' />,
      label: 'failed',
      title: 'Payment Failed!',
      content: 'your payment #1234 has been send',
    },
  ];

  const menuProps = {
    anchorOrigin: {
      vertical: 'bottom' as const,
      horizontal: 'right' as const,
    },
    transformOrigin: {
      vertical: 'top' as const,
      horizontal: 'right' as const,
    },
    TransitionProps: {
      timeout: 200,
    },
  };

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
        <img src={customerImg} alt='customer' />
        <Stack direction='row' alignItems='center' marginRight={0.5} color={'#6E757D'}>
          <ExpandMoreIcon fontSize='medium' />
        </Stack>
      </UserInfoSection>

      {/* Add popups for each section */}
      <StyledMenu
        anchorEl={currencyAnchorEl}
        open={Boolean(currencyAnchorEl)}
        onClose={() => handlePopupClose(setCurrencyAnchorEl)}
        {...menuProps}
      >
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
        {...menuProps}
      >
        {/* Add nft menu items */}
        <Typography variant='h5' mb={2} paddingY={'8px'} paddingX={'16px'}>
          NFT
        </Typography>

        {nftMenu.map((item, index) => (
          <NFTItem key={index}>
            <NFTItemSection>
              <IconSection>
                <img src={item.icon} alt={item.label} />
              </IconSection>
              <Typography variant='body1'>{item.lanugage}</Typography>
            </NFTItemSection>
            <Divider className='!my-0' />
          </NFTItem>
        ))}
      </StyledMenu>

      <StyledMenu
        anchorEl={walletAnchorEl}
        open={Boolean(walletAnchorEl)}
        onClose={() => handlePopupClose(setWalletAnchorEl)}
        {...menuProps}
      >
        <WalletContainer>
          <WalletHeaderSection>
            <Typography variant='h6'>My Wallet</Typography>
            <WalletTokenSection>
              <img src={currency.solanaIcon} alt='solana' />
              <Typography className='!text-base !text-[#6E757D] '>Solana</Typography>
            </WalletTokenSection>
          </WalletHeaderSection>

          <WalletBalanceSection>
            <Typography variant='body2' color={'#6E757D'}>
              Total Balance
            </Typography>
            <Typography variant='h4'>$54,730.00</Typography>
            <WalletAddress>
              <Typography variant='body2' color={'#6E757D'}>
                0x4f07...4075
              </Typography>
              <CopyIcon fontSize='small' />
            </WalletAddress>
          </WalletBalanceSection>

          <WalletActionsSection>
            <WalletActionButtonSection>
              <WalletActionButton>
                <img src={icons.recieveIcon} alt='recieveIcon' />
              </WalletActionButton>
              <Typography fontSize={'16px'} fontWeight={400} color={'#6E757D'}>
                Receive
              </Typography>
            </WalletActionButtonSection>
            <WalletActionButtonSection>
              <WalletActionButton>
                <img src={icons.sendIcon} alt='sendIcon' />
              </WalletActionButton>
              <Typography fontSize={'16px'} fontWeight={400} color={'#6E757D'}>
                Send
              </Typography>
            </WalletActionButtonSection>
            <WalletActionButtonSection>
              <WalletActionButton>
                <img src={icons.swapIcon} alt='swapIcon' />
              </WalletActionButton>
              <Typography fontSize={'16px'} fontWeight={400} color={'#6E757D'}>
                Swap
              </Typography>
            </WalletActionButtonSection>
          </WalletActionsSection>

          <WalletInputSection>
            <TokenInput>
              <img src={currency.usdt} alt='USDT' />
              <Typography color={'#6E757D'} fontWeight={400} fontSize={'14px'}>
                USDT
              </Typography>
              <Typography color={'#6E757D'} fontWeight={400} fontSize={'14px'}>
                0.00
              </Typography>
            </TokenInput>
            <AddressInput placeholder='To' className='!text-[#000]' />
            <WalletButtonGroup>
              <ThirdButton fullWidth>
                <Typography className='!text-[#FF3E24] !text-base'>Disconnect</Typography>
              </ThirdButton>
              <FirstButton fullWidth>
                <Typography className='!text-base'>Send</Typography>
              </FirstButton>
            </WalletButtonGroup>
          </WalletInputSection>
        </WalletContainer>
      </StyledMenu>

      <StyledMenu
        anchorEl={notificationAnchorEl}
        open={Boolean(notificationAnchorEl)}
        onClose={() => handlePopupClose(setNotificationAnchorEl)}
        {...menuProps}
      >
        {/* Add notification menu items */}
        <Typography variant='h5' mb={2} paddingY={'8px'} paddingX={'16px'}>
          Notification
        </Typography>

        {notificationMenu.map((item, index) => (
          <LanguageItem key={index}>
            <NotificationIcons>
              <NotificationIconsSection>{item.icon}</NotificationIconsSection>
              <NotificationContentSection>
                <Typography variant='body1'>{item.title}</Typography>
                <Typography variant='subtitle1' fontSize={'15px'} width={'70%'}>
                  {item.content}
                </Typography>
              </NotificationContentSection>
            </NotificationIcons>
            <Divider className='!my-0' />
          </LanguageItem>
        ))}
      </StyledMenu>

      <StyledMenu
        anchorEl={languageAnchorEl}
        open={Boolean(languageAnchorEl)}
        onClose={() => handlePopupClose(setLanguageAnchorEl)}
        {...menuProps}
      >
        <Typography variant='h5' mb={2} paddingY={'8px'} paddingX={'16px'}>
          Languages
        </Typography>

        {languageMenu.map((item, index) => (
          <LanguageItem key={index}>
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

      <StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose} {...menuProps}>
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

  useEffect(() => {
    const handleResize = () => {
      // Close all popups on resize to prevent positioning issues
      setWalletAnchorEl(null);
      setCurrencyAnchorEl(null);
      setNftAnchorEl(null);
      setNotificationAnchorEl(null);
      setLanguageAnchorEl(null);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        {isLogin ? afterLoginSection : authButtonSection}

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

  [theme.breakpoints.down(1280)]: {
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

  [theme.breakpoints.down(1280)]: {
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

  [theme.breakpoints.down(1280)]: {
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

  [theme.breakpoints.down(1280)]: {
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

  [theme.breakpoints.down(1280)]: {
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

  [theme.breakpoints.down(1280)]: {
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

  [theme.breakpoints.down(1280)]: {
    display: 'none', // Hide on mobile
  },
}));

const LoginRightSection = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacing(1),

  [theme.breakpoints.down(1280)]: {
    display: 'none', // Hide on mobile, will show in drawer instead
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

  [theme.breakpoints.down(1280)]: {
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
    transition: 'transform 0.2s ease-out !important',
    transformOrigin: 'top right !important',

    [theme.breakpoints.down(1280)]: {
      width: '311px',
      maxWidth: '311px',
      height: 'auto',
      margin: 0,
      top: '94px !important',
      right: '15px !important',
      left: 'auto !important',
      borderRadius: theme.spacing(1),
    },
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

  '&:hover': {
    backgroundColor: theme.palette.common.firstBoxBg,
    cursor: 'pointer',

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

  padding: theme.spacing(2, 2),

  gap: theme.spacing(1),
}));

const NFTItem = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

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

const NFTItemSection = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'start',
  alignItems: 'center',

  padding: theme.spacing(2, 2),

  gap: theme.spacing(1),
}));

const NotificationIcons = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'start',

  padding: theme.spacing(2, 1),

  gap: theme.spacing(1),
}));

const NotificationIconsSection = styled('div')({
  width: '36px',
  height: '36px',
  display: 'flex',
  borderRadius: '50%',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',

  backgroundColor: '#F4F5F7',
});

const NotificationContentSection = styled(Stack)(({ theme }) => ({
  width: 'auto',
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',

  gap: theme.spacing(1),
}));

const WalletHeaderSection = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const WalletTokenSection = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  height: '36px',
  border: '1px solid #D3D8DD',
  minWidth: theme.spacing(2),
  borderRadius: '18px',
  padding: theme.spacing(0, 1),
  gap: theme.spacing(1),

  img: {
    width: '20px',
    height: '20px',
    borderRadius: '10px',
  },
}));

const WalletContainer = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(2),
  minWidth: 320,
}));

const WalletBalanceSection = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  borderRadius: theme.spacing(1),
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
  alignItems: 'center',
}));

const WalletAddress = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginTop: theme.spacing(1),
  color: theme.palette.grey[600],
}));

const WalletActionsSection = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(5),
  margin: theme.spacing(2, 0),
}));

const WalletActionButtonSection = styled(Stack)(({ theme }) => ({
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  margin: theme.spacing(2, 0),
}));

const WalletActionButton = styled(Button)(({ theme }) => ({
  flexDirection: 'column',
  backgroundColor: '#2475FF',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1),
  minWidth: '44px',
  height: '44px',
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: '#2475FF',
  },
}));

const WalletInputSection = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(2),
}));

const TokenInput = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(1.5),
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: theme.spacing(1),

  img: {
    width: '22px',
    height: '22px',
  },
}));

const AddressInput = styled('input')(({ theme }) => ({
  padding: theme.spacing(1.5),
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: theme.spacing(1),
  width: '100%',
  '&::placeholder': {
    color: theme.palette.grey[500],
  },
}));

const WalletButtonGroup = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacing(2),
  marginTop: theme.spacing(1),
}));

const MobileLoginSection = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  padding: theme.spacing(2, 0),
}));

const MobileWalletSection = styled(Stack)(({ theme }) => ({
  width: '100%',
  '& > div': {
    // Target WalletAmountWrapper
    width: '100%',
  },
}));

const MobileActionButtons = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
  padding: theme.spacing(1, 0),
}));

const MobileIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderRadius: '50%',
  padding: theme.spacing(1),
  '& img': {
    width: 24,
    height: 24,
  },
}));

const MobileUserSection = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(1.5),
  backgroundColor: theme.palette.common.white,
  borderRadius: theme.spacing(1),
  '& img': {
    width: 40,
    height: 40,
    borderRadius: '50%',
  },
  '& svg': {
    color: theme.palette.grey[600],
  },
}));

export { Header };
