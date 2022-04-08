import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import Register from './Components/Register';
import Main from './Components/Main';


function App() {
  return (
    <div className="container-fluid">
    
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="register" element={<Register/>} />
        
        
        <Route path="main" element={<Main/>} />
    
      </Routes>
    </div>
  );
}

export default App;
