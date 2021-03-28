
import {footer, footerDiv} from './constants';
import {GitHub} from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import {classes} from 'istanbul-lib-coverage';

function Footer(){
  return <div style={{ backgroundColor:"#0f3460",padding:"10vh 20vw 10vh 10vw"}} className={footerDiv}>
    <p>
      This code is available on github,
      give a star if u like it
    </p>
    <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<GitHub />}
    >
      Delete
    </Button>

      </div>

}

export  default  Footer;