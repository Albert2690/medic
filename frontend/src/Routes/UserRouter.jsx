import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';

function UserRouter() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  );
}

export default UserRouter;
