const Attendance = require('../models').Attendance;

module.exports = {
  create(req, res) {
    return Attendance
      .create({
        t_google_id: req.body.t_google_id,
        student_fullname: req.body.student_fullname,
        lesson_id: req.body.lesson_id,
        points: req.body.body
      })
      .then((Attendance) => res.status(201).send(Attendance))
      .catch((error) => res.status(400).send(error));
  },

  list(req, res) {
    return Attendance
      .findAll()
      .then((attendance) => res.status(200).send(attendance))
      .catch((error) => res.status(400).send(error));
  },

 

  destroy(req, res) {
    return Attendance
      .findById(req.params.AttendanceId)
      .then(Attendance => {
        if (!Attendance) {
          return res.status(400).send({
            message: 'Attendance Not Found',
          });
        }
        return Attendance
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
