

var googleUser={};
  var startApp = function() {
    console.log("starting startapp");
   gapi.load('auth2', function(){
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      auth2 = gapi.auth2.init({
        client_id: '743131590159-c0dmn25t8v7619d2u1ib34rd02556mg4.apps.googleusercontent.com',
        cookiepolicy:'single_host_origin',
        // Request scopes in addition to 'profile' and 'email'
        //scope: 'additional_scope'
      
      });
     attachSignin(document.getElementById('googleIcon'));
    });
  };

 function attachSignin(element) {
    console.log(element.id);
    auth2.attachClickHandler(element, {},
        function(googleUser) {
          //console.log("something clicked",auth2);
          document.getElementById('name').innerText = "Signed in: " +
              googleUser.getBasicProfile().getName();
        }, function(error) {
          console.log("ooops error");
          alert(JSON.stringify(error, undefined, 2));
        });
  }