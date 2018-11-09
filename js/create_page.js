document.addEventListener('DOMContentLoaded', function() {
    var datepicker = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(datepicker);

    var timepicker = document.querySelectorAll('.timepicker');
    var instances = M.Timepicker.init(timepicker);
});

function show_cart() {
  console.log('hello');
}
