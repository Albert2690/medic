import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import ProtectedRoutes from '../privateRoutes/ProtectedRoutes';

function UserRouter() {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path='/' element={<HomePage />} />
      </Route>
      
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  );
}

export default UserRouter;
