import axios from 'axios';
import { useEffect, useState } from 'react';
import { BigCardAbilities } from './BigCardAbilities';

import { BigCardLore } from './BigCardLore';
import { BigCardOverview } from './BigCardOverview';
import { BigCardProfile } from './BigCardProfile';

const defaultState = {
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

export const BigCard = ({ championName }) => {
  const [data, setData] = useState(defaultState);

  useEffect(() => {
    axios.get(`/api/${championName}/data`).then(response => setData(response.data));
  }, [championName]);

  return (
    <div className='card big-card bg-gradient-blue'>
      <BigCardProfile avatarURL={data.avatarURL} name={data.name} title={data.title} />
      <BigCardLore lore={data.lore} />
      <BigCardOverview
        allyTips={data.allyTips}
        enemyTips={data.enemyTips}
        info={data.info}
        stats={data.stats}
        lore={data.lore}
      />
      <BigCardAbilities spells={data.spells} passive={data.passive} />
    </div>
  );
};
