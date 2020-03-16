import React from 'react';
import "./App.css"
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/register'
import Startups from './pages/startups'
import Login from './pages/login'
import logo from './images/kawo-legal-logo.png';
import image1 from './images/Facebook.png'
import image2 from './images/Twitter.png'
import image3 from './images/LinkedIn.png'
import image4 from './images/Instagram.png'



function App() {
return(
    <Router>


    
    <nav className="navbar1">
       <div className=" navbar-header">
         <a className="logo navbar-brand" href={url}>
         <img src={logo} alt="new"  width="200px" height="90px"/>
         </a>
       </div>
    
    <ul className="navbar-nav">
       <li><Link to="/">Home</Link> </li>
       <li><Link to="/register">Register</Link> </li>
       <li><Link to="/startups">Startups</Link></li>
       <li><Link to="/login">Login</Link></li>
       </ul> 
        
       </nav>
     
       
    <Route exact={true} path="/" component={Home} />
    <Route exact={true} path="/register" component={Register} /> 
    <Route exact={true} path="/startups" component={Startups} />
    <Route exact={true} path="/login" component={Login} />
    

    <div className="container-fluid"> 
       <div className="row">    
       <div className="col-lg-6 foota">
         <p>
         2019 KawoLegal. All Rights Reserved
         </p>
       </div>
 
       <div className="col-lg-6 foota2">
         <ul>
           <li> <img src={image1} alt="new" width="18px" height="27px"/></li>
           <li> <img src={image2} alt="new" width="27px" height="27px"/></li>
           <li> <img src={image3} alt="new" width="27px" height="27px"/></li>
           <li> <img src={image4} alt="new" width="27px" height="27px"/></li>
         </ul>
        
       </div>
       
 </div>
 </div>

    </Router>
    
)
    

}

const url ='/';


export default App;
