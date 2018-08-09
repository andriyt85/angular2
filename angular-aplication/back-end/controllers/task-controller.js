const TaskDbModel = require('../dbmodel/taskDbModel');

module.exports = (app) => {

  /**
   * create new task
   */
  app.post('/api/create-task', (req,res) => {
    const {body: {name, description} } = req;
    const data = TaskDbModel({name, description});
    data.save()
      .then(saved => res.status(201).json({created: true}))
      .catch(err => res.status(400).json({error: 'Something went wrong !!!'}));
  })

}
