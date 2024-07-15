import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Login from './Login';
import Signup from './Signup';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Signup />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
