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
	case "Treadmill":
	  return "Running on the treadmill acts as a great cardiovascular workout and can greatly improve your heart health. Each time you step on a treadmill, you strengthen your heart and lower your blood pressure. Get running!";
	case "Squat rack":
	  return "The squat rack will pack significant size and strength to your lower body, specifically your quads, glutes and hamstrings. It will also help improve flexibility and overall increase core strength!";
	case "Bench press":
	  return "The bench press is great for improving upper body strength, and frequent usage will help create bigger and stronger pectorals, triceps and biceps. Get benching and you'll be able to fill out those t-shirts in no time!"
	default:
	  return;
  }
}

function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
    }
    return urlparameter;
}

function loadExercise() {
  /*var queryStart = window.location.href.indexOf("?") + 1
  var queryEnd = (window.location.href.indexOf("?") + 13
  var query
  if (window.location.href).slice(queryStart, queryEnd - 1) != 'undefined') {
	query = window.location.href).slice(queryStart, queryEnd - 1)
  }
  if (query === window.location.href || query === "") {
	return;
  }*/
  
  var dateCheck = window.location.href.split('date=').pop();
  
  dateCheck = dateCheck.slice(0, 4) + dateCheck.slice(6, 10) + dateCheck.slice(12)
 
  dateCheck = dateCheck.replace(/%/g, " ")
  
  //let curr_workout = []
  var curr_workout = ["Treadmill", "Treadmill", "Bench press", "Squat rack"];
  var machine1;
  var machine2;
  var machine3;
  var machine4;
  let machine_1 = ``
  let machine_2 = ``
  let machine_3 = ``
  let machine_4 = ``

  var database = firebase.database();
  //let userId = firebase.auth().currentUser.uid;
  database.ref(/*'users/' + userId*/).on('value', function(snap){
	console.log(snap.val());
	
	for(key in snap.child("users").child(firebase.auth().currentUser.uid).val()){
	  var workout_entry = snap.child("users").child(firebase.auth().currentUser.uid).val()[key];
	  var workout_date = workout_entry.date;
	  if(dateCheck === workout_date) {
        var workoutMachines = workout_entry.workoutsChosen  
        if(workoutMachines[0] != 'undefined') {
	      curr_workout.push(workoutMachines[0])
        }
		if(workoutMachines[1] != 'undefined') {
		  curr_workout.push(workoutMachines[1])
	    }
	    if(workoutMachines[2] != 'undefined') {
		  curr_workout.push(workoutMachines[2])
	    }
	    if(workoutMachines[3] != 'undefined') {
		  curr_workout.push(workoutMachines[3])
	    }		
	  }
	}

	/*for(var key in snap.val()) {
	  for (var item of snap.val()[key].date) {
		if(item != 'undefined') {
	    var workout_date = item
	      if(userId === key && dateCheck === workout_date) {
            var workoutMachines = snap.val()[key].workoutsChosen
		    if(workoutMachines[0] != 'undefined') {
			  curr_workout.push(workoutMachines[0])
		    }
		    if(workoutMachines[1] != 'undefined') {
			  curr_workout.push(workoutMachines[1])
		    }
		    if(workoutMachines[2] != 'undefined') {
			  curr_workout.push(workoutMachines[2])
		    }
		    if(workoutMachines[3] != 'undefined') {
			  curr_workout.push(workoutMachines[3])
		    }
		  }
		}
	  }
	}*/
  })
  
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
	machine_1 = `
	  <div class="workouts">
        <div class="col">
	      <button type="button" class="workout_button" onclick="loadScanner()">
	        <p class="exerciseTitle"><b>${machine1}</b></p>
            <p class="exerciseDescription">${answer1}</p>
		  </button>
	    </div>
      </div>
	`
    $('#machines').append(machine_1);
  }
  
  if(typeof machine2 != 'undefined') {
	var answer2 = getDescription(machine2);
	machine_2 = `
	  <div class="workouts">
        <div class="col">
	      <button type="button" class="workout_button" onclick="loadScanner()">
	        <p class="exerciseTitle"><b>${machine2}</b></p>
            <p class="exerciseDescription">${answer2}</p>
		  </button>
	    </div>
      </div>
	`
    $('#machines').append(machine_2);
  }
  
  if(typeof machine3 != 'undefined') {
	var answer3 = getDescription(machine3);
	machine_3 = `
	  <div class="workouts">
        <div class="col">
	      <button type="button" class="workout_button" onclick="loadScanner()">
	        <p class="exerciseTitle"><b>${machine3}</b></p>
            <p class="exerciseDescription">${answer3}</p>
		  </button>
	    </div>
      </div>
	`
    $('#machines').append(machine_3);
  }
  
  if(typeof machine4 != 'undefined') {
	var answer4 = getDescription(machine1);
	machine_4 = `
	  <div class="workouts">
        <div class="col">
	      <button type="button" class="workout_button" onclick="loadScanner()">
	        <p class="exerciseTitle"><b>${machine4}</b></p>
            <p class="exerciseDescription">${answer4}</p>
		  </button>
	    </div>
      </div>
	`
    $('#machines').append(machine_4);
  }
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