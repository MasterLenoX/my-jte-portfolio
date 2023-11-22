// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import ExpEduc from './components/ExpEduc';
import Gallery from './components/Gallery';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <SocialLinks></SocialLinks>
      <Home></Home>
      <About></About>
      <Gallery></Gallery>
      <Portfolio></Portfolio>
      <Skills></Skills>
      <ExpEduc></ExpEduc>
      <Contact></Contact>
    </div>
  );
}

export default App;
