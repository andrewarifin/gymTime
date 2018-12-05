
/*
function checkUser(){
	var user = firebase.auth().currentUser;

	if (user) {
		window.location.href = './homepage.html';
	}
}
*/

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    window.location.href = './homepage.html';
  } else {
    // No user is signed in.
  }
});



function login(){

	//checkUser();

	var database = firebase.database();

	var userEmail = document.getElementById("email_field").value;
	var userPass = document.getElementById("password_field").value;


	firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(res => {
		console.log('hello');

		window.location.href = './homepage.html';
	})
	.catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // ...

	  window.alert("Error: " + errorMessage);
	});


}

