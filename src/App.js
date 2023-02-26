import './App.css';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import TrainSearchpage from './pages/TrainSearchpage';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Homepage/>} />
      <Route exact path='/login' element={<Login/>} />
      <Route exact path='/about' element={<About/>} />
      <Route exact path='/contact' element={<Contact/>} />
      <Route exact path="/Trainsearch" element={<TrainSearchpage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
