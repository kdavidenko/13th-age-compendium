import './App.css';
import Navbar from "Navbar";
import KinPage from './kins/KinPage';
import IconPage from './icons/IconPage';
import ConvertPage from './convert/ConvertPage';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RegionState } from './app/reducers/regionReducer'
import MapPage from './maps/MapPage';
import RegionMap from 'maps/RegionMap';

function App() {
  const location = useSelector<RegionState, RegionState['region']>((state:any) => state.regionReducer.region)
 
  return (
    <>
      <div className="background"></div> 
      <div className="App">
        {location.length > 0 &&
          <Navbar />
        }
        <Routes>
          {!location && 
          <Route path="/" element={ <MapPage />} />
          }
          {location.length > 0 && 
            <Route path="/" />
          }
          <Route path="/map" element={ <MapPage />} />
          <Route path="/kins" element={ <KinPage />} />
          <Route path="/region" element={ <RegionMap />} />
          <Route path="/icons" element={ <IconPage />} />
          <Route path="/convert" element={ <ConvertPage />} />
        </Routes>

      </div>
    </>
  );
}

export default App;
