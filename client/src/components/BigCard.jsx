import axios from 'axios';
import { useEffect, useState } from 'react';

import { BigCardLore } from './BigCardLore';
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
    <div className='card big-card'>
      <BigCardProfile avatarURL={data.avatarURL} name={data.name} title={data.title} />
      <BigCardLore lore={data.lore} />
    </div>
  );
};
