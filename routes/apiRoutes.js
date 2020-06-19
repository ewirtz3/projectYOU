const Router = require("express").Router;
const exampleRoutes = require("./examples");

const apiRoutes = Router();

apiRoutes.use("/examples", exampleRoutes);

module.exports = apiRoutes;

module.exports = function (router) {
  router.get("/api/user", function (req, res) {
    Users.findOne({}).then(function (results) {
      res.json(results);
    });
  });

  router.get("/api/user/exercise", function (req, res) {
    Exercise.findAll({}).then(function (results) {
      res.json(results);
    });
  });

  router.get("/api/user/fluid", function (req, res) {
    Fluid.findAll({}).then(function (results) {
      res.json(results);
    });
  });

  router.get("/api/user/sleep", function (req, res) {
    Sleep.findAll({}).then(function (results) {
      res.json(results);
    });
  });

  router.post("/api/user/exercise", function (req, res) {
    Exercise.create({
      exercise_type: req.body.exercise_type,
      exercise_duration: req.body.exercise_duration,
      user_Id: req.body.user_Id,
    }).then(function (results) {
      res.end();
    });
  });

  router.post("/api/user/fluid", function (req, res) {
    Fluid.create({
      fluid_type: req.body.fluid_type,
      numOfGlasses: req.body.numOfGlasses,
      user_Id: req.body.user_Id,
    }).then(function (results) {
      res.end();
    });
  });

  router.post("/api/user/sleep", function (req, res) {
    Sleep.create({
      sleep_duration: req.body.sleep_duration,
      user_Id: req.body.user_Id,
    }).then(function (results) {
      res.end();
    });
  });
};
