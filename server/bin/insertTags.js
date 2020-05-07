const pool = require('../databasePool');
const TAGS = require('../data/tags');

TAGS.forEach((TAG) => {
  const tagType = TAG.type;
  const tagValues = TAG.values;

  tagValues.forEach((tagValue) => {
    pool.query(
      'INSERT INTO tag("tagType", "tagValue") VALUES ($1, $2) RETURNING id',
      [tagType, tagValue],
      (error, response) => {
        if (error) console.log(error);

        const tagId = response.rows[0].id;

        console.log(`Inserted the tag - id ${tagId}`);
      },
    );
  });
});
