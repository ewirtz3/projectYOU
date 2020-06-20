//Get references to page elements
const $ = window.$;
const $sleepList = $("#sleep-list");
const $exerciseList = $("#exercise-list");
const $fluidList = $("#fluid-list");

const userView = {
  //GET FLUID AJAX
  getFluid: function () {
    return $.ajax({
      url: "/api/user/fluid",
      type: "GET",
    });
  },
  //GET EXERCISE AJAX
  getExercise: function () {
    return $.ajax({
      url: "/api/user/exercise",
      type: "GET",
    });
  },
  //GET SLEEP AJAX
  getSleep: function () {
    return $.ajax({
      url: "/api/user/sleep",
      type: "GET",
    });
  },
};

// refreshfluids gets new fluids from the db and repopulates the list
const refreshFluid = function () {
  API.getFluid().then(function (data) {
    const $fluids = data.map(function (fluid) {
      const $a = $("<a>")
        .text(fluid.text)
        .attr("href", "/user/fluid" + fluid.id);

      const $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": fluid.id,
        })
        .append($a);

      const $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $fluidList.empty();
    $fluidList.append($fluids);
  });
};

// refreshExercises gets new exercises from the db and repopulates the list
const refreshExercise = function () {
  API.getExercise().then(function (data) {
    const $exercises = data.map(function (exercise) {
      const $a = $("<a>")
        .text(exercise.text)
        .attr("href", "/user/exercise" + exercise.id);

      const $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": exercise.id,
        })
        .append($a);

      const $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exerciseList.empty();
    $exerciseList.append($exercises);
  });
};

// refreshSleep gets new sleeps from the db and repopulates the list
const refreshSleep = function () {
  API.getSleep().then(function (data) {
    const $sleeps = data.map(function (sleep) {
      const $a = $("<a>")
        .text(sleep.text)
        .attr("href", "/user/sleep" + sleep.id);
      const $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": sleep.id,
        })
        .append($a);
      const $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");
      $li.append($button);
      return $li;
    });

    $sleepList.empty();
    $sleepList.append($sleeps);
  });
};
