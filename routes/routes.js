var express = require('express');
var router = express.Router();
var models = require('../models');
var Member = models.Member;
var mandrill = require('node-mandrill')('<Your Api Key Here>');
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

router.post('/message', function(req, res) {
  res.render('home');
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
