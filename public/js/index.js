//Get references to page elements
const $ = window.$;
const $sleepList = $("#sleep-list");
const $exerciseList = $("#exercise-list");
const $fluidList = $("#fluid-list");

const $fluidText = $("#fluid-text");
const $exerciseText = $("#exercise-text");
const $sleepText = $("#sleep-text");

//methods, variables, handlers, and event listeners are adapted from the provided boilerplate. We will need to make some changes. For example, I don't think we have anything called fluid/exercise/sleep description (see lines 12-14). These changes depend on how we want our front-end to look. I could leave this for someone doing front-end or we can do that together.
const $fluidDescription = $("#fluid-description");
const $exerciseDescription = $("#exercise-description");
const $sleepDescription = $("#sleep-description");

// The newPost object contains methods for each kind of request we'll make
const newPost = {
  /////////////////////////////////POST METHODS
  //POST USER AJAX
  saveUser: function (user) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json",
      },
      type: "POST",
      url: "user",
      data: JSON.stringify(user),
    });
  },
  //POST FLUID AJAX
  saveFluid: function (fluid) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json",
      },
      type: "POST",
      url: "user/fluid",
      data: JSON.stringify(fluid),
    });
  },
  //POST EXERCISE AJAX
  saveExercise: function (fluid) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json",
      },
      type: "POST",
      url: "user/exercise",
      data: JSON.stringify(exercise),
    });
  },
  //POST SLEEP AJAX
  saveSleep: function (sleep) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json",
      },
      type: "POST",
      url: "user/sleep",
      data: JSON.stringify(sleep),
    });
  },
  ///////////////////////////////////GET METHODS
  //GET USER AJAX
  getUser: function () {
    return $.ajax({
      url: "user",
      type: "GET",
    });
  },
  //GET FLUID AJAX
  getFluid: function () {
    return $.ajax({
      url: "user/fluid",
      type: "GET",
    });
  },
  //GET EXERCISE AJAX
  getExercise: function () {
    return $.ajax({
      url: "user/exercise",
      type: "GET",
    });
  },
  //GET SLEEP AJAX
  getSleep: function () {
    return $.ajax({
      url: "user/sleep",
      type: "GET",
    });
  },
  //////////////////////////////////DELETE METHODS
  //DELETE USER
  deleteUser: function (id) {
    return $.ajax({
      url: "user/" + id,
      type: "DELETE",
    });
  },
  //DELETE EXERCISE
  deleteExercise: function (id) {
    return $.ajax({
      url: "user/exercise/" + id,
      type: "DELETE",
    });
  },
  //DELETE FLUID
  deleteFluid: function (id) {
    return $.ajax({
      url: "user/fluid/" + id,
      type: "DELETE",
    });
  },
  //DELETE SLEEP
  deleteSleep: function (id) {
    return $.ajax({
      url: "user/sleep/" + id,
      type: "DELETE",
    });
  },
};

// refreshfluids gets new fluids from the db and repopulates the list
const refreshFluid = function () {
  newPost.getFluid().then(function (data) {
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
  newPost.getExercise().then(function (data) {
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
  newPost.getSleep().then(function (data) {
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

// handleFluid is called whenever we submit a new exercise
// Save the new Fluid to the db and refresh the list
const handleFluid = function (event) {
  event.preventDefault();

  const fluid = {
    text: $fluidText.val().trim(),
    description: $fluidDescription.val().trim(),
  };

  if (!(fluid.text && fluid.description)) {
    window.alert("You must enter an exercise text and description!");
    return;
  }

  newPost.saveFluid(fluid).then(function () {
    refreshFluid();
  });

  $fluidText.val("");
  $fluidDescription.val("");
};

// handleExercise is called whenever we submit a new exercise
// Save the new exercise to the db and refresh the list
const handleExercise = function (event) {
  event.preventDefault();

  const exercise = {
    text: $exerciseText.val().trim(),
    description: $exerciseDescription.val().trim(),
  };

  if (!(exercise.text && exercise.description)) {
    window.alert("You must enter an exercise text and description!");
    return;
  }

  newPost.saveExercise(exercise).then(function () {
    refreshExercise();
  });

  $exerciseText.val("");
  $exerciseDescription.val("");
};

// handleSleep is called whenever we submit a new sleep
// Save the new sleep to the db and refresh the list
const handleSleep = function (event) {
  event.preventDefault();

  const sleep = {
    text: $sleepText.val().trim(),
    description: $sleepDescription.val().trim(),
  };

  if (!(sleep.text && sleep.description)) {
    window.alert("You must enter an sleep text and description!");
    return;
  }

  newPost.saveSleep(sleep).then(function () {
    refreshSleep();
  });

  $sleepText.val("");
  $sleepDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove Exercise from the db and refresh the list
const handleDeleteExercise = function () {
  const idToDelete = $(this).parent().attr("data-id");

  newPost.deleteExercise(idToDelete).then(function () {
    refreshExercise();
  });
};
// Remove Fluid from the db and refresh the list
const handleDeleteFluid = function () {
  const idToDelete = $(this).parent().attr("data-id");

  newPost.deleteFluid(idToDelete).then(function () {
    refreshFluid();
  });
};
// Remove Sleep from the db and refresh the list
const handleDeleteSleep = function () {
  const idToDelete = $(this).parent().attr("data-id");

  newPost.deleteSleep(idToDelete).then(function () {
    refreshSleep();
  });
};

// Add event listeners to the submit buttons
$exerciseBtn.on("click", handleExercise);
$fluidBtn.on("click", handleFluid);
$sleepBtn.on("click", handleSleep);

$exerciseList.on("click", ".delete", handleDeleteExercise);
$fluidList.on("click", ".delete", handleDeleteFluid);
$sleepList.on("click", ".delete", handleDeleteSleep);

//actual code---->
