var body = document.getElementById("body"),
	color1 = document.getElementById('color1'); 
  color2 = document.getElementById('color2'); 

function black () {
  var button = this;
  body.style.background = "#000000"; // Modifie background
  body.style.color = "#FFFFFF"; // Modifie couleur caractères ...
  button.setAttribute("disabled", "true");
  setTimeout(clearcolor1, 1000, button);
}
function clearcolor1 (button) {
  button.removeAttribute("disabled");
}

function white () {
  var button = this;
  body.style.background = "#FFFFFF"; // Modifie background
  body.style.color = "#000000"; // Modifie couleur caractères ...
  button.setAttribute("disabled", "true");
  setTimeout(clearcolor2, 1000, button);
}
function clearcolor2 (button) {
  button.removeAttribute("disabled");
}

color1.onclick = black; 
color2.onclick = white; 