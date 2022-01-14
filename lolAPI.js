const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const IMAGES_LINK = 'http://localhost:5000/images';

const getChampionData = name => {
  const dataPath = path.join(__dirname, 'assets', 'data', 'en_US', 'champion', name + '.json');
  const rawData = fs.readFileSync(dataPath);
  const data = JSON.parse(rawData).data[name];

  return data;
};

router.get('/:champion/min-card', async (req, res) => {
  try {
    const championData = getChampionData(req.params.champion);

    res.json({
      id: championData.key,
      avatarURL: `${IMAGES_LINK}/champion/avatar/${championData.image.full}`,
      name: championData.name,
      tags: championData.tags,
      blurb: championData.blurb,
    });
  } catch (err) {
    res.status(404).json({ message: 'Unknown champion' });
  }
});

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

module.exports = router;
