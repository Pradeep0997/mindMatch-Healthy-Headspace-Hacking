import React from 'react';

const moodRecommendations = {
  happy: [
    "Share your joy with someone you love 😊",
    "Take a walk and enjoy nature 🌳",
    "Journal about what you're grateful for 📔",
  ],
  sad: [
    "Talk to a friend or write your feelings 📝",
    "Listen to comforting music 🎶",
    "Take deep breaths and give yourself time 🫂",
  ],
  anxious: [
    "Try 4-7-8 deep breathing 🧘",
    "Avoid caffeine and drink water 💧",
    "Use grounding techniques like '5-4-3-2-1' 🔍",
  ],
  angry: [
    "Go for a walk or run to release tension 🏃",
    "Write about what made you angry ✍️",
    "Use calming apps or music 🎧",
  ],
  tired: [
    "Take a short nap (15–20 mins) 😴",
    "Stretch or do light movement 🧘‍♀️",
    "Stay hydrated and rest well 🛌",
  ]
};

function Recommendation({ mood }) {
  const tips = moodRecommendations[mood.toLowerCase()] || [
    "Take care of yourself 🌱",
    "Do something that brings you peace ☀️"
  ];

  return (
    <div className="mt-6 space-y-4">
      <h2 className="text-2xl font-semibold text-green-600 dark:text-green-300">
        🌟 Recommendations for feeling {mood}
      </h2>
      <ul className="list-disc pl-5 text-gray-700 dark:text-gray-200 space-y-2">
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
}

export default Recommendation;
