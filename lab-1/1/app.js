document.addEventListener("DOMContentLoaded",)


console.log('Welcome to data transmission');


//document.getElementById('message').innerHTML = 'Message from JavaScript';


var user = {
	"id": 1,
	"name": "Siket Jozsef Attila",
	"username": "attila",
	"email": "siket.jozsefattila@gmail.com"
}


console.log("Id: ", user.id);
console.log("Nume: ", user.name);
console.log("Email: ", user.email);


function login(){
	var password = $('#user-pass').val();
	console.log(password == "123" ? "ALLOWED" : "DENIED");
	
	if(password == "123"){
		document.getElementById('message').innerHTML = 'Login SUCCESSFUL';
	} else {
		document.getElementById('message').innerHTML = 'Incorrect PASSWORD!';
	}
}




