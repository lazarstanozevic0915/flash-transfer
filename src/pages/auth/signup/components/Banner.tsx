import { makeStyles } from '@mui/styles';
import { authBannerImg } from '../../../../assets/image';
import { Theme } from '@mui/material/styles';

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

  return (
    <div className={`${classes.root} max-lg:!w-full`}>
      <img src={authBannerImg} className={`${classes.bannerImg} max-lg:!w-2/3`} alt='' />
    </div>
  );
};

export default Banner;
