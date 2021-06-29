import React from 'react';
import './App.css';
import MainPage from './MainPage/Main';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Services from './Components/Pages/Services/Services';
import Products from './Components/Pages/Products/Products';
import SolarPanels from './Components/Pages/Dropdown_pages/Solar';
import Motors from './Components/Pages/Dropdown_pages/Motors';
import Pumps from './Components/Pages/Dropdown_pages/Pumps';
import Controllers from './Components/Pages/Dropdown_pages/Controllers';
import FAQ from './Components/Pages/FAQ/FAQ';
import ContactUs from './Components/Pages/Contact/ContactUs';



function App() {
  return (
       <Router>
        <MainPage />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/services" exact component={Services}/>
            <Route path="/products-catalogues" exact component={Products}/>
            <Route path="/solar-panels" exact component={SolarPanels}/>
            <Route path="/pumps" exact component={Pumps}/>
            <Route path="/motors" exact component={Motors}/>
            <Route path="/controllers" exact component={Controllers}/>
            <Route path="/faq" exact component={FAQ}/>
            <Route path="/contact-us" exact component={ContactUs}/>       
          </Switch>
    </Router>
  );
}

export default App;
