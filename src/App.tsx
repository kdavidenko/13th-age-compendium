import './App.css';
import Navbar from "Navbar";
import IconList from './icons/IconList';
import {Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="background"></div> 
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" />
          <Route path="/icons" element={ <IconList />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
