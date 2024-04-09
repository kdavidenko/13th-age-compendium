import { Link } from "react-router-dom";
import './App.css';

export default function Navbar() {
    return (
        <div className="App">
            <center>
                <ul>
                    <li><Link to="/ancestries" variant='text' disabled>Ancestries</Link></li>
                    <li><Link to="/classes" variant='text' disabled>Classes</Link></li>
                    <li><Link to="/icons" variant='text'>Icons</Link></li>
                    <li><Link to="/world" variant='text' disabled>World</Link></li>
                </ul>
            </center>
        </div>
    )
}