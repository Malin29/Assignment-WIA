import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import {Form} from './Components/Form';
import Dashboard from './Pages/Dashboard';
import Pricing from './Pages/Pricing';
import Login from './Pages/Login';
import Lock from './Pages/Lock';

function App() {
  
  return (
    <Router>
      <div className='page-container'>
      <div className='Content-wrap'>
        <Navbar/>
        <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Pricing" element={<Pricing/>} />
            <Route path="/Register" element={<Form />} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Lock" element={<Lock/>} />
        </Routes>
         
      </div>
      <Footer/>
      </div>
    </Router>
  );
}
export default App;
