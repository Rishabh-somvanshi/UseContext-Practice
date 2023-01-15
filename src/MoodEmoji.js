import { useContext } from 'react';
import { Context } from './Context';

export default function MoodEmoji() {
  const mood = useContext(Context);

  return (
    <div>
      <div>Hello</div>
      <p>{mood}</p>
    </div>
  );
}
