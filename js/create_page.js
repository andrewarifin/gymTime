document.addEventListener('DOMContentLoaded', function() {
    var datepicker = document.querySelectorAll('.datepicker');
    var dateOptions = {
      'onClose': onDateSelect
    }
    var instances = M.Datepicker.init(datepicker, dateOptions);

    var timepicker = document.querySelectorAll('.timepicker');
    var timeinOptions = {
      'onCloseEnd': onTimeInSelect
    }
    var instances = M.Timepicker.init(timepicker, timeinOptions);

    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
});

function show_cart() {
  createExerciseCard('treadmill')
  document.getElementById("mySidenav").style.height = "75%";
}

function createSlider(equipmentName, timeIn, timeOut) {
  timeIn = convertTime(timeIn)
  timeOut = convertTime(timeOut)

  var initialStartMinute = timeIn,
    initialEndMinute = timeOut,
    step = 10,
    margin = 10;

  var slider = document.getElementById(`${equipmentName}-slider`);

  slider = noUiSlider.create(slider, {
    connect: true,
    step: step,
    margin: margin,
    start: [timeIn, timeOut],
    pips: {
      mode: 'steps',
      density: 20
    },

    range: {
      'min': initialStartMinute,
      'max': initialEndMinute
    }
  });

  $(`#${equipmentName}-slider`).find('.noUi-value.noUi-value-horizontal.noUi-value-large').each(function() {
    var val = $(this).html();
    val = recountVal(parseInt(val));
    $(this).html(val);
  });

  $(`#${equipmentName}-slider`).find('.noUi-value.noUi-value-horizontal.noUi-value-sub').each(function() {
    var val = $(this).html();
    val = recountVal(parseInt(val));
    $(this).html(val);
  });
}

function recountVal(val) {
  let hours = Math.floor(val/60)
  let minutes = val%60

  if(hours > 12) {
    hours = hours-12
  }

  if(minutes < 10) {
    minutes = `0${minutes.toString()}`
  }

  return(`${hours}:${minutes}`)
}

function createExerciseCard(exerciseName) {
  let machine = ``
  let modal = ``
  var timeIn = $('#timeIn').val()
  var timeOut = $('#timeOut').val()

  switch(exerciseName) {
    case "treadmill":
      machine = `
        <div class="col s6 m5">
          <div id="treadmillCard" class="card-panel grey lighten-1" href="treadmillModal">
            <img src="./img/treadmill.png" class="circle thumbnail">
            <p class="exerciseTitle">Treadmill</p>
            <p class="availability">3/4 Available</p>
          </div>
        </div>
      `
      modal = `
        <div id="treadmillModal" class="modal">
          <div class="modal-content">
            <img src="./img/treadmill.png" class="circle thumbnail">
            <p class="modalTitle">Treadmill</p>
            <div id="treadmill-slider"></div>
          </div>
          <div class="modal-footer">
            <div class="decisionButtons">
              <a class="waves-effect waves-light btn" onclick=addWorkoutToCart('treadmill')><i class="material-icons left">check</i>Book</a>
              <a class="waves-effect waves-light btn" onclick=onclick=cancelAdd('treadmill')><i class="material-icons left">close</i>Cancel</a>
            </div>
          </div>
        </div>
      `
      $('#availableExercises').append(machine)
      $('body').append(modal)

      createSlider(exerciseName, timeIn, timeOut)
      break;

    case "squatrack":
      machine = `
        <div class="col s6 m5">
          <div id="squatrackCard" class="card-panel grey lighten-1">
            <img src="./img/squat_rack.png" class="circle thumbnail">
            <p class="exerciseTitle">Squat Rack</p>
            <p class="availability">3/4 Available</p>
          </div>
        </div>
      `

      modal = `
        <div id="squatrackModal" class="modal">
          <div class="modal-content">
            <img src="./img/squat_rack.png" class="circle thumbnail">
            <p class="modalTitle">Squat Rack</p>
            <div id="squatrack-slider"></div>
          </div>
          <div class="modal-footer">
            <div class="decisionButtons">
              <a class="waves-effect waves-light btn" onclick=addWorkoutToCart('squatrack')><i class="material-icons left">check</i>Book</a>
              <a class="waves-effect waves-light btn" onclick=cancelAdd('squatrack')><i class="material-icons left">close</i>Cancel</a>
            </div>
          </div>
        </div>
      `
      $('#availableExercises').append(machine)
      $('body').append(modal)

      createSlider(exerciseName, timeIn, timeOut)
      break;

    case "benchpress":
      machine = `
        <div class="col s6 m5">
          <div id="benchpressCard" class="card-panel grey lighten-1">
            <img src="./img/bench_press.png" class="circle thumbnail">
            <p class="exerciseTitle">Bench Press</p>
            <p class="availability">3/4 Available</p>
          </div>
        </div>
      `

      modal = `
        <div id="benchpressModal" class="modal">
          <div class="modal-content">
            <img src="./img/bench_press.png" class="circle thumbnail">
            <p class="modalTitle">Bench Press</p>
            <div id="benchpress-slider"></div>
          </div>
          <div class="modal-footer">
            <div class="decisionButtons">
              <a class="waves-effect waves-light btn" onclick=addWorkoutToCart('benchpress')><i class="material-icons left">check</i>Book</a>
              <a class="waves-effect waves-light btn" onclick=cancelAdd('benchpress')><i class="material-icons left">close</i>Cancel</a>
            </div>
          </div>
        </div>
      `
      $('#availableExercises').append(machine)
      $('body').append(modal)

      createSlider(exerciseName, timeIn, timeOut)
      break;

    default:
      console.log('no equipment available');
  }
}

function convertTime(timeString) {
  let amOrPm = timeString.slice(-2)
  timeString = timeString.slice(0, timeString.length-2)
  let hours = parseInt(timeString.split(':')[0])
  let minutes = parseInt(timeString.split(':')[1])

  if (amOrPm == 'PM') {
    return (12*60+hours*60+minutes)
  }

  return hours*60+minutes;
}

function selectTimeInterval(name) {
  var elem = document.querySelector(`#${name}Modal`)
  let modalOptions = {
    'endingTop': '30%'
  }
  let test = M.Modal.init(elem, modalOptions)

  var instance = M.Modal.getInstance(elem)
  instance.open()
}

function onTimeInSelect() {
  var timeIn = $('#timeIn').val()
  var timeoutPicker = document.querySelectorAll('.timeoutpicker');
  var timeOutOptions = {
    'onCloseEnd': show_exercises,
    'defaultTime': timeIn
  }
  var instances = M.Timepicker.init(timeoutPicker, timeOutOptions);

  if (timeIn != '') {
    $("#timeOut").prop('disabled', false);
  }
}

function onDateSelect() {
  var date = $('#datepicker').val()
  var timeIn = $('#timeIn').val()
  var timeOut = $('#timeOut').val()
  if (date != '' & timeIn != '' & timeOut != '') {
    fetchExercisesFromFirebase(date, timeIn, timeOut)
  }
}

function closeNav() {
    document.getElementById("mySidenav").style.height = "0";
}

function show_exercises() {
  var date = $('#datepicker').val()
  var timeIn = $('#timeIn').val()
  var timeOut = $('#timeIn').val()

  if (date == '' || timeIn == '' || timeOut == '') {
    M.toast({html: 'Please complete all fields'})
  } else {
    fetchExercisesFromFirebase(date, timeIn, timeOut)
  }

}

function fetchExercisesFromFirebase(date, timeIn, timeOut) {
  var db = firebase.database().ref("list_of_equipment")

  $("#availableExercises").show()
  db.once("value", function(snapshot) {
    let res = snapshot.val();
    let availableMachines = Object.values(res)
    availableMachines.forEach(machine => {
      machineName = machine.equipmentName
      createExerciseCard(machineName)
    })
  }, error => console.log("Error: ", error.code))
}

function cancelAdd(equipmentName) {
  var elem = document.querySelector(`#${equipmentName}Modal`)
  var instance = M.Modal.getInstance(elem)

  instance.close()
}

function addWorkoutToCart(equipmentName) {
  var slider = document.getElementById(`${equipmentName}-slider`)

  let times = slider.noUiSlider.get()

  var timeIn = recountVal(times[0])
  var timeOut = recountVal(times[1])
  let icon = ''
  let title = ''
  var elem = document.querySelector(`#${equipmentName}Modal`)
  var instance = M.Modal.getInstance(elem)

  switch(equipmentName) {
    case 'treadmill':
      icon = 'treadmill'
      title = 'Treadmill'
      break;
    case 'squatrack':
      icon = 'squat_rack'
      title = 'Squat Rack'
      break;
    case 'benchpress':
      icon = 'bench_press'
      title = 'Bench Press'
      break;
  }

  let newWorkout = `
    <div class="row">
      <div class="col s4">
        <img src="./img/${icon}.png" class="circle thumbnail">
        <p class="workoutTitle">${title}</p>
      </div>
      <div class="timeColumn col s8">
        <p class="timeText">Start: ${timeIn}</p>
        <p class="timeText">End: ${timeOut}</p>
      </diV>
    </div>
    </div>
    <hr>
  `

  $('#addedWorkouts').append(newWorkout)

  instance.close()

}

$('body').on('click', '#treadmillCard', function () {
  selectTimeInterval('treadmill')
});

$('body').on('click', '#squatrackCard', function () {
  selectTimeInterval('squatrack')
});

$('body').on('click', '#benchpressCard', function () {
  selectTimeInterval('benchpress')
});



function loggingout() {
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    //window.location.href = 'https://andrewarifin.github.io/gymTime';
    window.location.href = './index.html';
    window.alert('logged out')
  }).catch(function(error) {
    // An error happened.
    window.alert(error)
  });
}
