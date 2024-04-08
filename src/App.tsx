import { Button } from '@mui/material';
import './App.css';
import IconList from './icons/IconList';
import {Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="background"></div> 
      <div className="App">
        <nav>
          <Button href='/ancestries' variant='text' disabled>Ancestries</Button>
          <Button href='/classes' variant='text' disabled>Classes</Button>
          <Button href='/icons' variant='text'>Icons</Button>
          <Button href='/world' variant='text' disabled>World</Button>
        </nav>
        <Routes>
          <Route path="/" />
          <Route path="/icons" element={ <IconList />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
