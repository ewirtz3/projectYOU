const router = require("express").Router;
const apiRoutes = router();
const { User, Exercise, Fluid, Sleep } = require("../models");

apiRoutes.get("/user", function (req, res) {
  User.findAll({}).then(function (results) {
    res.json(results);
  });
});

apiRoutes.get("/user/exercise", function (req, res) {
  Exercise.findAll({}).then(function (results) {
    res.json(results);
  });
});

apiRoutes.get("/user/fluid", function (req, res) {
  Fluid.findAll({}).then(function (results) {
    res.json(results);
  });
});

apiRoutes.get("/user/sleep", function (req, res) {
  Sleep.findAll({}).then(function (results) {
    res.json(results);
  });
});

apiRoutes.post("/user/exercise", function (req, res) {
  Exercise.create({
    exercise_type: req.body.exercise_type,
    exercise_duration: req.body.exercise_duration,
    user_Id: req.body.user_Id,
  }).then(function (results) {
    res.end();
  });
});

apiRoutes.post("/user/fluid", function (req, res) {
  Fluid.create({
    fluid_type: req.body.fluid_type,
    numOfGlasses: req.body.numOfGlasses,
    user_Id: req.body.user_Id,
  }).then(function (results) {
    res.end();
  });
});

apiRoutes.post("/user/sleep", function (req, res) {
  Sleep.create({
    sleep_duration: req.body.sleep_duration,
    user_Id: req.body.user_Id,
  }).then(function (results) {
    res.end();
  });
});

module.exports = apiRoutes;
