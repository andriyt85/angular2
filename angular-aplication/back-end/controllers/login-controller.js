const LoginDbModule = require('../dbmodel/loginDbModel');


module.exports = (app) => {

  /*Sign in*/

  app.post('/api/sign-in', (req, res) => {
    LoginDbModule.find({ name: req.body.name })
      .then((login) => {
        if (login.length && req.body.password === login[0].password) {
          res.status(200).json({authenticated: true});
        } else {
          res.status(200).json({authenticated: false});
        }
      })
      .catch(err => {
        res.status(400).json({error: 'Something went wrong !!!'});
      });
  });


  /* sign up */

  app.post('/api/sign-up', (req, res) => {
    const { body: { name, password } } = req;
    const data = new LoginDbModule({ name, password });
    data.save()
      .then(saved => res.status(200).json({saved: true}))
      .catch(err => res.status(400).json({error: 'Something went wrong !!!'}));
  })

  /*reset password*/

  app.post('api/update', (req, res) => {
    const { body: { name, password, oldPassword } } = req;
    LoginDbModule.findOne({ name })
      .then(user => {
        if (!user) {
          throw new Error('User not found !');
        }
        if (user.password !== oldPassword) {
          throw new Error('Wrong Password !');
        }
        return LoginDbModule.update({ name }, { name, password }, { upsert: true })
      })
  })
}
