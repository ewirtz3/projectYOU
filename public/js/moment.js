// var moment = require("moment");

$("#clock");
function update() {
  $("#clock").html(moment().format("dddd MMMM do YYYY H:mm:ss"));
}
setInterval(update, 1000);
