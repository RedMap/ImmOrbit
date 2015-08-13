
$(document).ready(function(){

    var Person = {
    username: "markler",
    password: "password"
    };
    var members = "http://localhost/immorbit/ImmOrbit/markler&password.html";
    
        $("#submit").click(function(){

            var username = $("#username").val();
            var password = $("#password").val();
             

            if(username == Person.username && password == Person.password){
                   window.open(members);
            }else{
                alert("ERROR: Benutzername und/ oder Passwort sind falsch!");
            }
        });
});