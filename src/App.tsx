import './App.css';
import Navbar from "Navbar";
import AncestryPage from './ancestries/AncestryPage';
import IconPage from './icons/IconPage';
import ConvertPage from './convert/ConvertPage';
import {Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="background"></div> 
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" />
          <Route path="/ancestries" element={ <AncestryPage />} />
          <Route path="/icons" element={ <IconPage />} />
          <Route path="/convert" element={ <ConvertPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
