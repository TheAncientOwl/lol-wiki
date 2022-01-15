import { useEffect } from 'react';
import axios from 'axios';

export const App = () => {
  useEffect(() => {
    axios.get('/api/Akshan/spells').then(({ data }) => console.log(data));
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2em' }}>
      <img
        style={{ width: '700px', height: 'auto' }}
        src='http://localhost:5000/images/champion/skin/Akshan_1.jpg'
        alt='akshan skin'
      />
    </div>
  );
};
