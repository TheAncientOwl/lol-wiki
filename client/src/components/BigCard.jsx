import axios from 'axios';
import { useEffect, useState } from 'react';

import { BigCardLore } from './BigCardLore';
import { BigCardProfile } from './BigCardProfile';
import { BigCardSpells } from './BigCardSpells';

export const BigCard = ({ championName }) => {
  const [state, setState] = useState({ profile: {}, lore: {}, spells: {}, skins: [], overview: {} });
  const { profile, lore, spells, skins, overview } = state;

  useEffect(() => {
    Promise.all([
      axios.get(`/api/${championName}/profile`),
      axios.get(`/api/${championName}/lore`),
      axios.get(`/api/${championName}/spells`),
      axios.get(`/api/${championName}/skins`),
      axios.get(`/api/${championName}/overview`),
    ]).then(values => {
      setState({
        profile: values[0].data,
        lore: values[1].data,
        spells: values[2].data,
        skins: values[3].data,
        overview: values[4].data,
      });
    });
  }, [championName]);

  return (
    <div className='card big-card'>
      <BigCardProfile avatarURL={profile.avatarURL} name={profile.name} title={profile.title} />
      <BigCardLore lore={lore.lore} />
      {/* <BigCardSpells q={spells.q} w={spells.w} e={spells.e} passive={spells.passive} /> */}
    </div>
  );
};
