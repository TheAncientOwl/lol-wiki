import { useEffect, useMemo, useState } from 'react';
import { removeTags } from '../App';

export const BigCardAbilities = ({ spells, passive }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [abilityDescriptionMaxHeight, setAbilityDescriptionMaxHeight] = useState(0);

  const abilities = useMemo(() => [passive, ...spells], [spells, passive]);

  const calculateAbilityDescriptionMaxHeight = () => {
    const elements = Array.from(document.querySelectorAll('div.big-card-abilities-description'));

    const heightReducer = (previousHeight, currentElement) => {
      const oldDisplay = currentElement.style.display;
      currentElement.style.display = 'block';

      const elementHeight = currentElement.getBoundingClientRect().height;

      currentElement.style.display = oldDisplay;

      return Math.max(previousHeight, elementHeight);
    };

    const maxHeight = elements.reduce(heightReducer, 0);

    setAbilityDescriptionMaxHeight(maxHeight);
  };

  useEffect(calculateAbilityDescriptionMaxHeight, [abilities]);

  return (
    <section className='big-card-section'>
      <h5 className='big-card-section-title'>Abilities</h5>

      <ul className='nav nav-tabs big-card-abilities-nav' id='abilities-tab' role='tablist'>
        {abilities.map((ability, index) => (
          <li
            key={index + ability.id}
            className={`nav-item big-card-abilities-nav-item ${index === activeTab ? 'big-card-ability-active' : ''}`}
            role='presentation'
            onClick={() => setActiveTab(index)}>
            <img
              className='border-gold'
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
            <h6 className='big-card-ability-name text-dark-gray'>{ability.name}</h6>
          </li>
        ))}
      </ul>

      <div className='tab-content text-light-gray' id='abilities-tab-content'>
        {abilities.map((ability, index) => (
          <div
            key={index + ability.id}
            style={{ minHeight: `${abilityDescriptionMaxHeight}px` }}
            className={`tab-pane fade ${index === activeTab ? 'show active' : ''} big-card-abilities-description`}
            id={ability.id}
            role='tabpanel'
            aria-labelledby={`${ability.id}-tab`}>
            <div>
              <span className='text-tab'></span>
              {removeTags(ability.description)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
