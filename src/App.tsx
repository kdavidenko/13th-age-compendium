import './App.css';
import Navbar from "Navbar";
import AncestryPage from './pages/ancestries/AncestryPage';
import IconPage from './pages/icons/IconPage';
import ConvertPage from './pages/convert/ConvertPage';
import WorldPage from './pages/world/WorldPage';
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
          <Route path="/world" element={ <WorldPage />} />
          <Route path="/convert" element={ <ConvertPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
