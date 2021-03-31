import { footerDiv } from './constants';
import {
  Facebook,
  GitHub,

  LinkedIn,

} from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import { classes } from 'istanbul-lib-coverage';
import { Link } from 'react-router-dom';

function Footer() {
  return <div className={footerDiv} style={{
    backgroundColor: '#0f3460',
    padding: '10vh 20vw 10vh 10vw',


    margin: "0px ",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
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
        startIcon={<GitHub />}
        onClick={() => {
          window.location.href = 'https://www.github.com/madannaik/ImageLibrary';
        }}
      >
        Github
      </Button>
    </div>

    <div>
      <h6>You can find me on.</h6>
      <Link
        to={{ pathname: "https://github.com/madannaik" }}
        target='_blank'
        aria-label='Github'
      ><GitHub style={{color:"white"}}/></Link>
      <Link
        to={{ pathname: "https://www.facebook.com/madan.naik.7545/" }}
        target='_blank'
        aria-label='facebook'
      ><Facebook style={{color:"white"}}/></Link>
      <Link
        to={{ pathname: "https://www.linkedin.com/in/madan-naik-388953177" }}
        target='_blank'
        aria-label='LinkedIn'
      ><LinkedIn style={{color:"white"}}/></Link>
      
      
    </div>
  </div>;
}

export default Footer;