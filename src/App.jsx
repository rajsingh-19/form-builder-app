import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from './pages/landingpage';
import RegisterPage from './pages/registerpage';
import LoginPage from './pages/loginpage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
