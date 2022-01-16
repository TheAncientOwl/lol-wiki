import axios from 'axios';
import { useEffect, useState } from 'react';

export const BigCard = ({ championName }) => {
  const [lore, setLore] = useState({});
  const [spells, setSpells] = useState({});
  const [skins, setSkins] = useState([]);
  const [overview, setOverview] = useState({});

  useEffect(() => {
    axios.get(`/api/${championName}/lore`).then(response => setLore(response.data));
    axios.get(`/api/${championName}/spells`).then(response => setSpells(response.data));
    axios.get(`/api/${championName}/skins`).then(response => setSkins(response.data));
    axios.get(`/api/${championName}/overview`).then(response => setOverview(response.data));
  }, [championName]);

  return <div>{championName}</div>;
};
