import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Phones from './pages/Phones';
import PhoneDetails from './pages/PhoneDetails';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
    <Routes>
      <Route element={<Navbar/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/phones" element={<Phones/>}/>
        <Route path="/phones/:phoneId" element={<PhoneDetails/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
