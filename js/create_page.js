document.addEventListener('DOMContentLoaded', function() {
    var datepicker = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(datepicker);

    var timepicker = document.querySelectorAll('.timepicker');
    var instances = M.Timepicker.init(timepicker);

    var timeoutPicker = document.querySelectorAll('.timeoutpicker');
    var timeOutOptions = {
      'onCloseEnd': show_exercises
    }
    var instances = M.Timepicker.init(timeoutPicker, timeOutOptions);
});

function show_cart() {
  console.log('hello');
}

function show_exercises() {
  $("#availableExercises").show()
}
