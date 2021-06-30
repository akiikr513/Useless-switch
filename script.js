document.getElementsByTagName("h1")[0].style.fontSize = "6vw";
function toggleIcon() {
  var icon = document.getElementById("switch");
  if (icon.style.color == "red") {
    icon.classList.add("fa-toggle-on");
    icon.classList.remove("fa-toggle-off");
    icon.style.color = "green";
  } else {
    icon.classList.add("fa-toggle-off");
    icon.classList.remove("fa-toggle-on");
    icon.style.color = "red";
    var face = document.getElementById("bot");
    face.classList.remove("fa-smile-wink");
    face.classList.add("fa-smile-beam");
    face.style.color = "green";
  }
}

function angryFace() {
  var face = document.getElementById("bot");
  face.classList.remove("fa-smile-beam");
  face.classList.add("fa-angry");
  face.style.color = "red";
}

function winkFace() {
  var face = document.getElementById("bot");
  face.classList.remove("fa-angry");
  face.classList.add("fa-smile-wink");
  face.style.color = "blue";
}

function changeIcon() {
  var ic = document.getElementById("switch");
  if (ic.style.color === "red") {
    toggleIcon();
    angryFace();
    timeDelay();
  }
}
function timeDelay() {
  var rT = Math.floor(Math.random() * 2500);
  if (rT < 500) rT += 500;
  setTimeout(winkFace, rT / 2);
  setTimeout(toggleIcon, rT);
}