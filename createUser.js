

function create_user() {
	var database = firebase.database();

	var userEmail = document.getElementById("email_field").value;
	var userPass = document.getElementById("password_field").value;	
	var userName = document.getElementById("username_field").value;
	



	firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).then(res => {
		console.log('hello');

		var user = firebase.auth().currentUser;
		
		var db = firebase.database().ref();
		db.child("users").child(user.uid).set(userName)

	})


	.catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // ...
	  window.alert("Error: " + errorMessage);
	});


 
	firebase.auth().onAuthStateChanged(function(user) {
	  if (user) {
	    window.location.href = './homepage.html';
	  } else {

	  }
	});

}
