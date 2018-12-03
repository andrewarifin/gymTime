var allRef;

$(document).ready(function(){
  allRef = firebase.database().ref()
  //fakeEntry();
  //$("#date").datepicker();
});

function loadCreateWorkout() {
  location.replace("createPage.html");
}

function loadWorkouts() {
  location.replace("viewWorkout.html");
}

function syncWorkouts() {

  allRef = firebase.database().ref()
  
  allRef.on("value", function(snapshot) {
    console.log(snapshot.val());

    $(".card horizontal").remove();

    for(key in snapshot.child("workout").val()){
      var workout_entry = snapshot.child("workout").val()[key];
      var workoutName = workout_entry.name;
      var workoutDate = workout_entry.date;
      $("#workout_container").append(
        `<div class="card horizontal">
          <div class="card-image">
            <img src="img/JS-press.jpg">
          </div>
          <div class="card-stacked">
            <div class="card-content">
              
              <h5>${workoutName}</h5>
              <p>${workoutDate}</p>
              
            </div>
            <div class="card-action" onclick="loadWorkouts()">
              <a href="#">Start</a>
            </div>
          </div>
        </div>`
      );
    }
  })
}

function fakeEntry() {
  // allRef.child("workout").push({
  //   name: "Chest Day Best Day",
  //   date: "11/29/2018"
  // })
  // allRef.child("workout").push({
  //   name: "Leg Day :(",
  //   date: "11/30/2018"
  // })
  firebase.database().ref('workout/').push({
    name: "chest day",
    date: "11/29/2018"
  });
  firebase.database().ref('workout/').push({
    name: "leg day :(",
    date: "11/30/2018"
  });
}