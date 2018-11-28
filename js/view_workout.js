document.addEventListener('DOMContentLoaded', function() {
  var datepicker = document.querySelectorAll('.datepicker');
  var instances = M.Datepicker.init(datepicker);
});

function loadScanner() {
  location.replace("scannerView.html");
}

function loadHomePage() {
  location.replace("homePage.html");
}