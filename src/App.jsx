import Navbar from './components/barra';
import Pelis from './components/home';
import PeliInfo from './components/PeliInfo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import TrailerPeli from './components/Trailer';

function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={
    <>
    <Navbar  />
    <Pelis />
    </>
    } 
     />
    <Route path='/peli/:id' element={<PeliInfo />} />
    <Route path='/trailers/:id' element={<TrailerPeli />} />
    </Routes>
    </Router>
  )
}

export default App