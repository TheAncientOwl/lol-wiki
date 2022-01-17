import { useState } from 'react';

export const BigCardAbilities = ({ spells, passive }) => {
  const [activeTab, setActiveTab] = useState(0);

  const abilities = [passive, ...spells];

  return (
    <div className='big-card-abilities-container'>
      <h5 className='big-card-abilities-container-title'>Abilities</h5>

      <ul className='nav nav-tabs big-card-abilities-nav' id='abilities-tab' role='tablist'>
        {abilities.map((ability, index) => (
          <li
            key={index + ability.id}
            className='nav-item big-card-abilities-nav-item'
            role='presentation'
            onClick={() => setActiveTab(index)}>
            <img
              src={ability.imageURL}
              alt={ability.name}
              id={`${ability.id}-tab`}
              data-bs-toggle='tab'
              data-bs-target={`#${ability.id}`}
              type='button'
              role='tab'
              aria-controls={ability.id}
              aria-selected={index === activeTab}
            />
          </li>
        ))}
      </ul>

      <div className='tab-content big-card-abilities-content' id='abilities-tab-content'>
        {abilities.map((ability, index) => (
          <div
            key={index + ability.id}
            className={`tab-pane fade ${index === activeTab ? 'show active' : ''}`}
            id={ability.id}
            role='tabpanel'
            aria-labelledby={`${ability.id}-tab`}>
            <span className='text-tab'></span>
            {ability.description?.replaceAll('<br>', '')}
          </div>
        ))}
      </div>
    </div>
  );
};
