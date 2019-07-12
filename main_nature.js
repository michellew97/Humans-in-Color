$(document).ready(function() {
    
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
var dataPoints = document.getElementsByClassName("button");

slider.oninput = function() {
  var value = this.value;
  output.innerHTML = this.value;

  for (var i = 0; i < dataPoints.length; i++) {
    var point = dataPoints[i];
    var extrovertedVal = getExtrovertedVal(point);
    var introvertedVal = getIntrovertedVal(point);

    var difference = extrovertedVal - introvertedVal;
    if (difference > 0) {
      point.style.opacity = (value - introvertedVal) / 100.0;
    } else {
      point.style.opacity = (100 - value - extrovertedVal) / 100.0;
    }
  }
}

var oldOpacity;
$(".button").hover(function() {
  oldOpacity = $(this).css("opacity");
  $(this).css("opacity", 1);
}, function() {
  $(this).css("opacity", oldOpacity);
});

/* Returns data point's extroverted value */
function getExtrovertedVal(elem) {
  return parseInt(elem.innerText.split(" ")[2].slice(0, -1));
}

/* Returns data point's introverted value */
function getIntrovertedVal(elem) {
  return parseInt(elem.innerText.split(" ")[5].slice(0, -1));
}

});

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
