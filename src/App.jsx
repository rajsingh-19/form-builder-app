import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from './pages/landingpage';
import Register from './pages/registerpage';
import Login from './pages/loginpage';
import Dashboard from "./pages/dashboardpage";
import Settings from "./pages/settingsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
