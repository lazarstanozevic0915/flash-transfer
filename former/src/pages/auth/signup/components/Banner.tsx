import { makeStyles } from '@mui/styles';
import { authBannerImg, logoImg } from '../../../../assets/image';
import { Theme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
  },
  bannerImg: {
    width: '70%',
    height: 'auto',
  },
}));

const Banner = () => {
  const classes = useStyles();

  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <div className={`${classes.root} max-lg:!w-full`}>
      <img
        src={isSmallScreen ? logoImg : authBannerImg}
        className={`${classes.bannerImg} max-lg:w-2/3 max-sm:!w-1/4 max-sm:mt-14`}
        alt={isSmallScreen ? 'Company logo' : 'Authentication banner'}
      />
    </div>
  );
};

export default Banner;
