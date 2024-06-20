import React from "react";
import Navbar from "./Navbar";
import ReactDOM from 'react-dom/client'
import './index.css';
function App(){

  return(
    <>
    <div className="tit">
    <h1>LetYouCook.🗿</h1>
    </div>
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <h1>Your Sigma Kitchen</h1>
      <p>"Welcome to our recipe app, where culinary creativity meets convenience!
         Discover a world of flavors at your fingertips. 
         From savory classics to exotic delights, we've got your taste buds covered."</p>
      </header>
    </div>
    <main className="main">
        <h1>Hey Lets Cook What do you have right now??</h1>
      </main>
    </>
  )
}

export default App;
