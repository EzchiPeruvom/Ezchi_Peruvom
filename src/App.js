import './App.css';
import Navbar from './Components/NavBar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About/>
      <ContactUs/>
      <Footer/>
    </div>
 
  );
}

export default App;
