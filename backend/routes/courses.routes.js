const express = require('express');
const app = express();
const courseRoute = express.Router();

// registration  model
let courseDetails = require('../model/course');
/*
// user registration
registrationRoute.route('/signup').post((req, res, next) => {
    userRegister.create(req.body, (error, data) => {
        console.log("inside registration route")
    if (error) {
      return next(error)
    } else {
      res.json(data)
      console.log("data in",data)
    }
  })
});

// user login
registrationRoute.route('/login').post((req, res, next) => {
  console.log("inside login route")
  console.log(req.body.password);
  Email= req.body.email;
  Password = req.body.password;
  email=Email.trim();
  console.log("Trimmed email with variable",email);
  password=Password.trim();
  console.log("Trimmed password with variable",password);

  userRegister.findOne({"email":email,"password":password},function (error,data) {
   console.log('data', data);   
  if (error) {
    return next(error)
  } else {
    res.json(data)
    console.log("data in",data)
  }
})
}); */


// Get all student
courseRoute .route('/').get((req, res) => {
    courseDetails.find((error, data) => {
    if (error) {
      return next(error)
    } else {
        console.log('inside course route'+ data);
      res.json(data)
    }
  })
})

/*
// Get single student
studentRoute.route('/read-student/:id').get((req, res) => {
  Student.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update student
studentRoute.route('/update-student/:id').put((req, res, next) => {
  Student.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Student successfully updated!')
    }
  })
})

// Delete student
studentRoute.route('/delete-student/:id').delete((req, res, next) => {
  Student.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
*/
module.exports = courseRoute ;