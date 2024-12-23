import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from './pages/landingpage';
import RegisterPage from './pages/registerpage';
import LoginPage from './pages/loginpage';
import FormDashboard from "./pages/formdashboard";
import SettingPage from "./pages/settingpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/formdashboard' element={<FormDashboard />} />
        <Route path='/formdashboard/settings' element={<SettingPage />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
