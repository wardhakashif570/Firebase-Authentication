let signup = () => {
    let email=document.getElementById("email");
    let password=document.getElementById("password");

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)

    .then((result)=>{
console.log(result);
    })
    .catch(function(error) {
        
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        // ...
      })
}

let login = () => {
    let email_login=document.getElementById("email-login");
    let password_login=document.getElementById("password-login");

    firebase.auth().signInWithEmailAndPassword(email_login.value, password_login.value)
    
    .then((result)=>{
        console.log(result);
        console.log("Wse login Successfully");
            })
    
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        // ...
      });email-password.html
}