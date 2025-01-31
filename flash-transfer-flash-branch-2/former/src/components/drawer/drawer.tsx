import { styled } from '@mui/material/styles';
import { Drawer as MuiDrawer } from '@mui/material';

const Drawer = styled(MuiDrawer)(({ theme }) => ({
  display: 'none',

  '& .MuiDrawer-paper': {
    width: '100%',
    maxWidth: '400px',
  },

  [theme.breakpoints.down(1280)]: {
    display: 'block',
  },
}));

export { Drawer };
