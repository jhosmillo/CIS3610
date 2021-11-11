function loginUser(){
	let userName= document.getElementById("username").value;
	sessionStorage.setItem("UserName", userName);
	if(sessionStorage.getItem("UserName")!=null && sessionStorage.getItem("UserName")!= ""){
		window.location.reload();
	}
}


