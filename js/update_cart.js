function updateCartValue(){
	let totalP = 0;
	let tPrice = 1100;
	let kPrice = 980;
	let oPrice = 1010;
	const ticketLocation = urlParams.get('location');
	
	//Clears the url parameters
	if(ticketLocation != null){
		window.location = window.location.href.split("?")[0];
	}
	

	
	if(sessionStorage.getItem("Tokyo")!=null && sessionStorage.getItem("Tokyo")!= 0){
		let tokyoN	= document.getElementById("tokyoNumber").value;
		sessionStorage.setItem("Tokyo", tokyoN);	
		totalP += tokyoN * tPrice;
		
	}else if(sessionStorage.getItem("Tokyo")== 0){
		sessionStorage.removeItem("Tokyo");
		

	}
	if(sessionStorage.getItem("Kyoto")!=null && sessionStorage.getItem("Kyoto")!= 0){
		let kyotoN	= document.getElementById("kyotoNumber").value;
		sessionStorage.setItem("Kyoto", kyotoN);
		totalP += kyotoN * kPrice;
	
		
	}else if(sessionStorage.getItem("Kyoto")== 0){
		sessionStorage.removeItem("Kyoto");
		

	}
	if(sessionStorage.getItem("Osaka")!=null && sessionStorage.getItem("Osaka")!= 0){
		let osakaN	= document.getElementById("OsakaNumber").value;
		sessionStorage.setItem("Osaka", osakaN);
		totalP += osakaN * oPrice;
		

	}else if(sessionStorage.getItem("Osaka")== 0){
		sessionStorage.removeItem("Osaka");
		

	}
	if(totalP != 0){
		document.getElementById("totalTourPrice").innerHTML = "$"+totalP;
	}
	//Create sessionStorage if value goes back up
	if(document.getElementById("tokyoNumber").value != 0 && document.getElementById("tokyoNumber").value != null){
		let tokyoN	= document.getElementById("tokyoNumber").value;
		sessionStorage.setItem("Tokyo", tokyoN);
		
	}
	if(document.getElementById("kyotoNumber").value != 0 && document.getElementById("kyotoNumber").value != null){
		let kyotoN	= document.getElementById("kyotoNumber").value;
		sessionStorage.setItem("Kyoto", kyotoN);
	}
	if(document.getElementById("OsakaNumber").value != 0 && document.getElementById("OsakaNumber").value != null){
		let osakaN	= document.getElementById("OsakaNumber").value;
		sessionStorage.setItem("Osaka", kyotoN);
	}

	

}