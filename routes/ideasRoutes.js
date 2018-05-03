const db = require('../database');

module.exports = app => {
  app.get('/ideas/:id', async (req, res) => {
    try {
      const { id } = req.params;
      let idea = (await db('Idea')
        .where({ id })
        .select('*'))[0];

      const comments = await db('Comment')
        .select('*')
        .where({ ideaId: id })
        .leftJoin('Member', 'Comment.memberId', 'Member.id');

      idea = { ...idea, comments };

      res.status(200);
      res.json(idea);
    } catch (err) {
      res.status(400);
      res.send(err);
    }
  });
};
