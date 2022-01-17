const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const championsAPI = require('./championsAPI');
const { CHAMPIONS_DATA_PATH, extractChampionSummary, extractChampionData } = championsAPI;

router.get('/champions/page/:pageNumber/size/:pageSize', (req, res) => {
  const champions = fs.readdirSync(CHAMPIONS_DATA_PATH);

  const { pageNumber, pageSize } = req.params;
  const begin = Math.max(0, (pageNumber - 1) * pageSize);
  const end = Math.min(champions.length, pageNumber * pageSize);

  const result = [];
  for (let i = begin; i < end; i++)
    result.push({ number: i + 1, ...extractChampionSummary(champions[i].substring(0, champions[i].length - 5)) });
  res.json({ pagesCount: Math.ceil(champions.length / pageSize), champions: result });
});

router.get('/:champion/data', (req, res) => {
  try {
    const championData = extractChampionData(req.params.champion);

    res.json(championData);
  } catch (err) {
    res.status(404).json({ response: 'Champion not found' });
  }
});

module.exports = router;
