function loginUser(){
	let userName= document.getElementById("username").value;
	sessionStorage.setItem("UserName", userName);
	window.location.reload();

}



