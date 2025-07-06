// client/src/components/MoodSelector.js
import React from 'react';

const moods = [
  { label: '😊 Happy', value: 'happy' },
  { label: '😔 Sad', value: 'sad' },
  { label: '😟 Anxious', value: 'anxious' },
  { label: '😡 Angry', value: 'angry' },
  { label: '😴 Tired', value: 'tired' }
];

function MoodSelector({ setMood, onSubmit }) {
  return (
    <div className="my-8">
      <h2 className="text-xl font-semibold mb-4">How are you feeling today?</h2>
      <div className="flex flex-wrap gap-3">
        {moods.map((m) => (
          <button
            key={m.value}
            onClick={() => { setMood(m.value); onSubmit(); }}
            className="bg-green-100 text-green-800 px-4 py-2 rounded-full hover:bg-green-200 transition"
          >
            {m.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MoodSelector;
