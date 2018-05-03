const db = require('../database');

module.exports = app => {
  app.get('/comments', async (req, res) => {
    const data = await db('Comment')
      .where({ ideaId: req.body })
      .select('*');

    res.status(200);
    res.send(data);
  });
};
