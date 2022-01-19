import { useEffect, useState } from 'react';
import axios from 'axios';
import NotFound404SRC from './images/404-not-found.jpg';

import { Pagination } from './components/Pagination';
import { Navbar } from './components/Navbar';
import { BigCard } from './components/BigCard';
import { SmallCard } from './components/SmallCard';
import { moveToTopAnchor, TopAnchor } from './components/TopAncor';

export const SearchFieldEmpty = '';
const ActiveChampionNull = '';
const responsiveCardClass = 'col-12 col-md-6 col-lg-3 d-flex align-items-stretch';

const SingleCardContainer = ({ card }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className={responsiveCardClass}>{card}</div>
    </div>
  );
};

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

    moveToTopAnchor();
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
    moveToTopAnchor();
  };

  const championsCards = (
    <div className='row g-1'>
      {champions.map(champion => (
        <div key={champion.id} className={responsiveCardClass}>
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
      <TopAnchor />

      <div
        onClick={() => setActiveChampion('')}
        style={{ display: activeChampion === ActiveChampionNull ? 'none' : 'flex' }}
        className='app-big-card-overlay'>
        {activeChampion !== ActiveChampionNull && (
          <BigCard onClose={() => setActiveChampion(ActiveChampionNull)} championName={activeChampion} />
        )}
      </div>

      {champions.length === 0 && (
        <SingleCardContainer
          card={
            <SmallCard
              onClick={() => alert('Nope...')}
              number={404}
              id={404}
              avatarURL={NotFound404SRC}
              name={'Not Found'}
              tags={['whoops', 'nope', '404']}
              blurb={
                <>
                  <div style={{ marginTop: '1em' }} />
                  This is not the champion you are looking for...
                </>
              }
            />
          }
        />
      )}

      {champions.length === 1 && (
        <SingleCardContainer
          card={
            <SmallCard
              onClick={() => setActiveChampion(champions[0].name)}
              number={champions[0].number}
              id={champions[0].id}
              avatarURL={champions[0].avatarURL}
              name={champions[0].name}
              tags={champions[0].tags}
              blurb={champions[0].blurb}
            />
          }
        />
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
