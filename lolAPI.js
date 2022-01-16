const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const IMAGES_LINK = `http://localhost:${process.env.PORT || 5000}/images`;
const CHAMPIONS_DATA_PATH = path.join(__dirname, 'assets', 'data', 'en_US', 'champion');

// ? Create champions names map
/**
 * @returns map of champions names: lowercase name -> assets name
 */
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

// ? Read champion data by name
const getChampionData = name => {
  name = ChampionsMap.get(name.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase());

  const dataPath = path.join(CHAMPIONS_DATA_PATH, name + '.json');
  const rawData = fs.readFileSync(dataPath);
  const data = JSON.parse(rawData).data[name];

  return data;
};

const getMinCardChampion = name => {
  const championData = getChampionData(name);

  return {
    id: championData.key,
    avatarURL: `${IMAGES_LINK}/champion/card-min/${name}_0.jpg`,
    name: championData.name,
    tags: championData.tags,
    blurb: championData.blurb,
  };
};

// ? Routes
/**
 *  @route /champions/list
 *  @return array of strings representing champions names
 */
router.get('/champions/list', (req, res) => {
  const champions = fs.readdirSync(CHAMPIONS_DATA_PATH);
  res.json(champions.map(champion => champion.substring(0, champion.length - 5)));
});

/**
 * @route /champions/page/:pageNumber/size/:pageSize
 * @return page with minCardChampion
 */
router.get('/champions/page/:pageNumber/size/:pageSize', (req, res) => {
  const champions = fs.readdirSync(CHAMPIONS_DATA_PATH);
  const { pageNumber, pageSize } = req.params;
  const begin = Math.max(0, (pageNumber - 1) * pageSize);
  const end = Math.min(champions.length, pageNumber * pageSize);

  const result = [];
  for (let i = begin; i < end; i++)
    result.push({ number: i + 1, ...getMinCardChampion(champions[i].substring(0, champions[i].length - 5)) });
  res.json({ pagesCount: Math.ceil(champions.length / pageSize), champions: result });
});

/**
 * @route /:champion/min-card
 * @return
 * ? {
 * ?    id        : champion id
 * ?    avatarURL : link
 * ?    name      : champion name
 * ?    tags      : array of strings
 * ?    blurb     : string, part of lore
 * ? }
 */
router.get('/:champion/min-card', async (req, res) => {
  try {
    res.json(getMinCardChampion(req.params.champion));
  } catch (err) {
    res.status(404).json({ message: 'Unknown champion' });
  }
});

/**
 * @route /:champion/lore
 * @return
 * ? {
 * ?    blurb : string, part of lore
 * ?    lore  : string
 * ? }
 */
router.get('/:champion/lore', async (req, res) => {
  try {
    const championData = getChampionData(req.params.champion);

    res.json({
      blurb: championData.blurb,
      lore: championData.lore,
    });
  } catch (err) {
    res.status(404).json({ message: 'Unknown champion' });
  }
});

/**
 * @route /:champion/spells
 * @return
 * ? {
 * ?    q, w, e, passive: {
 * ?      id          : spell id
 * ?      name        : spell name
 * ?      description : string
 * ?      imageURL    : link
 * ?    }
 * ? }
 */
router.get('/:champion/spells', async (req, res) => {
  try {
    const championData = getChampionData(req.params.champion);

    const makeSpell = index => {
      const spell = championData.spells[index];

      return {
        id: spell.id,
        name: spell.name,
        description: spell.description,
        imageURL: `${IMAGES_LINK}/spell/${spell.image.full}`,
      };
    };

    res.json({
      q: makeSpell(0),
      w: makeSpell(1),
      e: makeSpell(2),
      passive: {
        id: `${championData.name}Passive`,
        name: championData.passive.name,
        description: championData.passive.description,
        imageURL: `${IMAGES_LINK}/passive/${championData.passive.image.full}`,
      },
    });
  } catch (err) {
    res.status(404).json({ message: 'Unknown champion' });
  }
});

/**
 * @route /:champion/skins
 * @return
 * ! [
 * ?  {
 * ?    id       : skin id,
 * ?    name     : skin name
 * ?    imageURL : link
 * ?  },
 * ! ]
 */
router.get('/:champion/skins', async (req, res) => {
  try {
    const championData = getChampionData(req.params.champion);

    res.json(
      championData.skins.map(skin => ({
        id: skin.id,
        name: skin.name,
        imageURL: `${IMAGES_LINK}/champion/skin/${req.params.champion}_${skin.num}.jpg`,
      }))
    );
  } catch (err) {
    res.status(404).json({ message: 'Unknown champion' });
  }
});

/**
 * @route /:champion/overview
 * @return
 * ? {
 * ?    allyTips: array of strings
 * ?    enemyTips: array of strings
 * ?    tags: array of strings
 * ?    info: {
 * ?      attack     : number,
 * ?      defense    : number,
 * ?      magic      : number,
 * ?      difficulty : number,
 * ?    }
 * ?    stats: {
 * ?       hp                   : number
 * ?       hpperlevel           : number
 * ?       mp                   : number
 * ?       mpperlevel           : number
 * ?       movespeed            : number
 * ?       armor                : number
 * ?       armorperlevel        : number
 * ?       spellblock           : number
 * ?       spellblockperlevel   : number
 * ?       attackrange          : number
 * ?       hpregen              : number
 * ?       hpregenperlevel      : number
 * ?       mpregen              : number
 * ?       mpregenperlevel      : number
 * ?       crit                 : number
 * ?       critperlevel         : number
 * ?       attackdamage         : number
 * ?       attackdamageperlevel : number
 * ?       attackspeedperlevel  : number
 * ?       attackspeed          : number
 * ?    }
 * ? }
 */
router.get('/:champion/overview', async (req, res) => {
  try {
    const championData = getChampionData(req.params.champion);

    res.json({
      allyTips: championData.allytips,
      enemyTips: championData.enemytips,
      tags: championData.tags,
      info: championData.info,
      stats: championData.stats,
    });
  } catch (err) {
    res.status(404).json({ message: 'Unknown champion' });
  }
});

module.exports = router;
