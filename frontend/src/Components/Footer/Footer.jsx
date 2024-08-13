import React from 'react';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cyan-200 rounded-lg shadow w-full py-3">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-between text-center text-sm text-gray-500">
        <span>© {year} <a href="#" className="hover:underline">Vcare™</a>. All Rights Reserved.</span>
        <ul className="flex flex-wrap justify-center mt-3 space-x-4 text-sm font-medium text-gray-500">
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          <li><a href="#" className="hover:underline">Licensing</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
