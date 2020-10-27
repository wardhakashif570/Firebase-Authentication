const { firebase } = require("react-redux-firebase");


const facebook_login=()=>{
    var provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log("user==>",user);
        window.location("home.html");
        // ...
      }).catch(function(error) {
    
        console.log(error.message);
       
      });

}


let signout=()=>{
    firebase.auth.Signout()
    .then(()=>{
   window.location=login.html;
    })
    .catch(()=>{

    })

}