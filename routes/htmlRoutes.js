const Router = require("express").Router;
const db = require("../models");
const isAuthenticated = require("../config/middleware/isAuthenticated");
const htmlRoutes = new Router();

htmlRoutes.get("/", async (_, res) => {
  res.render("index");
});

// Load user page based on req.params.id
htmlRoutes.get("/users/:username", isAuthenticated, async (req, res) => {
  const options = {
    where: {
      username: req.params.username,
    },
  };

  const this_user = await db.User.findOne(options);
  const that_user = this_user.dataValues;
  res.render("profile", {
    User: that_user,
  });
});

// Render 404 page for any unmatched routes
htmlRoutes.get("*", async (req, res) => {
  res.render("404");
});

module.exports = htmlRoutes;
