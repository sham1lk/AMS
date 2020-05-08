const Attendance = require('../models').Attendance;


module.exports = {  

  index(req,res){
    res.render('index',{ title: 'About Automated Attendance Monitoring', 
                          content:'Something very important'});
  },
  about(req,res){
    let arr = [];
    res.render('about',{ title: 'AMS', item: arr});
  },

  aboutpost(req, res) {
    let type = req.body.type
    return Attendance
      .findAll({ 
        where: {
          type : req.body.type,
          subject: req.body.subject
          
          }})
      .then((attendances) => res.render('about',{ title: 'AMS', item: attendances}))
      .catch((error) => res.status(400).send(error));
  },

};