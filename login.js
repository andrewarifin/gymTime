

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    window.location.href = 'https://andrewarifin.github.io/gymTime/homepage.html';
    var user = firebase.auth().currentUser.displayName;
    if (user != null){
    	window.alert(user)
    }
  } });

function login(){

	var database = firebase.database();

	var userEmail = document.getElementById("email_field").value;
	var userPass = document.getElementById("password_field").value;
	console.log(userEmail);


	firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // ...

	  window.alert("Error: " + errorMessage);
	});
}

function logout() {
	firebase.auth().signOut().then(function() {
	  // Sign-out successful.
	  window.location.href = 'https://andrewarifin.github.io/gymTime/login.html';
	}).catch(function(error) {
	  // An error happened.
	  window.alert(error)
	});
}
