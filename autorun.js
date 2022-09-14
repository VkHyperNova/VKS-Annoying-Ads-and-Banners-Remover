
document.addEventListener("DOMContentLoaded", RemoveShit, false);
			
function RemoveShit(event){

	var NamesToRemoveArray = [];

	var url = window.location.href;
	 if (url.includes('elu24')){
		NamesToRemoveArray = ["BigBanner", "Reporter Background", "ScrollHeader", "Header", "BannerBranding"];  	
	} else if (url.includes('postimees')){
		NamesToRemoveArray = ["Blue Header", "Postimees Cookies", "Postimees second branding", "Postimees branding", "Nav", "Blue Header", "BigBanner", "Reporter Background"];
	} 

	
	


	var Remover = function(ClassName, Name, SearchByClass, Click, Time){

		var Timer = setInterval(Run, Time || 10);
		var ClassName = ClassName;
		var Name = Name;
		var SearchByClass = SearchByClass;
		var Click = Click;
		
		
//class="ytp-ad-persistent-progress-bar-container" div


	


		var SearchByClassFunction = function(){
			var Element = document.getElementsByClassName(ClassName);
			if (Element.length > 0) {
				ClickOrBlock(Element[0]);					
			} 
		}

		var SearchByIdFunction = function(){
			var Element = document.getElementById(ClassName);
			if(Element){
				ClickOrBlock(Element);			
			} 
		}


		var ClickOrBlock = function(Element){
			if(Click){
				Element.click();
			} else {
				Element.style.display = "none";		
			}
			

			clearInterval(Timer);	
			removeElement(NamesToRemoveArray, Name);
			
		}



		var removeElement = function (array, elem) {
		    var index = array.indexOf(elem);
		   
		    if (index > -1) {
		        array.splice(index, 1);
		    }
		    console.log(Name, "Removed!", NamesToRemoveArray);
		    
		    

		}



		var Find = function(ClassName, Name, SearchByClass){
			if(SearchByClass){
				SearchByClassFunction(); 
			} else {
				SearchByIdFunction();
			}

		}



		function Run(){	
			
			Find(ClassName, Name, SearchByClass);
			console.log("running");

		
			 
		}



		 

		setTimeout(function(){
				
			clearInterval(Timer);
			console.log("stopped by time", NamesToRemoveArray);
		}, 3000);


		
	}


	var Classes = [{
		"ClassName": "adblock-notif",
		"Name": "BigBanner",
		"SearchByClass": true,
		"Click": false
	},
	{
		"ClassName": "site-header layout--1030",
		"Name": "ScrollHeader",
		"SearchByClass": true,
		"Click": false
	},
	{
		"ClassName": "site-header",
		"Name": "Header",
		"SearchByClass": true,
		"Click": false
	},
	{
		"ClassName": "site-header site-header--darkblue",
		"Name": "Blue Header",
		"SearchByClass": true,
		"Click": false
	},
	{
		"ClassName": "layout menu-items menu-items--main hidden-sections-container slab js-sticky-menu",
		"Name": "Nav",
		"SearchByClass": true,
		"Click": false
	},
	{
		"ClassName": "section-branding-container",
		"Name": "BannerBranding",
		"SearchByClass": true,
		"Click": false
	},
	{
		"ClassName": "digipakett-branding-root-container digipakett-branding-container--thin",
		"Name": "Postimees branding",
		"SearchByClass": true,
		"Click": false
	},
	{
		"ClassName": "digipakett-branding-nv-digi-nv-digi-root-container digipakett-branding-nv-digi-container--thin",
		"Name": "Postimees second branding",
		"SearchByClass": true,
		"Click": false
	},
	{
		"ClassName": "notifications-container no-lead-media",
		"Name": "Postimees Cookies",
		"SearchByClass": true,
		"Click": false
	},
	{
		"ClassName": "close-btn",
		"Name": "Reporter Background",
		"SearchByClass": false,
		"Click": true
	}	
	];

	Classes.forEach(myFunction);

	function myFunction(item, index) {

		if(NamesToRemoveArray.includes(item.Name) === true){
			Remover(item.ClassName, item.Name, item.SearchByClass, item.Click, item.Time);

		} 
	  
	}

}









