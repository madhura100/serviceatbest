//DoM change for login
var userLoggedIn="false";

function toggleDomLogin(loginstatus){
	if(loginstatus="true")
	{

		var table = document.getElementById("new-user");
		//console.log(table);
		table.parentNode.removeChild(table);
		var logindiv=document.getElementsByClassName("top-header-right")[0];
		var nodediv=document.createElement("div");
		nodediv.setAttribute("class","logged-in-user");
		logindivchild=logindiv.appendChild(nodediv);
		//document.getElementById('test').innerHTML +=
		var node1=document.createElement("ul");
		var node2=document.createElement("li");
		var node3=document.create
		var node4=logindivchild.appendChild(node1);
		var node5=node4.appendChild(node2);
		var node6=document.createElement("ul");
		var node7=node5.appendChild(node6);
		var node8=document.createElement("li");
		var t1=document.createTextNode("madhura.reddy@gmail.com");
		node8.appendChild(t1);
		var node9=document.createElement("li");
		var t2=document.createTextNode("Logout");
		node9.appendChild(t2);
		node7.appendChild(node8);
		node7.appendChild(node9);
	
		
		
}	
	
	 
}

//Load Facebook SDK
(function(d, s, id) {
					var js, fjs = d.getElementsByTagName(s)[0];
					if (d.getElementById(id)) return;
					js = d.createElement(s); js.id = id;
					js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6&appId=1737089926536784";
					fjs.parentNode.insertBefore(js, fjs);
					}(document, 'script', 'facebook-jssdk'));


//Check Facebook Login
function statusChangeCallback(response) {
    					console.log('statusChangeCallback');
    					console.log(response);
    					if (response.status === 'connected') {
   					   // Logged into your app and Facebook.
						  //Write code to talk to server and check for userid using email id 
      						setUserCookie('madhura100','madhura');
							  console.log("Logged in user");
							  toggleDomLogin(true);
   						} else if (response.status === 'not_authorized') {
      					// The person is logged into Facebook, but not your app.
      						document.getElementById('status').innerHTML = 'Please log ' +	
       							 'into this app.';
									document.getElementById("new-user").className="";
    					} else {
							
							document.getElementById("new-user").className="";
   						 }
  				}
				  
//Check if cookie exists
function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    return unescape(dc.substring(begin + prefix.length, end));
} 

(function(d, s, id) {
					var js, fjs = d.getElementsByTagName(s)[0];
					if (d.getElementById(id)) return;
					js = d.createElement(s); js.id = id;
					js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6&appId=1737089926536784";
					fjs.parentNode.insertBefore(js, fjs);
					}(document, 'script', 'facebook-jssdk'));
					window.fbAsyncInit = function() {
  					FB.init({
							appId      : '1737089926536784',
							cookie     : true,  // enable cookies to allow the server to access 
												// the session
							channelURL : 'localhost:8080',
							xfbml      : true,  // parse social plugins on this page
							version    : 'v2.5' // use graph api version 2.5
							});
							FB.getLoginStatus(function(response) {
								statusChangeCallback(response);
							});

				};
				 
function checkCookie() {
    var userIdCookie = getCookie("UserID");
console.log("running checkcookie");
    if (userIdCookie != null) {
		console.log("change the dom to loggedin user");
		toggleDomLogin('true');
	}
	else{
        // do cookie doesn't exist stuff;
		//check facebook connection
	
		try{
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
		}
		catch(err){
			console.log(err);
		}
	}
}



checkCookie();


//Set cookie
         function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
//Set User Cookie
function setUserCookie(userid, username)
{		
    setCookie('UserID',userid,365);
    setCookie('UserName',username,365);
}



				
//Google login check

function googleLoginCheck(){
	
	 gapi.load('auth2', function(){
      // Retrieve the singleton for the GoogleAuth library and set up the client.
     auth2= gapi.auth2.init({
        client_id: '743131590159-c0dmn25t8v7619d2u1ib34rd02556mg4.apps.googleusercontent.com',
				fetch_basic_profile: true
       
        // Request scopes in addition to 'profile' and 'email'
        //scope: 'additional_scope'
      });
	   console.log(auth2);
	   //var auth3=gapi.auth2.GoogleAuth();
	   console.log(auth2.isSignedIn.get());
	   if (auth2.isSignedIn.get()) {
		var profile = auth2.currentUser.get().getBasicProfile();
		console.log('ID: ' + profile.getId());
		console.log('Full Name: ' + profile.getName());
		console.log('Given Name: ' + profile.getGivenName());
		console.log('Family Name: ' + profile.getFamilyName());
		console.log('Image URL: ' + profile.getImageUrl());
		console.log('Email: ' + profile.getEmail());
		}
	
	
	/*if (auth3.isSignedIn.get()) {
		var profile = auth2.currentUser.get().getBasicProfile();
		console.log('ID: ' + profile.getId());
		console.log('Full Name: ' + profile.getName());
		console.log('Given Name: ' + profile.getGivenName());
		console.log('Family Name: ' + profile.getFamilyName());
		console.log('Image URL: ' + profile.getImageUrl());
		console.log('Email: ' + profile.getEmail());
		}
*/
});
}

googleLoginCheck();







	  




                   
                   
 		

