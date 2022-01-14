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

module.exports = router;
