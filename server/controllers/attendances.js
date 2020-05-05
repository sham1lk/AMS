const Attendance = require('../models').Attendance;

module.exports = {
  create(req, res) {
    return Attendance
      .create({
        t_google_id: req.body.t_google_id,
        student_fullname: req.body.student_fullname,
        lesson_id: req.body.lesson_id,
        points: req.body.points,
        type: req.body.type,
        subject: req.body.subject,
      })
      .then((attendance) => res.status(201).send(attendance))
      .catch((error) => res.status(400).send(error));
  },

  list(req, res) {
    return Attendance
      .findAll()
      .then((attendance) => res.status(200).send(attendance))
      .catch((error) => res.status(400).send(error));
  },

 

  destroy(req, res) {
  const id = req.params.id;

  Attendance.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });
  },

  update(req, res) {

    const id = req.params.id;

      Attendance.update(req.body, {
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "was updated successfully."
            });
          } else {
            res.send({
              message: `Cannot update id=${id}.`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Attendance with id=" + id
          });
        });
  },


};
