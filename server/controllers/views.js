const Attendance = require('../models').Attendance;


module.exports = {  

  enter(req, res) {
     res.render('index', {title:"Attendance list" });
  },

  list(req, res) {
    let id = req.body.lesson_id
    return Attendance
      .findAll({ where: { lesson_id: id }})
      .then((attendances) => res.render('list',{title:"Attendance list", attendances:attendances}))
      .catch((error) => res.status(400).send(error));
  },

  index(req,res){
    res.render('index1',{ title: 'Vash Template Demo', 
                          content:'This is dummy paragraph.'});
  },
  about(req,res){
    let arr = ["hi", "hello"];
    res.render('about',{ title: 'About', item: arr});
  },
  aboutpost(req, res) {
    let type = req.body.type
    return Attendance
      .findAll({ 
        where: {
          type : req.body.type
          subject: req.body.subject
          
          }})
      .then((attendances) => res.render('about',{ title: 'About', item: attendances}))
      .catch((error) => res.status(400).send(error));
  },

};