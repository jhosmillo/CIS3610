function logInCheck(){
	let navSign = document.getElementById("signinNav");
	let navOut = document.getElementById("logOutNav");
	
	if(sessionStorage.getItem("UserName")!=null){		
		navSign.style.display = 'none';	  
	}else{
		navSign.style.display = "block";
	}
	if(sessionStorage.getItem("UserName")==null){		
		navOut.style.display = 'none';	  
	}else{
		navOut.style.display = "block";
		document.getElementById("userNameDisplay").innerHTML = sessionStorage.getItem("UserName");
	}
}

window.addEventListener("load", logInCheck());
