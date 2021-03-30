import {footerDiv} from './constants';
import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import {classes} from 'istanbul-lib-coverage';

function Footer() {
  return <div className={footerDiv} style={{
    backgroundColor: '#0f3460',
    padding: '10vh 20vw 10vh 10vw',


    margin:"0px ",
    display:"flex",
    flexWrap:"wrap",
    flexDirection:"row",
    justifyContent:"space-between",
  }}>


    <div>
      <h6>
        This code is available on github,
        give a star if u like it
      </h6>
      <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<GitHub/>}
          onClick={() => {
            window.location.href = 'https://www.github.com/madannaik/ImageLibrary';
          }}
      >
        Github
      </Button>
    </div>

    <div>
      <h6>You can find me on.</h6>
      <Instagram/>
      <Facebook/>
      <LinkedIn/>
      <Twitter/>
    </div>
  </div>;
}

export default Footer;