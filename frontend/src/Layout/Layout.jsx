import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import UserRouter from '../Routes/UserRouter';

function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 flex justify-center items-center">
        <UserRouter />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
