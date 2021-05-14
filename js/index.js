var firebaseConfig = {
    apiKey: "AIzaSyAFpJmkho3EqPX_jR_kEsrL7laSRhrHZtE",
    authDomain: "zpeed-e4ecc.firebaseapp.com",
    projectId: "zpeed-e4ecc",
    storageBucket: "zpeed-e4ecc.appspot.com",
    messagingSenderId: "402148021695",
    appId: "1:402148021695:web:a9466be27b8b210f3e7d0a",
    measurementId: "G-R18B23RZ20"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.auth.Auth.Persistence.LOCAL;

//Login
$("#btn-login").click(function()
{
    var email = $("#email").val();
    var password = $("#password").val();

    if(email != "" && password != "" )
    {
        var result=firebase.auth().signInWithEmailAndPassword(email,password);

        result.catch(function(error)
        {

            var errorCode=error.code;
            var errorMessage=error.message;

            console.log(errorCode);
            console.log(errorMessage);

            window.alert("Message : " + errorMessage);
        });
    }
    else{
        window.alert("Form is incomplete. Please fill out all fields.");
    }
});
//Registo
$("#btn-signup").click(function()
{
    var email = $("#email").val();
    var password = $("#password").val();
    var cPassword = $("#confirmPassword").val();

    if(email != "" && password != "" && cPassword != "")
    {
        if(password == cPassword)
        {
            var result=firebase.auth().createUserWithEmailAndPassword(email,password);

        result.catch(function(error)
        {

            var errorCode=error.code;
            var errorMessage=error.message;

            console.log(errorCode);
            console.log(errorMessage);

            window.alert("Message : " + errorMessage);
        });
        }
        else
        {
            window.alert("Password do not match with the Confirm Password.");
        }
    }
    else{
        window.alert("Form is incomplete. Please fill out all fields.");
    }
});
//Esqueceu-se da password?
$("#btn-resetPassword").click(function()
{
    var auth = firebase.auth();
    var email = $("#email").val();

    if(email != "" )
    {
        auth.sendPasswordResetEmail(email).then(function()
        {
            window.alert("An email has been sent to you");
        })

        .catch(function(error)
        {

            var errorCode=error.code;
            var errorMessage=error.message;

            console.log(errorCode);
            console.log(errorMessage);

            window.alert("Message : " + errorMessage);
        });
    }
    else{
        window.alert("You did not insert a valid email.");
    }
});
//Alterar o Email
$("#btn-changeEmailAddress").click(function()
{
    var user = firebase.auth().currentUser;
    var email = $("#email").val();


    if(email != "" )//and email_antigo != email_novo
    {
        user.updateEmail(email).then(function()
        {
            window.alert("Your email address was successfully changed");
            window.alert("An email was sent to your original email address so you can review the change");
        })

        .catch(function(error)
        {

            var errorCode=error.code;
            var errorMessage=error.message;

            console.log(errorCode);
            console.log(errorMessage);

            window.alert("Message : " + errorMessage);
        });
    }
    else{
        window.alert("Your previous email cannot be your new email.");

});
//Alterar a Password(Falta meter que a passe nova nao pode ser igual a passe antiga)
$("#btn-changePassword").click(function()
{
    var auth = firebase.auth();
    var email = $("#email").val();

    if(email != "" )//and email_novo != email_antigo
    {
        auth.sendPasswordResetEmail(email).then(function()
        {
            window.alert("An email has been sent to you go check it to change your password");
        })

        .catch(function(error)
        {

            var errorCode=error.code;
            var errorMessage=error.message;

            console.log(errorCode);
            console.log(errorMessage);

            window.alert("Message : " + errorMessage);
        });
    }
    // if(email_novo==email_antigo){
        //window.alert("Old password cannot be the new password");}
    else{
        window.alert("You did not insert a valid email.");
    }
});
//Logout
$("#btn-logout").click(function()
{
   firebase.auth().signOut();
});
