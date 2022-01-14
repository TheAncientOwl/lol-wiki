const express = require('express');
const router = express.Router();

router.get('/:champion', (req, res) => {
  console.log(`Requested data for ${req.params.champion}`);
  res.json({ ok: 200 });
});

module.exports = router;
