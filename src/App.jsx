import './App.css';
import About from './components/About/About';
import AboutEnd from './components/AboutEnd/AboutEnd';
import Footer from './components/Footer/Footer';
import Header from './components/Navbar/Navbar';
import Slide from './components/Slide/Slide';


function App() {
  return (
    <div className="container">
      <Header />
      <About />
      <Slide />
      <AboutEnd />
      <Footer />
    </div>
  );
}

export default App;
