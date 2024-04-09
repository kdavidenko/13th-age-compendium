import './Navbar.css';
import {Link } from 'react-router-dom';

function App() {
  return (
      <div className="Navbar">
          <Link to="/ancestries">Ancestries</Link> - 
          <Link to="/classes">Classes</Link> - 
          <Link to="/icons">Icons</Link> - 
          <Link to="/world">World</Link> - 
          <Link to="/convert">13th to Myrr</Link>
      </div>
  );
}

export default App;
