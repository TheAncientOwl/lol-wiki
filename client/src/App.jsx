import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import './scss/App.scss';
import axios from 'axios';
import { SmallCard } from './components/SmallCard';
import { Pagination } from './components/Pagination';

export const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(0);
  const [champions, setChampions] = useState([]);

  useEffect(() => {
    axios.get(`/api/champions/page/${currentPage}/size/16`).then(response => {
      setChampions(response.data.champions);
      setPagesCount(response.data.pagesCount);
    });
  }, [currentPage]);

  const handlePageChange = newPage => {
    if (newPage < 1 || newPage > pagesCount) return;

    setCurrentPage(newPage);
  };

  return (
    <div className='app-container'>
      <Navbar />

      <div className='container'>
        <div className='row g-1'>
          {champions.map(champion => (
            <div key={champion.id} className='col-12 col-md-6 col-lg-3 d-flex align-items-stretch'>
              <SmallCard
                number={champion.number}
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

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination currentPage={currentPage} onPageChange={handlePageChange} pagesCount={pagesCount} />
      </div>
    </div>
  );
};
