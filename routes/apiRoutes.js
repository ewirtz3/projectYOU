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
  User.create({
    ...req.body,
  }).then((results) => {
    res.json(results);
  });
});

apiRoutes.post("/login", passport.authenticate("local"), (req, res) => {
  res.json(req.user);
});

apiRoutes.post("/:user/exercise", (req, res) => {
  Exercise.create({
    ...req.body,
  }).then((results) => {
    res.JSON(results);
  });
});

apiRoutes.post("/:user/fluid", (req, res) => {
  Fluid.create({
    ...req.body,
  }).then((results) => {
    res.JSON(results);
  });
});

apiRoutes.post("/:user/sleep", (req, res) => {
  Sleep.create({
    ...req.body,
  }).then((results) => {
    res.JSON(results);
  });
});

module.exports = apiRoutes;
