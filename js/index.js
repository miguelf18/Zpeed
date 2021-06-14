var firebaseConfig = {
    apiKey: "AIzaSyAFpJmkho3EqPX_jR_kEsrL7laSRhrHZtE",
    authDomain: "zpeed-e4ecc.firebaseapp.com",
    databaseURL: "https://zpeed-e4ecc-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "zpeed-e4ecc",
    storageBucket: "zpeed-e4ecc.appspot.com",
    messagingSenderId: "402148021695",
    appId: "1:402148021695:web:a9466be27b8b210f3e7d0a",
    measurementId: "G-R18B23RZ20"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
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

//Logout
$("#btn-logout").click(function()
{
   firebase.auth().signOut();
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
            window.alert("An email has been sent to you to recover your password");
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
        window.alert("Please insert your email.");
    }
});
//Account Settings
$("#btn-accountSettings").click(function()
{
    var firstName = $("#firstName").val();
    var lastName= $("#lastName").val();
    var gender = $("#gender").val();
    var type = $("#type").val();
    var weight = $("#weight").val();
    var height= $("#height").val();

    var rootRef = firebase.database().ref().child("Users");
    var userID = firebase.auth().currentUser.uid;
    var usersRef = rootRef.child(userID);

    if(firstName != "" && lastName != "" && gender != "" && type != "" && weight != "" && height != "")
    {
        var userData =
        {
            "First Name": firstName,
            "Last Name": lastName,
            "Gender": gender,
            "Type of User": type,
            "Weight": weight,
            "Height": height,
        };
        usersRef.set(userData, function(error)
        {
            if(error)
            {

                var errorCode=error.code;
                var errorMessage=error.message;
    
                console.log(errorCode);
                console.log(errorMessage);
    
                window.alert("Message : " + errorMessage);

            }
            else
            {
                window.location.href = "MainPage.html";
            }
        });

    }
    else
    {
        window.alert("Form is incomplete. Please fill out all fields.");
    }
   
});

//Edit Profile
$("#btn-editProfile").click(function()
{
    var firstName = $("#firstName").val();
    var lastName= $("#lastName").val();
    var gender = $("#gender").val();
    var type = $("#type").val();
    var weight = $("#weight").val();
    var height= $("#height").val();

    var rootRef = firebase.database().ref().child("Users");
    var userID = firebase.auth().currentUser.uid;
    var usersRef = rootRef.child(userID);

    if(firstName != "" && lastName != "" && gender != "" && type != "" && weight != "" && height != "")
    {
        var userData =
        {
            "First Name": firstName,
            "Last Name": lastName,
            "Gender": gender,
            "Type of User": type,
            "Weight": weight,
            "Height": height,
        };
        usersRef.set(userData, function(error)
        {
            if(error)
            {

                var errorCode=error.code;
                var errorMessage=error.message;
    
                console.log(errorCode);
                console.log(errorMessage);
    
                window.alert("Message : " + errorMessage);

            }
            else
            {
                window.alert("Your profile has been updated.");
                window.location.href = "MainPage.html";
            }
        });

    }
    else
    {
        window.alert("Form is incomplete. Please fill out all fields.");
    }
   
});

//Alterar a Password
$("#btn-changePassword").click(function()
{
    var auth = firebase.auth();
    var email = $("#email").val();

    if(email != "" )
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
    else{
        window.alert("You did not insert a valid email.");
    }
});

//Change Email
$("#btn-changeEmail").click(function()
{
    var user = firebase.auth().currentUser;
    var email = $("#email").val();


    if(email != "" )
    {
        user.updateEmail(email).then(function()
        {
            window.alert("Your email address was successfully changed.\n An email was sent to your original email address so you can review the change");
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
        window.alert("Please insert an email.");
    }
});
