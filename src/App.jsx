import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import LandingPage from './pages/landingpage';
import Register from './pages/registerpage';
import Login from './pages/loginpage';
import Dashboard from "./pages/dashboardpage";
import Setting from "./pages/settingpage";
import Workspace from "./pages/workspacepage";
import Response from "./pages/responsepage"
import FormBot from "./pages/formbotpage";
import NotFound from "./pages/notfound/NotFound";

// import ResponsePage from "./pages/preyash/ResponsePage";
// import Navbar from "./pages/preyash/Navbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        {     /* Protect these routes       */}
        <Route path='/dashboard/:userId' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/setting" element={<ProtectedRoute><Setting /></ProtectedRoute>} />
        <Route path="/workspace/:dashboardId/:formId/:folderId" element={<ProtectedRoute><Workspace /></ProtectedRoute>} />
        <Route path="/response/:formId" element={<ProtectedRoute><Response /></ProtectedRoute>} />
        {/* No protection for FormBot route */}
        <Route path="/formbot/:formId" element={<FormBot />} />
        {/* Catch all route for undefined paths */}
        <Route path="*" element={<NotFound />} />
        {/* <Route path='/preyash/navbar' element={<Navbar/>} /> */}
        {/* <Route path='/preyash/response' element={<ResponsePage />} /> */}
      </Routes>
    </Router>
  )
};

export default App;
