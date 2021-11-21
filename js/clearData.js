function clearData(){				
	if(sessionStorage.getItem("Tokyo")!=null){
		sessionStorage.removeItem("Tokyo");
	}
		
	if(sessionStorage.getItem("Kyoto")!=null){
		sessionStorage.removeItem("Kyoto");
	}
	
	if(sessionStorage.getItem("Osaka")!=null){
		sessionStorage.removeItem("Osaka");
	}
	
	if(sessionStorage.getItem("CustomerName")!=null){
		sessionStorage.removeItem("CustomerName");
	}
}