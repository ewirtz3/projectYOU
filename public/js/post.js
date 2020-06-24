//Get references to page elements
const $ = window.$;
const $fluidText = $("#fluid-text");
const $exerciseText = $("#exercise-text");
const $sleepText = $("#sleep-text");
// const $fluidDescription = $("#fluid-description");
// const $exerciseDescription = $("#exercise-description");
// const $sleepDescription = $("#sleep-description");
const usernameUrl = window.location.href.split("/")[4];
const $submitExercise = $("#submit-exercise");
const $submitSleep = $("#submit-sleep");
const $submitFluid = $("#submit-fluid");

console.log(usernameUrl);

const newPost = {
  //POST FLUID AJAX
  saveFluid: function (fluid) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json",
      },
      type: "POST",
      url: "/api/user/fluid",

      data: JSON.stringify(fluid),
    });
  },
  //POST EXERCISE AJAX
  saveExercise: function (usernameUrl) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json",
      },
      type: "POST",
      url: "/api/exercise/" + usernameUrl,
      // data: JSON.stringify(exercise),
    });
  },
  //POST SLEEP AJAX
  saveSleep: function (sleep) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json",
      },
      type: "POST",
      url: "/api/user/sleep",
      data: JSON.stringify(sleep),
    });
  },
};

// handleFluid is called whenever we submit a new exercise
// Save the new Fluid to the db and refresh the list
const handleFluid = function (event) {
  event.preventDefault();

  const fluid = {
    text: $fluidText.val().trim(),
    // description: $fluidDescription.val().trim(),
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
    // description: $exerciseDescription.val().trim(),
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
    // description: $sleepDescription.val().trim(),
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

//   Add event listeners to the submit buttons
$submitExercise.on("click", handleExercise);
$submitFluid.on("click", handleFluid);
$submitSleep.on("click", handleSleep);
