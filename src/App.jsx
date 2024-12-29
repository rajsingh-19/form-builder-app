import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LandingPage from './pages/landingpage';
import Register from './pages/registerpage';
import Login from './pages/loginpage';
import Dashboard from "./pages/dashboardpage";
import Setting from "./pages/settingpage";
import Workspace from "./pages/workspacepage";
import Response from "./pages/responsepage"
import FormBot from "./pages/formbotpage/FormBot";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/workspace/:formId" element={<Workspace />} />
        <Route path="/response/:formId" element={<Response />} />
        <Route path="/formbot/:formId" element={<FormBot />} />
      </Routes>
    </Router>
  )
};

export default App;
