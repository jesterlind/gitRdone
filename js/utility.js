// JavaScript Document

(function(){
  "use strict";

  var request, url, movieLinks, path, build, filterLinks = document.querySelectorAll(".filterNav a");
  var searchInput = document.querySelector("#search"),
      live = document.querySelector("#results");

       function init(){
		   
       	url = "admin/includes/getMovies_start.php";
       	build=''; //accept text from input
        path= "init";
        reqInfo(path);
       }
          
	 function reqInfo(path){
		 
          if(window.XMLHttpRequest){ 
             request = new XMLHttpRequest();
			 
          }else{
              
              request = new ActiveXObjective("Microsoft.XMLHTTP");
          }

          request.open("GET",url,true);
          request.send();

          if(path==="liveSearch"){
               request.onreadystatechange = searchItems;
			   
          }else{
          
                request.onreadystatechange = showAll;
          }
       }
	   

     function searchItems(){
		   
       	   if((request.readyState===4) || (request.status===200)){   
       	   	var searchItems = JSON.parse(request.responseText);
       	   	//console.log(searchItems);

       	   if(searchItems == ']'){
       	   		build = "No Results Found";
       	   	}

       	   for(var i=0;i<searchItems.length;i++){
					build += '<div class="row">';
					build += '<div class="large-6 medium-3 line columns">'+'<a href="details.php?id='+searchItems[i].movies_id+'">'+'<img src = "images/' +searchItems[i].movies_thumb+'"class="moviethumb"'+ '"alt="' +searchItems[i].movies_title+'">'+'</a>'+'</div>'+'<br>';
					build += '<div class="large-4 medium-4 line columns">'+'<a href="details.php?id='+searchItems[i].movies_id+'">'+searchItems[i].movies_title+'</a>'+'</div>'+'<br>';
       	   	  		build +='</div>';
					
				}
				
       	   	  	live.innerHTML = build;
                build='';
       	   }
       }


  function showAll() {
	var con = document.querySelector(".movies"), details = document.querySelector(".details");

	if((request.readyState===4) || (request.status===200)) {
		var items = JSON.parse(request.responseText);
		//console.log(items);

	if(items.length!==0) {
	if(items.length > 1) {
		con.innerHTML = "";
		build = "";

	for (var i=0;i<items.length; i++) {
		build = '<li><img src="images/'+items[i].movies_thumb+'" alt="'+items[i].movies_title +'">';
		build += '<h2>'+items[i].movies_title+'</h2>';
		build += '<a href="index.php?id='+items[i].movies_id+'">more...</a></li><br><br>';
		con.innerHTML += build;
	}

		movieLinks = document.querySelectorAll(".movies a");
	for(var j=0; j<movieLinks.length; j++){
		movieLinks[j].addEventListener("click", itemDetails, false);
	}

	}else{
		var dBuild;
		items.innerHTML="";
		dBuild = '<h2>'+items[0].movies_title+'</h2>',
		dBuild += '<p>'+items[0].movies_storyline+'</p>';
		details.innerHTML = dBuild;
	}
			
	}else{
	con.innerHTML = "Please contact your system administrator.";
	}
		}
			}
	   
	   
function liveSearch(){
		 
    live.innerHTML='';
    var capture = searchInput.value;
	if (capture !==''){ 
    url = "admin/includes/getMovies_start.php?search="+capture;
    path = "liveSearch";
    reqInfo(path);
		  }else{
			  
		}
		  
       }
	   
	   function filterItems(evt) {
		evt.preventDefault();
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

	function itemDetails(e) {
		e.preventDefault();
		var str = e.target.href;
		//console.log(str);
		var arr = str.split("=");
		url = "admin/includes/getMovies.php?id="+arr[1];
		//console.log(url);
		path = "itemDetails";
		reqInfo(path);
	}
	   
//Listeners
	for(var i=0; i<filterLinks.length; i++){
		filterLinks[i].addEventListener("click", filterItems, false);
	} 
window.addEventListener("load", init, false);
searchInput.addEventListener("keyup", liveSearch,false);
})();