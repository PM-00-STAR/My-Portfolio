import './App.css';
import Home from './PortfolioContainer/Home/Home';
import AboutMe from './PortfolioContainer/AboutMe/AboutMe';
import ContactMe from './PortfolioContainer/ContactMe/ContactMe';
import Footer from './PortfolioContainer/Footer/Footer';
import Resume from './PortfolioContainer/Resume/Resume';

function App() {
  return (
    <div className="App">
      <Home/>
      <AboutMe/>
      <Resume/>
      <ContactYou/>
      <Footer/>
    </div>
  );
}

export default App;
