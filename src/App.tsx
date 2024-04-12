import React from 'react';
import './App.css';
import NavBar from "./components/navBar";
import CardList from "./components/CardList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <NavBar/>
        <CardList/>
        <Footer/>
    </div>
  );
}

export default App;
