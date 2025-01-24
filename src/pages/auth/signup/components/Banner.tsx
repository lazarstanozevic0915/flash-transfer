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
    <div className={classes.root}>
      <img src={authBannerImg} className={classes.bannerImg} alt='' />
    </div>
  );
};

export default Banner;
