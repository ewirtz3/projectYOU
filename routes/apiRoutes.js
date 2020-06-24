const router = require("express").Router;
const apiRoutes = router();
const { User, Exercise, Fluid, Sleep } = require("../models");
const passport = require("../config/passport");

apiRoutes.get("/:username", (req, res) => {
  User.findOne({ Where: { username: req.params.username } }).then((results) => {
    res.json(results);
  });
});

apiRoutes.get("/:user/exercise", (req, res) => {
  Exercise.findAll({ Where: { username: req.params.username } }).then(
    (results) => {
      res.json(results);
    }
  );
});

apiRoutes.get("/:user/fluid", (req, res) => {
  Fluid.findAll({ Where: { username: req.params.username } }).then(
    (results) => {
      res.json(results);
    }
  );
});

apiRoutes.get("/:user/sleep", (req, res) => {
  Sleep.findAll({ Where: { username: req.params.username } }).then(
    (results) => {
      res.json(results);
    }
  );
});

apiRoutes.post("/user", (req, res) => {
  console.log(req.body);
  User.create({
    // username: req.body.username,
    // password: req.body.password,
    // first_name: req.body.first_name,
    // last_name: req.body.last_name,
    ...req.body,
  }).then((results) => {
    res.json(results);
  });
});

apiRoutes.post("/login", passport.authenticate("local"), (req, res) => {
  res.json(req.user);
});

apiRoutes.post("/:user/exercise", (req, res) => {
  console.log(req.body);
  Exercise.create({
    // exercise_type: req.body.exercise_type,
    exercise_duration: req.body.exercise_duration,
    user_Id: req.body.user_Id,
  }).then((results) => {
    // console.log(results);
    res.end();
  });
});

apiRoutes.post("/:user/fluid", (req, res) => {
  Fluid.create({
    fluid_type: req.body.fluid_type,
    numOfGlasses: req.body.numOfGlasses,
    user_Id: req.body.user_Id,
  }).then((results) => {
    res.end();
  });
});

apiRoutes.post("/:user/sleep", (req, res) => {
  Sleep.create({
    sleep_duration: req.body.sleep_duration,
    user_Id: req.body.user_Id,
  }).then((results) => {
    res.end();
  });
});

module.exports = apiRoutes;
