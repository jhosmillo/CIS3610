const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const ticketQuantity = urlParams.get('ticket-quantity');
	const ticketLocation = urlParams.get('location');
	
	let totalP = 0;

	//Price for each location
	let tPrice = 1100;
	let kPrice = 980;
	let oPrice = 1010;
	
	//Quantity for each location
	
	let tQty  = 0;
	let kQty = 0 ;
	let oQty = 0;
	console.log(ticketLocation);
window.onload = function setupCart(){
	
	
	
	if(ticketLocation != null){
	
	
	
	
	//Setup Cart
	if(localStorage.getItem("Tokyo")!=null && localStorage.getItem("Tokyo")!=0){
		tQty = localStorage.getItem("Tokyo");
		if(tQty!=ticketQuantity && ticketLocation=="Tokyo"){
			tQty=ticketQuantity;
		}
		console.log(tQty+"here");
		let strLiTokyo = '<li class="list-group-item d-flex justify-content-between lh-condensed" id="Tokyo"><div><h6 class="my-0">Tokyo</h6><small class="text-muted"><input type="number" id="tokyoNumber" name="quantity" min="0" max="8" value="'+tQty+'">   tour ticket(s)</small></div><span class="text-muted">$'+tPrice+'</span></li>';

		let tokyoLi = document.createElement('li');
		
		tokyoLi.innerHTML = strLiTokyo;
		document.getElementById('cartUl').appendChild(tokyoLi);
		totalP += tQty * tPrice;
		localStorage.setItem("Tokyo", tQty);
	}else if(ticketLocation == "Tokyo"){
		tQty = ticketQuantity;
		console.log(tQty+"here2");
		let strLiTokyo = '<li class="list-group-item d-flex justify-content-between lh-condensed" id="Tokyo"><div><h6 class="my-0">Tokyo</h6><small class="text-muted"><input type="number" id="tokyoNumber" name="quantity" min="0" max="8" value="'+tQty+'">   tour ticket(s)</small></div><span class="text-muted">$'+tPrice+'</span></li>';

		let tokyoLi = document.createElement('li');
		
		tokyoLi.innerHTML = strLiTokyo;
		document.getElementById('cartUl').appendChild(tokyoLi);
		totalP += tQty * tPrice;
		localStorage.setItem("Tokyo", tQty);
	}
	
	if(localStorage.getItem("Kyoto")!=null && localStorage.getItem("Kyoto")!=0){
		kQty = localStorage.getItem("Kyoto");
		if(kQty!=ticketQuantity && ticketLocation=="Kyoto"){
			kQty=ticketQuantity;
		}
		
		let strLiKyoto = '<li class="list-group-item d-flex justify-content-between lh-condensed" id="Kyoto"><div><h6 class="my-0">Kyoto</h6><small class="text-muted"><input type="number" id="kyotoNumber" name="quantity" min="0" max="8" value='+kQty+'>   tour ticket(s)</small></div><span class="text-muted">$'+kPrice+'</span></li>';

		let KyotoLi = document.createElement('li');
		KyotoLi.innerHTML = strLiKyoto;
		document.getElementById('cartUl').appendChild(KyotoLi);
		totalP += kQty * kPrice;
		localStorage.setItem("Kyoto", kQty);
	}else if(ticketLocation=="Kyoto"){
		kQty = ticketQuantity;
		let strLiKyoto = '<li class="list-group-item d-flex justify-content-between lh-condensed" id="Kyoto"><div><h6 class="my-0">Kyoto</h6><small class="text-muted"><input type="number" id="kyotoNumber" name="quantity" min="0" max="8" value='+kQty+'>   tour ticket(s)</small></div><span class="text-muted">$'+kPrice+'</span></li>';

		let KyotoLi = document.createElement('li');
		KyotoLi.innerHTML = strLiKyoto;
		document.getElementById('cartUl').appendChild(KyotoLi);
		totalP += kQty * kPrice;
		localStorage.setItem("Tokyo", tQty);
	}
	
	if(localStorage.getItem("Osaka")!=null && localStorage.getItem("Osaka")!=0){
		oQty = localStorage.getItem("Osaka");
		if(oQty!=ticketQuantity && ticketLocation=="Osaka"){
			oQty=ticketQuantity;
		}
		
		let strLiOsaka = '<li class="list-group-item d-flex justify-content-between lh-condensed" id="Osaka"><div><h6 class="my-0">Osaka</h6><small class="text-muted"><input type="number" id="OsakaNumber" name="quantity" min="0" max="8" value='+oQty+'>   tour ticket(s)</small></div><span class="text-muted">$'+oPrice+'</span></li>';


	let OsakaLi = document.createElement('li');
	OsakaLi.innerHTML = strLiOsaka;
	document.getElementById('cartUl').appendChild(OsakaLi);
	totalP += oQty * oPrice;
	
	localStorage.setItem("Osaka", oQty);
	}else if(ticketLocation=="Osaka"){
		oQty = ticketQuantity;
		let strLiOsaka = '<li class="list-group-item d-flex justify-content-between lh-condensed" id="Osaka"><div><h6 class="my-0">Osaka</h6><small class="text-muted"><input type="number" id="osakaNumber" name="quantity" min="0" max="8" value='+oQty+'>   tour ticket(s)</small></div><span class="text-muted">$'+oPrice+'</span></li>';

		let osakaLi = document.createElement('li');
		osakaLi.innerHTML = strLiOsaka;
		document.getElementById('cartUl').appendChild(osakaLi);
		totalP += oQty * oPrice;
		localStorage.setItem("Osaka", oQty);
	}
	
	
	let totalLi = document.createElement('li');
	let strTotal = '<li class="list-group-item d-flex justify-content-between"><span id="totalPrice">Total (USD)</span><strong>$'+totalP+'</strong></li>';
	totalLi.innerHTML = strTotal;
	document.getElementById('cartUl').appendChild(totalLi);
	
	/*localStorage.setItem("Tokyo", tQty);
	localStorage.setItem("Kyoto", kQty);
	localStorage.setItem("Osaka", oQty);*/
	}else{
		let strLiEmpty = '<li class="list-group-item d-flex justify-content-between lh-condensed"><div><h6 class="my-0">Your cart is currently empty.</h6><small class="text-muted">Before proceeding to checkout you must add atleast one tour to your shopping cart.</small></div></li>';

	let emptyLi = document.createElement('li');
	emptyLi.innerHTML = strLiEmpty;
	document.getElementById('cartUl').appendChild(emptyLi);
	}
	
	
	//localStorage.setItem(ticketLocation, ticketQuantity);
	localStorage.setItem("Tokyo", tQty);
	localStorage.setItem("Kyoto", kQty);
	localStorage.setItem("Osaka", oQty);
	console.log(localStorage.getItem("Tokyo"));
	console.log(localStorage.getItem("Kyoto"));
	console.log(localStorage.getItem("Osaka"));
	console.log(tQty);
	
	

}

const input = document.querySelector('input');
const tokyoInput = document.getElementById('totalPrice');

input.addEventListener('input', setupCart);
