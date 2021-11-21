window.onload = function(){
	let cusName = sessionStorage.getItem("CustomerName")
	document.getElementById("userMsg").innerHTML = "Thank You " +cusName+ "!";
}
	