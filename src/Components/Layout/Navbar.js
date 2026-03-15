import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'flowbite';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const navigate = useNavigate();

  const isProvider = !!localStorage.getItem('providertoken');
  const isWorker = !!localStorage.getItem('token');
  const isLoggedIn = isProvider || isWorker;

  const dashboardPath = isProvider ? '/home2' : '/home';
  const dashboardLabel = isProvider ? 'Provider Dashboard' : 'Worker Dashboard';

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('providertoken');
    setShowLogoutConfirm(false);
    setIsMenuOpen(false);
    navigate('/', { replace: true });
    window.location.reload();
  };

  const handleLogoutClick = (e) => {
    e.preventDefault();
    if (showLogoutConfirm) {
      logout();
    } else {
      setShowLogoutConfirm(true);
      setTimeout(() => setShowLogoutConfirm(false), 3000);
    }
  };

  const navLinkClassMobile = "flex items-center gap-3 py-3 px-4 rounded-lg text-gray-800 hover:bg-gray-100 transition-colors";

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
          {/* Logo */}
          <Link
            to={isLoggedIn ? dashboardPath : '/'}
            className="flex items-center gap-2.5 min-w-0"
          >
            <img
              src="/kooliapplogo.png"
              className="h-8 w-8 object-contain shrink-0"
              alt="Kooliapp"
            />
            <span className="text-xl font-semibold text-gray-900 truncate">
              Kooliapp
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {isLoggedIn && (
              <Link
                to={dashboardPath}
                className="flex items-center gap-2 py-2 px-4 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-medium transition-colors"
              >
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                {dashboardLabel}
              </Link>
            )}
            <Link
              to="/blog"
              className="flex items-center gap-2 py-2 px-4 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-medium transition-colors"
            >
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6m4-4h-1m-1 4h6m-4 0h-1m-1 4h6" />
              </svg>
              Blog
            </Link>

            {isLoggedIn && (
              <div className="ml-2 pl-2 border-l border-gray-200">
                <button
                  onClick={handleLogoutClick}
                  className={`flex items-center gap-2 py-2 px-4 rounded-lg font-medium transition-colors ${
                    showLogoutConfirm
                      ? 'bg-red-600 text-white hover:bg-red-700'
                      : 'text-gray-700 hover:bg-red-50 hover:text-red-600 border border-gray-300 hover:border-red-300'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2v1" />
                  </svg>
                  {showLogoutConfirm ? 'Click again to log out' : 'Log out'}
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2.5 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-gray-50">
            <nav className="px-4 py-3 space-y-1">
              {isLoggedIn && (
                <Link
                  to={dashboardPath}
                  onClick={() => setIsMenuOpen(false)}
                  className={navLinkClassMobile}
                >
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  {dashboardLabel}
                </Link>
              )}
              <Link
                to="/blog"
                onClick={() => setIsMenuOpen(false)}
                className={navLinkClassMobile}
              >
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6m4-4h-1m-1 4h6m-4 0h-1m-1 4h6" />
                </svg>
                Blog
              </Link>
              {isLoggedIn && (
                <div className="pt-2 border-t border-gray-200">
                  <button
                    onClick={handleLogoutClick}
                    className={`w-full flex items-center gap-3 py-3 px-4 rounded-lg font-medium transition-colors ${
                      showLogoutConfirm
                        ? 'bg-red-600 text-white'
                        : 'text-red-600 hover:bg-red-50'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2v1" />
                    </svg>
                    {showLogoutConfirm ? 'Tap again to log out' : 'Log out'}
                  </button>
                </div>
              )}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;
