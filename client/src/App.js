import './App.css';
import Home from './PortfolioContainer/Home/Home';
import AboutMe from './PortfolioContainer/AboutMe/AboutMe';
import MyProjects from './PortfolioContainer/MyProjects/MyProjects';
import Footer from './PortfolioContainer/Footer/Footer';
import Resume from './PortfolioContainer/Resume/Resume';
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
      
        <Home/>
      <AboutMe/>
      <Resume/>
      <MyProjects/>
      <Footer/>
        
        
      
      </Router>
      
      
    </div>
  );
}

export default App;
