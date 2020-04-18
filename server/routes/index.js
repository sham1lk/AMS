const usersController = require('../controllers').users;
const attendanceController = require('../controllers').attendances;


module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the users API!',
  }));

  app.post('/api/users', usersController.create);
  app.get('/api/users', usersController.list);
  app.delete('/api/users/:id', usersController.destroy);
  app.post('/api/attendances', attendanceController.create);
  app.get('/api/attendances', attendanceController.list);
  app.delete('/api/attendances/:attendanceId', attendanceController.destroy);

};
