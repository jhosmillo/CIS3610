window.onload = function(){
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const ticketQuantity = urlParams.get('ticket-quantity');
	const ticketLocation = urlParams.get('location');
	console.log(ticketQuantity);
	console.log(ticketLocation);
	
	let price = 0;
	let totalP = 0;

	
	switch(ticketLocation) {
  case "Tokyo":
    price = 110;
    break;
  case "Kyoto":
    price = 98;
    break;
  case "Osaka":
    price = 101;
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
	
	
	
	
	
	

}