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
const exerciseArr = [];
const fluidArr = [];
const sleepArr = [];

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
    fluid_type: $(".fluid-opt").val().trim(),
    numOfGlasses: $(".numOfGlasses").val().trim(),
    user_Id: 1,
  };
  fluidArr.push(parseInt(fluid.numOfGlasses));
  totalFluid = fluidArr.reduce((a, b) => a + b, 0);
  console.log(fluidArr);

  $("#fluid-data").html(
    `<img src="https://image.flaticon.com/icons/svg/2907/2907404.svg" width="80px" height="80px" alt="water icon"/>` +
      "<h5>You've drank for a total of " +
      totalFluid +
      " glasses of " +
      fluid.fluid_type +
      "!</h5>"
  );
  if (!fluid.numOfGlasses) {
    window.alert("You must enter an amount of fluid intake!");
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
  exerciseArr.push(parseInt(exercise.exercise_duration));
  totalExercise = exerciseArr.reduce((a, b) => a + b, 0);

  $("#exercise-data").html(
    `<img src="https://image.flaticon.com/icons/svg/2928/2928158.svg" width="80px" height="80px" alt="exercise icon"/>` +
      "<h5>You've exercised for a total of " +
      totalExercise +
      " hours!</h5>"
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
  sleepArr.push(parseInt(sleep.sleep_duration));
  totalSleep = sleepArr.reduce((a, b) => a + b, 0);
  console.log(sleepArr);

  $("#sleep-data").html(
    `<img src="https://image.flaticon.com/icons/svg/865/865789.svg" width="80px" height="80px" alt="sleep icon"/>` +
      "<h5>You've slept for a total of " +
      totalSleep +
      " hours!</h5>"
  );
  if (!sleep.sleep_duration) {
    window.alert("You must enter amount of time slept!");
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
$(document).on("click", ".submit-fluid", function (event) {
  handleFluid(event);
});
$(document).on("click", ".submit-sleep", function (event) {
  handleSleep(event);
});
