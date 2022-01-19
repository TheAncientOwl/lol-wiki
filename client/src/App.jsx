import { useEffect, useState } from 'react';
import axios from 'axios';
import NotFound404SRC from './images/404-not-found.jpg';

import { Pagination } from './components/Pagination';
import { Navbar } from './components/Navbar';
import { BigCard } from './components/BigCard';
import { SmallCard } from './components/SmallCard';

export const SearchFieldEmpty = '';
const ActiveChampionNull = '';

export const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(0);
  const [champions, setChampions] = useState([]);
  const [activeChampion, setActiveChampion] = useState(ActiveChampionNull);

  useEffect(() => {
    const escKeyPressedListener = event => {
      if (event.key === 'Escape') {
        setActiveChampion('');
      }
    };

    document.addEventListener('keydown', escKeyPressedListener);

    return () => document.removeEventListener('keydown', escKeyPressedListener);
  }, []);

  const fetchChampions = () => {
    axios.get(`/api/champions/page/${currentPage}/size/16`).then(response => {
      setChampions(response.data.champions);
      setPagesCount(response.data.pagesCount);
    });
  };

  useEffect(fetchChampions, [currentPage]);

  const handlePageChange = newPage => {
    if (newPage < 1 || newPage > pagesCount) return;

    setCurrentPage(newPage);
  };

  const handleSearch = filter => {
    axios
      .get(`api/${filter}/summary`)
      .then(response => {
        setChampions([{ number: 1, ...response.data }]);
        setPagesCount(1);
      })
      .catch(error => {
        if (error.response) {
          setChampions([]);
        }
      });
  };

  const handleReset = () => {
    setActiveChampion(ActiveChampionNull);
    setCurrentPage(1);
    fetchChampions();
  };

  const championsCards = (
    <div className='row g-1'>
      {champions.map(champion => (
        <div key={champion.id} className='col-12 col-md-6 col-lg-3 d-flex align-items-stretch'>
          <SmallCard
            onClick={() => setActiveChampion(champion.name)}
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
  );

  return (
    <div className='app-container bg-gradient-blue text-light-gray'>
      <Navbar onSearch={handleSearch} onReset={handleReset} />

      <div
        style={{
          display: activeChampion === ActiveChampionNull ? 'none' : 'flex',
          zIndex: 99999,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.65)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {activeChampion !== ActiveChampionNull && (
          <BigCard onClose={() => setActiveChampion(ActiveChampionNull)} championName={activeChampion} />
        )}
      </div>

      {champions.length === 0 && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className='col-12 col-md-6 col-lg-3 d-flex align-items-stretch'>
            <SmallCard
              number={404}
              id={404}
              avatarURL={NotFound404SRC}
              name={'Not Found'}
              tags={['oooppps', 'nope']}
              blurb={'This is not the champion you are looking for...'}
            />
          </div>
        </div>
      )}

      {champions.length === 1 && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div key={champions[0].id} className='col-12 col-md-6 col-lg-3 d-flex align-items-stretch'>
            <SmallCard
              onClick={() => setActiveChampion(champions[0].name)}
              number={champions[0].number}
              id={champions[0].id}
              avatarURL={champions[0].avatarURL}
              name={champions[0].name}
              tags={champions[0].tags}
              blurb={champions[0].blurb}
            />
          </div>
        </div>
      )}

      {champions.length > 1 && (
        <>
          <div className='container'>{championsCards}</div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Pagination currentPage={currentPage} onPageChange={handlePageChange} pagesCount={pagesCount} />
          </div>
        </>
      )}
    </div>
  );
};
