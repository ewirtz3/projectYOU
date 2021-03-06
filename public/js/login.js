//Get references to page elements
const $ = window.$;
const $signUpBtn = $("#signUp");
const $loginBtn = $(".loginBtn");

const helloUser = {
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
      url: "/api/login",
      type: "POST",
      data: user,
      headers: ("Content-Type", "application/json"),
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

  helloUser.saveUser(newUser).then((res) => {
    alert(
      `Sign up successful! Please log in using your credentials to the left.`
    );
  });
});

$loginBtn.click((event) => {
  event.preventDefault();

  let user = {
    username: $("#username-login").val().trim(),
    password: $("#password-login").val().trim(),
  };

  helloUser.getUser(user).done((res) => {
    window.location.replace("/users/" + res.username);
  });
});
