var allRef;

$(document).ready(function(){
  allRef = firebase.database().ref()
  //fakeEntry();
  //$("#date").datepicker();
  //$("#loading_wheel").hide();

});

function loadCreateWorkout() {
  location.replace("createPage.html");
}

function loadWorkouts(date) {
  console.log("workoutDate: " + date)
  window.location.href = "viewWorkout.html" + "?date=" + date;
}

function syncWorkouts() {

  allRef = firebase.database().ref()
  $(".card horizontal").remove();
  $("#loading_wheel").show();
  
  allRef.on("value", function(snapshot) {
    var currUid = firebase.auth().currentUser.uid;
    
    for(key in snapshot.child("users").child(currUid).val()){
      $("#loading_wheel").hide(); 
      var workout_entry = snapshot.child("users").child(currUid).val()[key];
      if(workout_entry.workoutName == undefined && workout_entry.date == undefined){
        $("#workout_container").append(
          `<p id="no_workout_error">No Workout Added :(</p>`
        )
        break;
      }
      var workout_Name = workout_entry.workoutName;
      var workoutDate = workout_entry.date;
      $("#workout_container").append(
        `<div class="card horizontal">
          <div class="card-image">
            <img src="img/JS-press.jpg">
          </div>
          <div class="card-stacked">
            <div class="card-content">
                
              <h5>${workout_Name}</h5>
              <p>${workoutDate}</p>
                
            </div>
            <div class="card-action" onclick="loadWorkouts($(this).prev().find('p').text())">
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

function logout() {
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    //window.location.href = 'https://andrewarifin.github.io/gymTime';
    window.location.href = './index.html';

  }).catch(function(error) {
    // An error happened.
    window.alert(error)
  });
}