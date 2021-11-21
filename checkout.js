function checkOut(){
	let cusName = document.getElementById("firstName").value;
	sessionStorage.setItem("CustomerName", cusName);
	location.href = "thank-you.html";
}

document.getElementById("checkoutBtn").addEventListener("click", checkOut());