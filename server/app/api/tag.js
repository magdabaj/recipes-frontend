const { Router } = require('express');
const TagTable = require('../tag/table');

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const tags = await TagTable.getAllTags();
    res.send(tags);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
