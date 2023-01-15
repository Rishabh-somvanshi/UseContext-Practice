import React from 'react';
import { moods, Context } from './Context';
import MoodEmoji from './MoodEmoji';

export default function App(props) {
  return (
    <Context.Provider value={moods.sad}>
      <MoodEmoji />
    </Context.Provider>
  );
}
