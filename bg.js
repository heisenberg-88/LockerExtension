
//This will start only after install dialogue
chrome.runtime.onInstalled.addListener(function(details){
	
    if(details.reason == "install"){
		
       
	   //first time password set
	   var passw = prompt("Please set your password ", "");
	   
	   
	   if(passw==""){
		   alert('Password not saved... Please enter some valid password. Closing the Browser..');
		   closeWindow();
		   
	    }else{
			localStorage.setItem("newPass", passw);
			alert('Password saved... Closing the Browser');
			closeWindow();
		}
	   
	   
	}
});

 




//this runs on every startup
chrome.runtime.onStartup.addListener(function(){
		
		window.open("about:blank");
		
		var unlock = prompt("Please enter Password: ", "");
		
		var newPass=localStorage.getItem("newPass");
		
		

	if(newPass == null){

		var passw = prompt("Please set your password for first time", "");
		
		localStorage.setItem("newPass", passw);
		alert('Password saved... Closing the Browser');
		closeWindow();

		
	}else {
			
		
		if (unlock == newPass) {
			
				chrome.tabs.getAllInWindow(function(c){
				
				for(var d=0;d<c.length;d++){if(c[d].url=="about:blank"){
					chrome.tabs.remove(c[d].id);
					break;}}});

		
		}else{
			closeWindow();
			
		}
		
	}


}); 	








//function to close all windows
function closeWindow(){
		
	chrome.windows.getAll({}, function(window) {
	for(var i=0;i<window.length;i++){
	chrome.windows.remove(window[i].id);}
	});

}
 


