// client/src/App.js
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import MoodSelector from './components/MoodSelector';
import Recommendation from './components/Recommendation';
import Affirmation from './components/Affirmation';
import Resources from './components/Resources';
import EmotionPage from './components/EmotionPage';
import Quote from './components/Quote';

function App() {
  const [mood, setMood] = useState('');
  const [showRecommendation, setShowRecommendation] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Load dark mode preference from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('darkMode');
    setDarkMode(stored === 'true');
  }, []);

  // Update <html> tag class
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (


    <div className={darkMode ? 'dark' : ''}>
      
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-100 to-white dark:from-gray-900 dark:to-black transition-colors duration-500 text-gray-800 dark:text-gray-100">
       

        {/* ✅ Navbar */}
        <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-300 flex items-center gap-2">
              🌿 MindMatch
            </h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-green-200 dark:bg-gray-700 px-4 py-2 rounded-md text-sm font-medium text-gray-900 dark:text-white hover:bg-green-300 dark:hover:bg-gray-600 transition"
            >
              {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
          </div>
        </header>

        {/* ✅ Main Content */}
        <main className="flex-grow flex items-center justify-center px-4 py-10">
          <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 sm:p-10 animate-fadeIn text-base sm:text-lg">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Affirmation />
                    <Quote />

                    {!showRecommendation ? (
                      <MoodSelector
                        setMood={setMood}
                        onSubmit={() => setShowRecommendation(true)}
                      />
                    ) : (
                      <Recommendation mood={mood} />
                    )}

                    <Resources />

                    {/* ✅ Footer */}
                    <footer className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
                      Made with 💚 for mental health · MindMatch © 2025
                    </footer>
                  </>
                }
              />
              <Route path="/emotion/:name" element={<EmotionPage />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
