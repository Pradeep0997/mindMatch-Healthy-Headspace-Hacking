import React, { useState } from 'react';

const quotes = [
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "You are capable of amazing things.",
  "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
  "It always seems impossible until it's done. – Nelson Mandela",
  "Your present circumstances don't determine where you can go. – Nido Qubein",
  "You don't have to control your thoughts. You just have to stop letting them control you. – Dan Millman"
];

function Quote() {
  const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);

  const getNewQuote = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random]);
  };

  return (
    <div className="mt-6 text-center">
      <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400">💡 Motivational Quote</h3>
      <p className="italic text-gray-700 dark:text-gray-200 mt-2 max-w-xl mx-auto">{quote}</p>
      <button
        onClick={getNewQuote}
        className="mt-3 px-4 py-1 bg-purple-100 dark:bg-purple-700 text-purple-800 dark:text-white rounded-md hover:bg-purple-200 dark:hover:bg-purple-600 transition"
      >
        Get New Quote
      </button>
    </div>
  );
}

export default Quote;
