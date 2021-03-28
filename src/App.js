import ImageOfTheDay from "./components/imageoftheday";
import ButtonAppBar from './components/Appbar';
import Footer from './components/footer';
import {AppCSS} from './components/constants';


function App() {
  return (
    <div className={AppCSS} style={{margin:"0",padding:"0"}}>
      <ButtonAppBar/>
      <ImageOfTheDay/>


    </div>
  );
}

export default App;
