import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from './pages/landingpage';
import Register from './pages/registerpage';
import Login from './pages/loginpage';
import Dashboard from "./pages/dashboardpage";
import Settings from "./pages/settingsPage";
import Workspace from "./pages/workspacepage";
import Response from "./pages/responsepage"
import FormBot from "./pages/formbotpage/FormBot";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/workspace" element={<Workspace />} />
        <Route path="/response" element={<Response />} />
        <Route path="/formbot" element={<FormBot />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
