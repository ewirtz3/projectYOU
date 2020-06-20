//Get references to page elements
const $ = window.$;
const $signUpBtn = $("#signUp");
const $loginBtn = $(".loginBtn");

const newUser = {
  saveUser: function (user) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json",
      },
      type: "POST",

      url: "/api/user",

      data: JSON.stringify(user),
    });
  },
  getUser: function (user) {
    return $.ajax({
      url: "/api/user",
      type: "GET",
      data: JSON.stringify(user),
    });
  },
};

$signUpBtn.on("click", function () {
  let newUser = {
    username: $("#username-signup").val().trim(),
    password: $("#password-signup").val().trim(),
    first_name: $("#first-name-signup").val().trim(),
    last_name: $("#last-name-signup").val().trim(),
  };

  API.saveUser(newUser).then((res) => {
    console.log(res);
  });
});

$loginBtn.click(() => {
  let user = {
    username: $("#username-login").val().trim(),
    password: $("#password-login").val().trim(),
  };
  console.log(user);

  API.getUser(user).then((res) => {
    console.log(res);
  });
});
