import React from 'react';

const affirmations = [
  "You are enough just as you are.",
  "You deserve peace, joy, and rest.",
  "You are stronger than you think.",
  "Your feelings are valid.",
  "You bring value to the world.",
];

function getRandomAffirmation() {
  return affirmations[Math.floor(Math.random() * affirmations.length)];
}

function Affirmation() {
  const affirmation = getRandomAffirmation();

  return (
    <div className="mb-6 text-center">
      <p className="text-yellow-600 dark:text-yellow-300 font-medium text-lg">
        🌞 Daily Affirmation:
      </p>
      <p className="italic text-gray-800 dark:text-gray-100 mt-1">
        {affirmation}
      </p>
    </div>
  );
}

export default Affirmation;
