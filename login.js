

function checkUser(){
	var user = firebase.auth().currentUser;

	if (user) {
		window.location.href = './homepage.html';
	}
}


function login(){

	var database = firebase.database();

	var userEmail = document.getElementById("email_field").value;
	var userPass = document.getElementById("password_field").value;


	firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // ...

	  window.alert("Error: " + errorMessage);
	});

	checkUser();
}


