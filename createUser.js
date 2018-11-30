function create_account() {
	var userEmail = document.getElementById("email_field").value;
	var userPass = document.getElementById("password_field").value;	

	firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // ...

	  window.alert("Error: " + errorMessage);
	});
}