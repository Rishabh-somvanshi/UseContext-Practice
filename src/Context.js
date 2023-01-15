import { createContext } from 'react';

export const moods = {
  happy: 'I feel happy right now',
  sad: 'I feel sad right now',
};
export const Context = createContext(moods);
