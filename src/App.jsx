import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Components/Pages/Home/Home';
import { Login } from './Components/Pages/Login/Login';
import { Record } from './Components/Pages/Record/Record';
import { Footer } from "./Components/Layouts/Footer/Footer";
import './App.css'

function App() {
  return (
    <Router>
      <div className='bgImg'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Record />} />
          {/* Otras rutas */}
        </Routes>
      </div>
      <Footer/>
    </Router>
  );

}

export default App;
