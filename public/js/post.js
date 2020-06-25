//Get references to page elements
const $ = window.$;
const $fluidText = $("#fluid-text");
const $exerciseText = $("#exercise-text");
const $sleepText = $("#sleep-text");
const $fluidDescription = $("#fluid-description");
const $exerciseDescription = $("#exercise-description");
const $sleepDescription = $("#sleep-description");

const $exerciseBtn = $(".submit-exercise");
const $fluidBtn = $(".submit-fluid");
const $sleepBtn = $(".submit-sleep");

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
  saveExercise: function (exercise) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json",
      },
      type: "POST",
      url: "/api/user/exercise",
      data: exercise,
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
    fluid_type: $fluidText.val().trim(),
    numOfGlasses: $("#numOfGlasses").val().trim(),
  };
  $("#fluid-data").html(
    "<p>You've exercised a total of " +
      fluid.numOfGlasses +
      " glasses of" +
      fluid.fluid_type +
      "!</p>"
  );
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
    exercise_duration: $exerciseText.val().trim(),

    // description: $exerciseDescription.val().trim(),
  };
  $("#exercise-data").html(
    "<p>You've exercised for a total of " +
      exercise.exercise_duration +
      " hours!</p>"
  );

  if (!exercise.exercise_duration) {
    window.alert("You must enter an exercise text !");
    return;
  }

  // newPost.saveExercise(exercise).then(function () {
  //   refreshExercise();
  // });

  $exerciseText.val("");
  $exerciseDescription.val("");
};

// handleSleep is called whenever we submit a new sleep
// Save the new sleep to the db and refresh the list
const handleSleep = function (event) {
  event.preventDefault();

  const sleep = {
    sleep_duration: $sleepText.val().trim(),
    // description: $sleepDescription.val().trim(),
  };
  $("#sleep-data").html(
    "<p>You've slept for a total of " + sleep.sleep_duration + " hours!</p>"
  );
  if (!sleep.sleep_duration) {
    window.alert("Please enter amount of time slept");
    return;
  }

  // newPost.saveSleep(sleep).then(function () {
  //   refreshSleep();
  // });

  $sleepText.val("");
  $sleepDescription.val("");
};

//   Add event listeners to the submit buttons
$(document).on("click", ".submit-exercise", function (event) {
  handleExercise(event);
});
// $exerciseBtn.on("click", handleExercise);
$fluidBtn.on("click", ".submit-fluid", function (event) {
  handleFluid(event);
});
$sleepBtn.on("click", ".submit-sleep", function (event) {
  handleSleep(event);
});
