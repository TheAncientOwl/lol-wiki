const fs = require('fs');
const path = require('path');

const IMAGES_LINK = `http://localhost:${process.env.PORT || 5000}/images`;
const CHAMPIONS_DATA_PATH = path.join(__dirname, '..', 'assets', 'data', 'en_US', 'champion');

const makeChampionsMap = () => {
  const map = new Map();
  const champions = fs.readdirSync(CHAMPIONS_DATA_PATH);
  champions.forEach(champion => {
    champion = champion.substring(0, champion.length - 5);
    map.set(champion.toLowerCase(), champion);
  });

  return map;
};
const ChampionsMap = Object.freeze(makeChampionsMap());

const cleanChampionName = name => ChampionsMap.get(name.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase());

const readChampionFile = name => {
  name = cleanChampionName(name);

  const dataPath = path.join(CHAMPIONS_DATA_PATH, name + '.json');
  const rawData = fs.readFileSync(dataPath);
  const data = JSON.parse(rawData).data[name];
  data.nameAPI = name;

  return data;
};

const extractChampionSummary = championName => {
  const championData = readChampionFile(championName);

  return {
    id: championData.key,
    avatarURL: `${IMAGES_LINK}/champion/summary/${championData.nameAPI}_0.jpg`,
    name: championData.name,
    tags: championData.tags,
    blurb: championData.blurb,
  };
};

const extractChampionData = championName => {
  const championData = readChampionFile(championName);

  return {
    name: championData.name,
    title: championData.title,
    avatarURL: `${IMAGES_LINK}/champion/avatar/${championData.nameAPI}.png`,
    imageURL: `${IMAGES_LINK}/champion/data/${championData.nameAPI}_0.jpg`,
    lore: championData.lore,
    allyTips: championData.allytips,
    enemyTips: championData.enemytips,
    skins: championData.skins.map(skin => ({
      id: skin.id,
      name: skin.name,
      imageURL: `${IMAGES_LINK}/champion/skin/${championData.nameAPI}_${skin.num}.jpg`,
    })),
    info: championData.info,
    stats: championData.stats,
    spells: championData.spells.map(spell => ({
      id: spell.id,
      name: spell.name,
      description: spell.description,
      imageURL: `${IMAGES_LINK}/spell/${spell.image.full}`,
    })),
    passive: {
      id: `${championData.name}Passive`,
      name: championData.passive.name,
      description: championData.passive.description,
      imageURL: `${IMAGES_LINK}/passive/${championData.passive.image.full}`,
    },
  };
};

module.exports = { CHAMPIONS_DATA_PATH, extractChampionSummary, extractChampionData };