import logo from './logo.svg';
import './App.css';
//import ReactPlayer from 'react-player'
import VideoPlayer from './components/VideoPlayer';
import ImageShadowFunc from './components/ImageShadowFunc';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import Error from './components/Error';
import Navbar from './components/Navbar';



function App() {
  return (
    <main>
           <Navbar/> 
            <Switch>
                <Route path="/"  component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/shop" component={Shop} /> 
                <Route component={Error}  />      
                </Switch>
             
        </main>
        
  );
}

export default App;
