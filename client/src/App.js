import { useEffect } from 'react';
import axios from 'axios';

export const App = () => {
  useEffect(() => {
    axios.get('/api/Akshan/spells').then(({ data }) => console.log(data));
  }, []);

  return (
    <div>
      <img src='http://localhost:5000/images/champion/skin/Akshan_1.jpg' alt='akshan skin' />
    </div>
  );
};
