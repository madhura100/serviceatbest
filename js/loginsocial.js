function statusChangeCallback(response) {
    					console.log('statusChangeCallback');
    					console.log(response);
    					if (response.status === 'connected') {
   					   // Logged into your app and Facebook.
      						testAPI();
   						} else if (response.status === 'not_authorized') {
      					// The person is logged into Facebook, but not your app.
      						document.getElementById('status').innerHTML = 'Please log ' +
       							 'into this app.';
    					} else {
							document.getElementById('status').innerHTML = 'Please log ' +
        					'into Facebook.';
   						 }
  				}
 				 function checkLoginState() {
    					FB.getLoginStatus(function(response) {
     					statusChangeCallback(response);
   				});
 				}
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
			function fb_login(){
    FB.login(function(response) {

        if (response.authResponse) {
            console.log('Welcome!  Fetching your information.... ');
            //console.log(response); // dump complete info
            access_token = response.authResponse.accessToken; //get access token
            user_id = response.authResponse.userID; //get FB UID

            FB.api('/me', function(response) {
                user_email = response.email; //get user email
          // you can store this data into your database             
            });

        } else {
            //user hit cancel button
            console.log('User cancelled login or did not fully authorize.');

        }
    }, {
        scope: 'user_location,email,user_likes,user_birthday'
    });
}
				(function(d, s, id) {
				var js, fjs = d.getElementsByTagName(s)[0];
				if (d.getElementById(id)) return;
				js = d.createElement(s); js.id = id;
				js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6&appId=1737089926536784";
				fjs.parentNode.insertBefore(js, fjs);
				}(document, 'script', 'facebook-jssdk'));
				
				function testAPI() {
					console.log('Welcome!  Fetching your information.... ');
					FB.api('/me', function(response) {
					console.log('Successful login for: ' + response.name);
					document.getElementById('status').innerHTML =
						'Thanks for logging in, ' + response.name + '!';
					});
				}