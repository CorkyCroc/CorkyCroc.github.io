//This function get real time
function updatetime() {
  var now = new Date();
  var time = now.getHours();
  gettimeofday(time);
}

//This change background base on real time
function gettimeofday(now) {
  hour = now;
  if (hour >= 0 && hour < 5) {
    document.body.style.backgroundImage =
      'url("./img/Night.png")';
  }
  if (hour >= 5 && hour < 7) {
    document.body.style.backgroundImage =
      'url("./img/Sunrise.png")';
  }
  if (hour >= 7 && hour < 16) {
    document.body.style.backgroundImage =
      'url("./img/Day.png")';
  }
  if (hour >= 18 && hour < 19) {
    document.body.style.backgroundImage =
      'url("./img/Evening.png")';
  }
  if (hour >= 19 && hour <= 24) {
    document.body.style.backgroundImage =
      'url("./img/Night.png")';
  }
}
