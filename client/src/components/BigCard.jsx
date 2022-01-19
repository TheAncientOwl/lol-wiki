import axios from 'axios';
import { useEffect, useState } from 'react';
import { BigCardAbilities } from './BigCardAbilities';

import { BigCardLore } from './BigCardLore';
import { BigCardOverview } from './BigCardOverview';
import { BigCardProfile } from './BigCardProfile';
import { BigCardSkins } from './BigCardSkins';

const defaultState = {
  loaded: false,
  name: '',
  title: '',
  avatarURL: '',
  imageURL: '',
  lore: '',
  allyTips: [''],
  enemyTips: [''],
  skins: [],
  info: {},
  stats: {},
  spells: [],
  passive: {},
};

export const BigCard = ({ championName, onClose }) => {
  const [data, setData] = useState(defaultState);

  useEffect(() => {
    setData(defaultState);

    axios.get(`/api/${championName}/data`).then(response => setData({ loaded: true, ...response.data }));
  }, [championName]);

  return data.loaded === true ? (
    <div className='card big-card bg-gradient-blue' style={{ position: 'relative' }} onClick={e => e.stopPropagation()}>
      <BigCardProfile onClose={onClose} avatarURL={data.avatarURL} name={data.name} title={data.title} />
      <BigCardLore lore={data.lore} />
      <BigCardOverview
        allyTips={data.allyTips}
        enemyTips={data.enemyTips}
        info={data.info}
        stats={data.stats}
        lore={data.lore}
      />
      <BigCardAbilities spells={data.spells} passive={data.passive} />
      <BigCardSkins skins={data.skins} championName={data.name} />
    </div>
  ) : (
    <div class='spinner-border text-dark-gold' role='status'></div>
  );
};
