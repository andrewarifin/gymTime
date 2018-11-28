$(document).ready(function(){
  $("#date").datepicker();
});

function loadCreateWorkout() {
  location.replace("createPage.html");
}

function loadWorkouts() {
  location.replace("viewWorkout.html");
}