// JavaScript Document
(function() {
	"use strict";
	var request, url, movieLinks, path, build, filterLinks = document.querySelectorAll(".filterNav a"), searchInput = document.querySelector("#search"), live = document.querySelector("#livesearch");
	

	function init() {
		url ="admin/includes/getMovies.php";
		build = '';
		path = "init";
		regInfo(path);
	}
	

	function reqInfo(path) {
		if(window.XMLHttpRequest) {
			request = new XMLHttpRequest();
		}else{
			request = new ActiveXObject("Microsoft.XMLHTTP");
		}
		request.open("GET", url, true);
		request.send();
		if(path==="liveSearch"){
			request.onreadystatechange = searchItems;
		}else{
			request.onreadystatechange = addItems;
		}
	}
	
	
	function addItems() {
		var con = document.querySelector(".movies");
		con.innerHTML = "";
		build = "";
		
	if((request.readyState===4) || (request.status===200)) {
		var items = JSON.parse(request.reponseText);
			//console.log(items);
			
	if(items.length!==0){
	//console.log(items.length)
		for(var i=0;i<items.length; i++){
		build = '<img src="images/'+items[i].movies_thumb+'" alt="'+items[i].movies_title +'">';
		build += '<h2>'+items[i].movies_title+'</h2>';
		build += items[i].movies_years+'<br>';
		build +=  '<a href="index.php?id='+items[i].movies_id+'">Details...</a><br><br>'; //select the movie by id in the database and generate the URL
		con.innerHTML += build;
	}
					
					
					
	}else{
		con.HTML = "Please contact your system administrator.";
}}}
	
	//Populate Search Results
	function searchItems() {
		if((request.readyState===4) || (request.status===200)){
		var searchItems = JSON.parse(request.responseText);
		for(var i=0;i<searchItems.length; i++){
		build += searchItems[i].movies_title+'<br>';
		}
		live.innerHTML = build; //sends to HTML
		build = '';
		}
	}
	

	function liveSearch() {
		live.innerHTML = '';
		var capture = searchInput.value;
		url="admin/includes/getMovies.php?search="+capture;
		path = "liveSearch";
		reqInfo(path);
	}
	
	function filterItems(evt) {
		evt.preventDefault();
		//console.log("yippie!");
		var str = evt.target.href;
		var arr = str.split("=");
		str = arr[1];
		if(str) {
			url = "admin/includes/getMovies.php?filter="+str;
		}else{
			url = "admin/includes/getMovies.php";
		}
		path = "filterItems";
		reqInfo(path);
	}
	
	// Listens for keyup to indicate that something has been entered
	for(var i=0; i<filterLinks.length; i++){
	filterLinks[i].addEventListener("click", filterItems, false);
	}
	window.addEventListener("load", init, false);
	searchInput.addEventListener("keyup", liveSearch, false);
	
})();