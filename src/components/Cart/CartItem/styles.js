  
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  container: {
    marginTop: 75,
    height: 300,
    width: "auto",
  },
  media: {
    height: 100,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));