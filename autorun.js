
document.addEventListener("DOMContentLoaded", RemoveShit, false);
			
function RemoveShit(event){

	var NamesToRemoveArray = [];

	var url = window.location.href;
	 if (url.includes('elu24')){
		NamesToRemoveArray = ["BigBanner", "Reporter Background", "ScrollHeader", "Header", "BannerBranding", "reporterAdBanner"];  	
	} else if (url.includes('postimees')){
		NamesToRemoveArray = ["Blue Header", "Postimees Cookies", "Postimees second branding", "Postimees branding", "Nav", "Blue Header", "BigBanner", "Reporter Background", "reporterAdBanner"];
	} else if (url.includes('reporter')){
		NamesToRemoveArray = ["reporterAdBanner"];
	} else if (url.includes('delfi')){
		DelfiBannerAutoClicker(event);
		NamesToRemoveArray = ["delfi reklaam content", "delfi reklaam mobile", "delfi paywall"];
	}

	
	


	var Remover = function(ClassName, Name, SearchByClass, Click, Time){

		var Timer = setInterval(Run, Time || 10);
		var ClassName = ClassName;
		var Name = Name;
		var SearchByClass = SearchByClass;
		var Click = Click;
		
		



	


		var SearchByClassFunction = function(){
			var Element = document.getElementsByClassName(ClassName);

			// Remove all elements with same name
			for (var i = 0; i < Element.length; i++) {
				ClickOrBlock(Element[i]);	
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
		"ClassName": "article-paywall",
		"Name": "delfi paywall", 
		"SearchByClass": true,
		"Click": false
	},
	{
		"ClassName": "C-banner U-text-center C-banner--content",
		"Name": "delfi reklaam content", 
		"SearchByClass": true,
		"Click": false
	},
	{
		"ClassName": "C-banner U-text-center C-banner--mobile",
		"Name": "delfi reklaam mobile", 
		"SearchByClass": true,
		"Click": false
	},
	{
		"ClassName": "ad-block-piano",
		"Name": "reporterAdBanner",
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

function DelfiBannerAutoClicker(event){

	
	var timer = setInterval(ClickBtn, 100);

	var DFirst = document.getElementById("notification-close");
	var DSecond = document.getElementsByClassName('C-ad-block-layer-content__heading-decoration--close C-button');
	//var CookieRibbon = document.getElementById("cookie_ribbon");

	function ClickBtn(){ 

    	if(DSecond.length > 0){
    		DSecond[0].click();
			console.log("Delfi Second Buy Notification removed!");
    	}

    	if(DFirst){
    		DFirst.click();
    		console.log("Delfi Buy Notification removed!");
    	}

    	/*if(CookieRibbon.style.display !== "none"){
    		CookieRibbon.style.display = "none";
    		console.log("Cookie Ribbon removed!");
    		
    	}*/

    	
  	
	}


}






