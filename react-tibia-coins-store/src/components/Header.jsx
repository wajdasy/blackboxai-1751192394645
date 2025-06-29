import React, { useContext, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { openMobileMenu, setOpenMobileMenu } = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
          Tibia Coins Store
        </Link>
        <nav className="hidden md:flex space-x-6">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition'}>
            Buy Coins
          </NavLink>
          <NavLink to="/faq" className={({ isActive }) => isActive ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition'}>
            FAQ
          </NavLink>
          <NavLink to="/terms" className={({ isActive }) => isActive ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition'}>
            Terms
          </NavLink>
          <NavLink to="/privacy" className={({ isActive }) => isActive ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition'}>
            Privacy
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition'}>
            Contact
          </NavLink>
        </nav>
        <button
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle Dark Mode"
          className="ml-4 p-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </header>
  );
};

export default Header;
