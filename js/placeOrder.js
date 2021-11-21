function orderTicket(){
	if(sessionStorage.getItem("UserName")==null){
		alert("Please login first");
		event.preventDefault();
	}	
	if(sessionStorage.getItem("Tokyo")!=null || sessionStorage.getItem("Kyoto")!=null || sessionStorage.getItem("Osaka")!=null && sessionStorage.getItem("UserName")!=null){
		let cusName = document.getElementById("firstName").value;
		sessionStorage.setItem("CustomerName", cusName);
		window.location.href = "thank-you.html";
	}else{
		alert("Your cart is empty!");
	}
}

