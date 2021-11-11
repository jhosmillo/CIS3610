function logOutUser(){
	sessionStorage.removeItem("UserName");
	logInCheck();
}
window.onload = function () {
    document.getElementById('logOutUser').addEventListener('click', logOutUser, false);
}
