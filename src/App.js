import logo from './logo.svg';
import Header from './Components/Header';
import './App.css';
import React, { useState } from 'react'
import { BrowserRouter as Router,Link,Route,Routes } from 'react-router-dom'
import Nav from './Components/Nav';
import Main from './Components/Main';
import Login from './Components/Login';
import Signup from './Components/SignUp';

 let productList = [{
    title: "iPhone 6S",
    price: "₹7,499",
    desc: "iPhone 6S for sale. Almost brand new!",
    image: 'https://i.imgur.com/N4D8PQr.png',
    location: "Samudrapur MIDC, Maharashtra, India"
  },
  {
    title: "Land Rover Discovery",
    price: "₹65,00,000",
    desc: "Diesel Car which has 36313.0 KM on it.",
    image: 'https://i.imgur.com/4RxAYRL.png',
    location: "Ambattukavu, Kochi, Kerala"
  }, {
    title: "Honda Activa (2016)",
    price: "₹48,000",
    desc: "2016 model having 14,000 KM on it.",
    image: 'https://i.imgur.com/3pNKE4D.png',
    location: "Sector 50, Chandigarh, Chandigarh"
  }]
  const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <Router>
            <Nav isLoggedIn={isLoggedIn}/>
            <Routes>
                <Route exact path="/" element={<Main product={productList}/>}/>
                {/* <Route exact path="/about" element={<About/>}/> */}
                <Route exact path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
                <Route exact path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
                {/* <Route> {login?<Profile/>:<Redirect to="/"/>}</Route> */}
                {/* <Route exact path="*"><Error /></Route> */}
            </Routes>
        </Router>
    )
}

export default App;