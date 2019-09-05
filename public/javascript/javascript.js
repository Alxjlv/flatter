// var slider = $("#sliderInput")[0];
// var output = $("#sliderOutput")[0];
// output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
//   output.innerHTML = this.value;
// }

$(document).ready(function(){
  $("#sliderInput").css("width", "calc(100% - 20px - " + $("#5minLabel").width() + "px - " + $("#2hrLabel").width() + "px)");
});