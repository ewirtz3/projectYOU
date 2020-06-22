//Get references to page elements
const $ = window.$;
const $sleepList = $("#sleep-list");
const $exerciseList = $("#exercise-list");
const $fluidList = $("#fluid-list");

//methods, variables, handlers, and event listeners are adapted from the provided boilerplate. We will need to make some changes. For example, I don't think we have anything called fluid/exercise/sleep description (see lines 12-14). These changes depend on how we want our front-end to look. I could leave this for someone doing front-end or we can do that together.

// The API object contains methods for each kind of request we'll make
const API = {
  //////////////////////////////////DELETE METHODS
  //DELETE USER
  deleteUser: function (id) {
    return $.ajax({
      url: "/api/user/" + id,
      type: "DELETE",
    });
  },
  //DELETE EXERCISE
  deleteExercise: function (id) {
    return $.ajax({
      url: "/api/user/exercise/" + id,
      type: "DELETE",
    });
  },
  //DELETE FLUID
  deleteFluid: function (id) {
    return $.ajax({
      url: "/api/user/fluid/" + id,
      type: "DELETE",
    });
  },
  //DELETE SLEEP
  deleteSleep: function (id) {
    return $.ajax({
      url: "/api/user/sleep/" + id,
      type: "DELETE",
    });
  },
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove Exercise from the db and refresh the list
const handleDeleteExercise = function () {
  const idToDelete = $(this).parent().attr("data-id");

  API.deleteExercise(idToDelete).then(function () {
    refreshExercise();
  });
};
// Remove Fluid from the db and refresh the list
const handleDeleteFluid = function () {
  const idToDelete = $(this).parent().attr("data-id");

  API.deleteFluid(idToDelete).then(function () {
    refreshFluid();
  });
};
// Remove Sleep from the db and refresh the list
const handleDeleteSleep = function () {
  const idToDelete = $(this).parent().attr("data-id");

  API.deleteSleep(idToDelete).then(function () {
    refreshSleep();
  });
};

$exerciseList.on("click", ".delete", handleDeleteExercise);
$fluidList.on("click", ".delete", handleDeleteFluid);
$sleepList.on("click", ".delete", handleDeleteSleep);

const exerciseBtn = $(".exerciseBtn");
const fluidIntakeBtn = $(".fluidBtn");
const sleepBtn = $(".sleepBtn");

exerciseBtn.click(function () {
  console.log("this works");
  $(this).addClass("active");
  fluidIntakeBtn.removeClass("active");
  sleepBtn.removeClass("active");
});

fluidIntakeBtn.click(function () {
  $(this).addClass("active");
  exerciseBtn.removeClass("active");
  sleepBtn.removeClass("active");
});

sleepBtn.click(function () {
  $(this).addClass("active");
  exerciseBtn.removeClass("active");
  fluidIntakeBtn.removeClass("active");
});

if (exerciseBtn.hasClass("active")) {
  //code to display user's exercise stuff
} else if (fluidIntakeBtn.hasClass("active")) {
  //code to display user's fluid intake stuff
} else {
  //code to display user's sleep stuff
}
