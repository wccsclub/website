var express = require('express');
var router = express.Router();
var models = require('../models');
var Member = models.Member;
var mandrill = require('node-mandrill')('<Your Api Key Here>');
const nodemailer = require("nodemailer");
//////////////////////////////// PUBLIC ROUTES ////////////////////////////////
// Users who are not logged in can see these routes

// router.get('/add', function(req, res) {
//   var newM = new Member({
//     name: "Shan Lu",
//     imageUri: "https://image.ibb.co/cL879Q/shan_lu_x.jpg",
//     position: "Co-Web Wizard",
//     hometown: "Beijing, China",
//     about: "Something about me"
//   });
//   newM.save()
//     .then(m => {
//       console.log("SAVED", m);
//     })
//     .catch(err => {
//       console.log('ERROR', err);
//     })
// })

router.post("/message", function(req, res) {
  var data = req.body;
  console.log("DATA", data);
    // setup email data with unicode symbols
  // console.log("ENV", process.env.TRANSPORTER);
  // var smtpTransport = nodemailer.createTransport(process.env.TRANSPORTER);
  var smtpTransport = nodemailer.createTransport({
   service: 'gmail',
   host: 'smtp.gmail.com',
   auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
      }
  });
  let mailOptions = {
      from: req.body.name + '<wellesleywcc@gmail.com>', // sender address
      // to: 'cs-club-eboard@wellesley.edu',
      to: "slu5@wellesley.edu",
      subject: 'Message for CS Club', // Subject line
      text: 'You received a new message from ' + req.body.name + ':\n' + req.body.message + '\n Contact her at ' + req.body.email, // plain text body
      html: '<p>You received a new message from ' + req.body.name + ':</p><p>' + req.body.message + '</p><p>Contact her at ' + req.body.email + '</p>' // html body
  };

  // send mail with defined transport object
  smtpTransport.sendMail(mailOptions, (err, info) => {
    console.log('IN SENDMAIL');
    if (err){
      console.log("ERROR", err);
    } else{
      console.log("Message SENT: " + res.message);
    }
    smtpTransport.close();
  });
});



router.get('/eboard', function(req, res) {
  // Member.find()
  //   .then(members => {
  //     console.log('MEMBERS', members);
  //     res.render('eboard', {
  //       members: members
  //     });
  //   })
  //   .catch(err => {
  //     console.log('ERROR', err);
  //   })
  res.render('eboard');
})

router.get('/calendar', function(req, res) {
  res.render('calendar');
})

router.get('/', function(req, res, next) {
  res.render('home');
});

///////////////////////////// END OF PUBLIC ROUTES /////////////////////////////

// router.use(function(req, res, next){
//   if (!req.user) {
//     res.redirect('/');
//   } else {
//     return next();
//   }
// });

//////////////////////////////// PRIVATE ROUTES ////////////////////////////////
// Only logged in users can see these routes

// router.get('/protected', function(req, res, next) {
//   res.render('protectedRoute', {
//     username: req.user.username,
//   });
// });

///////////////////////////// END OF PRIVATE ROUTES /////////////////////////////

module.exports = router;
