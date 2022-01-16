import axios from 'axios';
import { useEffect, useState } from 'react';
import { BigCardProfile } from './BigCardProfile';
import '../scss/BigCard.scss';
import { BigCardLore } from './BigCardLore';

export const BigCard = ({ championName }) => {
  const [profile, setProfile] = useState({});
  const [lore, setLore] = useState({});
  const [spells, setSpells] = useState({});
  const [skins, setSkins] = useState([]);
  const [overview, setOverview] = useState({});

  useEffect(() => {
    axios.get(`/api/${championName}/profile`).then(response => setProfile(response.data));
    axios.get(`/api/${championName}/lore`).then(response => setLore(response.data));
    axios.get(`/api/${championName}/spells`).then(response => setSpells(response.data));
    axios.get(`/api/${championName}/skins`).then(response => setSkins(response.data));
    axios.get(`/api/${championName}/overview`).then(response => setOverview(response.data));
  }, [championName]);

  return (
    <div className='card big-card'>
      <BigCardProfile avatarURL={profile.avatarURL} name={profile.name} title={profile.title} />
      <BigCardLore lore={lore.lore} />
    </div>
  );
};
