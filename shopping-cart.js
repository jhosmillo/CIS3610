window.onload = function(){
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const ticketQuantity = urlParams.get('ticket-quantity');
	const ticketLocation = urlParams.get('location');
	
	if(ticketLocation != null){
	
	let price = 0;
	let totalP = 0;

	
	switch(ticketLocation) {
  case "Tokyo":
    price = 1100;
    break;
  case "Kyoto":
    price = 980;
    break;
  case "Osaka":
    price = 1010;
    break;
  default:
    price = 0;
}

	totalP = price *ticketQuantity;

	let strLi = '<li class="list-group-item d-flex justify-content-between lh-condensed" id="'+ticketLocation+'"><div><h6 class="my-0">'+ticketLocation+'</h6><small class="text-muted">'+ticketQuantity+'x tour ticket(s)</small></div><span class="text-muted">$'+price+'</span></li>';

	let itemLi = document.createElement('li');
	itemLi.innerHTML = strLi;
	document.getElementById('cartUl').appendChild(itemLi);
	
	
	let totalLi = document.createElement('li');
	let strTotal = '<li class="list-group-item d-flex justify-content-between"><span>Total (USD)</span><strong>$'+totalP+'</strong></li>';
	totalLi.innerHTML = strTotal;
	document.getElementById('cartUl').appendChild(totalLi);
	
	
	}else{
		let strLiEmpty = '<li class="list-group-item d-flex justify-content-between lh-condensed"><div><h6 class="my-0">Your cart is currently empty.</h6><small class="text-muted">Before proceeding to checkout you must add atleast one tour to your shopping cart.</small></div></li>';

	let emptyLi = document.createElement('li');
	emptyLi.innerHTML = strLiEmpty;
	document.getElementById('cartUl').appendChild(emptyLi);
	}
	
	
	

}