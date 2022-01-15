import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import './scss/App.scss';
import axios from 'axios';
import { MinCard } from './components/MinCard';

export const App = () => {
  const [page, setPage] = useState(1);
  const [champions, setChampions] = useState([]);

  useEffect(() => {
    axios.get('/api/champions/page/1/size/16').then(response => setChampions(response.data));
  }, [page]);

  return (
    <div className='app-container'>
      <Navbar />

      <div className='container'>
        <div className='row g-1'>
          {champions.map(champion => (
            <div key={champion.id} className='col-12 col-md-6 col-lg-3 d-flex align-items-stretch'>
              <MinCard
                id={champion.id}
                avatarURL={champion.avatarURL}
                name={champion.name}
                tags={champion.tags}
                blurb={champion.blurb}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
