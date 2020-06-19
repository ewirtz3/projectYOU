const Router = require("express").Router;
const db = require("../models");

const htmlRoutes = new Router();

htmlRoutes.get("/", async (_, res) => {
  const dbExamples = await db.Example.findAll({});

  res.render("index");
});

// Load user page based on req.params.id
htmlRoutes.get("/users/:id", async (req, res) => {
  const options = {
    where: {
      id: req.params.id,
    },
  };

  const this_user = await db.Users.findOne(options);

  res.render("profile", {
    user: this_user,
  });
});

// Render 404 page for any unmatched routes
htmlRoutes.get("*", async (req, res) => {
  res.render("404");
});

module.exports = htmlRoutes;
