
import './App.css';
// import Hello from './Hello';
// STEP 6 import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'
//STEP 10 import our Routes
import { Routes, Route, Link } from "react-router-dom"
// STEP 15 import the compoents
import Login from '../Login';
import Logs from '../Logs';
import Users from '../Users';
import Home from '../Home';

function App() {
  return (
    <div>
      {/* STEP 7 Create navigation for pages */}
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        {/* STEP 8 Create container for routes */}
        {/* STEP 16 Create the Links */}
        <Link to="/" className='navbar-brand'>Admin Tool</Link>
        <div className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link to="/users" className='nav-link'>Users</Link>
          </li>
          <li className='nav-item'>
            <Link to="/logs" className='nav-link'>Logs</Link>
          </li>
        </div>
        </nav>
        <div className='container mt-3'>
          {/* STEP 9 container for routes */}
          <Routes>
              {/* STEP 14 create routes*/}
              <Route path='/' element={<Home/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/logs' element={<Logs/>} />
              <Route path='/users' element={<Users/>} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
