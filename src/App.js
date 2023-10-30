
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationPage from './Componets/RegistrationPage';
import Home from './Componets/Home';
import {Route, Routes } from 'react-router-dom';
import Login from './Componets/Login';

function App() {
  return (
    <div className="App">
     
      <Routes>
     <Route path='/' element={<RegistrationPage/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route  path='/home' element={<Home/>}/>
      </Routes>
      
    
    </div>
  );
}

export default App;
