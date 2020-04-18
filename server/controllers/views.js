const Attendance = require('../models').Attendance;


module.exports = {  

  enter(req, res) {
     res.render('index', {title:"Attendance list" });
  },

  list(req, res) {
    let id = body.lesson_id
    return Attendance
      .findAll({ where: { lesson_id: id }})
      .then((attendances) => res.render('list',{title:"Attendance list", attendances:attendances}))
      .catch((error) => res.status(400).send(error));
  },

};