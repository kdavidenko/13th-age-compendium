import './Navbar.css';
import { Link } from 'react-router-dom';

function App() {
  return (
      <div className="Navbar">
        <Link to="/map">World Map</Link> | 
        <Link to="/kins">Kins</Link> | 
        <Link to="/region">Region Map</Link> |
        <Link to="/icons">Icons</Link> | 
        <Link to="/convert">13th to Myrr</Link>
      </div>
  );
}

export default App;
