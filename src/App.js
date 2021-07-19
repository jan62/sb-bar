import React from 'react'
import { Route,Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Contacts from './components/Contacts/Contacts'
import Stocks from './components/Stocks/Stocks'
import AboutUs from './components/AboutUs/AboutUs'


import Basket from './components/Basket/Basket'
import Menu from './components/Menu/Menu'
import './App.css'
import Footer from './components/Footer/Footer'

import LogIn from './components/LogIn/Log/Log'


 const App=()=> {
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
    
  return (
    <div>
<Header/>

<Switch>
  
  <Route exact path="/menu" component={Menu}/>
  <Route exact path="/contacts" component={Contacts}/>
  <Route exact path="/stocks" component={Stocks}/>
  <Route exact path="/aboutUs" component={AboutUs}/>
  <Route exact path="/" component={Home}/>
 
  <Route exact path="/logIn" component={LogIn}/>
  <Route exact path="/basket" component={Basket}/>

  
</Switch>
<Footer/>
    </div>
  )
}

export default App
