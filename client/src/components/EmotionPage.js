import React from 'react';
import { useParams } from 'react-router-dom';

const emotionData = {
  happy: {
    title: "Feeling Happy 😊",
    description: "That's wonderful! Keep spreading joy and gratitude.",
    image: "https://source.unsplash.com/featured/?happy,smile"
  },
  sad: {
    title: "Feeling Sad 😢",
    description: "It's okay to feel down. Take time to care for yourself.",
    image: "https://source.unsplash.com/featured/?sad,alone"
  },
  anxious: {
    title: "Feeling Anxious 😟",
    description: "Breathe deeply. You are safe and supported.",
    image: "https://source.unsplash.com/featured/?anxiety,calm"
  },
  angry: {
    title: "Feeling Angry 😠",
    description: "Let your emotions out in a healthy way. You're in control.",
    image: "https://source.unsplash.com/featured/?angry,peace"
  },
  tired: {
    title: "Feeling Tired 😴",
    description: "Rest is essential. Take it easy and recharge.",
    image: "https://source.unsplash.com/featured/?tired,sleep"
  }
};

function EmotionPage() {
  const { name } = useParams();
  const data = emotionData[name.toLowerCase()] || {
    title: "Unknown Emotion",
    description: "We couldn't find that feeling.",
    image: "https://source.unsplash.com/featured/?emotion"
  };

  return (
    <div className="text-center space-y-6">
      <h2 className="text-3xl font-bold text-green-600 dark:text-green-300">{data.title}</h2>
      <p className="text-lg">{data.description}</p>
      <img src={data.image} alt={data.title} className="mx-auto w-full max-w-md rounded-lg shadow-lg" />
    </div>
  );
}

export default EmotionPage;
