import './App.css';
import Navbar from "Navbar";
import KinPage from './kins/KinPage';
import IconPage from './icons/IconPage';
import ConvertPage from './convert/ConvertPage';
import { Route, Routes } from 'react-router-dom';

import MapPage from './maps/MapPage';
import RegionMap from 'maps/RegionMap';
import ClassPage from 'class/ClassPage';
import MagicPage from 'magic/Magic';


function App() {
  return (
    <>
      <div className="background"></div> 
      <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" />
            <Route path="/map" element={ <MapPage />} />
            <Route path="/kins" element={ <KinPage />} />
            <Route path="/classes" element={ <ClassPage />} />
            <Route path="/region" element={ <RegionMap />} />
            <Route path="/icons" element={ <IconPage />} />
            <Route path="/convert" element={ <ConvertPage />} />
            <Route path="/magic" element={ <MagicPage />} />
          </Routes>
      </div>
    </>
  );
}

export default App;
