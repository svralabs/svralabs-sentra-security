import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-on-primary shadow-lg hover:bg-opacity-90 transition-all active:scale-95 duration-200"
      >
        {darkMode ? (
          <span className="material-symbols-outlined">light_mode</span>
        ) : (
          <span className="material-symbols-outlined">dark_mode</span>
        )}
      </button>
    </div>
  );
}
