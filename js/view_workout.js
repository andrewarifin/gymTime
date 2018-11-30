var storage = [];

function store(key, value) {
  storage.push({
    key: key,
    value: value
  });
}

function getValue(key) {
  for (var i = storage.length-1; i >= 0; i--) {
    var obj = storage[i];
    if (obj.key === key) return obj.value;
  }
}

function getUrlParam(parameter, defaultvalue){
  var urlparameter = defaultvalue;
  if(window.location.href.indexOf(parameter) > -1){
    urlparameter = getUrlVars()[parameter];
  }
  return urlparameter;
}

var recentDate = getUrlPram('date', 'Jan 1, 2018');

function onDateSelect() {
  var dateSelected = $('#datepicker').val()
  recentDate = dateSelected
}

document.addEventListener('DOMContentLoaded', function() {
  var datepicker = document.querySelectorAll('.datepicker');
  var dateOptions = {
    'onCloseEnd': onDateSelect
  }
  var instances = M.Datepicker.init(datepicker, dateOptions);
});

function loadScanner() {
  location.replace("scannerView.html");
}

function loadHomePage() {
  location.replace("homePage.html");
}

function loadScanner() {
  location.replace("scannerView.html");
}

function loadHomePage() {
  location.replace("index.html");
}

function getDescription(machine) {
  switch(machine) {
	case "treadmill":
	  return "Running on the treadmill acts as a great cardiovascular workout and can greatly improve your heart health. Each time you step on a treadmill, you strengthen your heart and lower your blood pressure. Get running!";
	case "elliptical":
	  return "The elliptical is a great machine that works out the entire body and increases aerobic capacity. Additionally, it's a non-impact exercise, meaning it doesn't put very much stress on your joints at all!";
	case "squat rack":
	  return "The squat rack will pack significant size and strength to your lower body, specifically your quads, glutes and hamstrings. It will also help improve flexibility and overall increase core strength!";
	case "bench press":
	  "The bench press is great for improving upper body strength, and frequent usage will help create bigger and stronger pectorals, triceps and biceps. Get benching and you'll be able to fill out those t-shirts in no time!"
	default:
	  return;
  }
}

function loadExercise() {
  var curr_workout = ["treadmill"];
  
  /*var database = firebase.database();
  var userId = firebase.auth().currentUser;
  database.ref("userEmail/" + userId + "/date/").on('value', function(snap){
	snap.forEach(function(childNodes){
	  if(childNodes.val() == instances) {
		curr_workout.push(childNodes.val().Equipmentname);
	  }
	}
  }*/
  /*return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
	for (var key in snapshot.val()) {
	  if(key.date == instances) {
		curr_workout.push(key.date.Equipmentname);  
	  }
	}
  });*/
  var machine1;
  var machine2;
  var machine3;
  var machine4;
  if(curr_workout.length > 0) {
  	machine1 = curr_workout[0];
  }
  if(curr_workout.length > 1) {
 	machine2 = curr_workout[1];
  }
  if(curr_workout.length > 2) {
	machine3 = curr_workout[2];
  }
  if(curr_workout.length > 3) {
	machine4 = curr_workout[3];
  }
	
  if(typeof machine1 != 'undefined') {
	var answer1 = getDescription(machine1);
	//document.getElementById('m1').innerHTML = machine1;
	//document.getElementById('a1').innerHTML = answer1;
	var div = document.createElement('div');
	div.innerHTML = `
	  <div class="workouts">
         <div class="col">
	      <button type="button" class="workout_button" onclick="loadScanner()">
	        <p class="exerciseTitle"><b>hihi</b></p>
            <p class="exerciseDescription">hihi</p>
		  </button>
	    </div>
      </div>"
	`;
	document.getElementById('display').appendChild(div);
    $('#display').append(machine_1);
  } 

  if(typeof machine2 != 'undefined') {
    var answer2 = getDescription(machine2);
	var machine_2 = `
	  <div class="workouts">
         <div class="col">
	      <button type="button" class="workout_button" onclick="loadScanner()">
	        <p class="exerciseTitle"><b>$("machine2")</b></p>
            <p class="exerciseDescription">$("answer2")</p>
		  </button>
	    </div>
      </div>"
	`;
    $("#machines").append(machine_2);
  } 

  if(typeof machine3 != 'undefined') {
 	var answer3 = getDescription(machine3);
	var machine_3 = `
	  <div class="workouts">
         <div class="col">
	      <button type="button" class="workout_button" onclick="loadScanner()">
	        <p class="exerciseTitle"><b>$("machine3")</b></p>
            <p class="exerciseDescription">$("answer3")</p>
		  </button>
	    </div>
      </div>"
	`;
    $("#machines").append(machine_3);
  } 

  if(typeof machine4 != 'undefined') {
 	var answer4 = getDescription(machine4);
	var machine_4 = `
	  <div class="workouts">
         <div class="col">
	      <button type="button" class="workout_button" onclick="loadScanner()">
	        <p class="exerciseTitle"><b>$("machine4")</b></p>
            <p class="exerciseDescription">$("answer4")</p>
		  </button>
	    </div>
      </div>"
	`;
    $("#machines").append(machine_4);
  } 

}