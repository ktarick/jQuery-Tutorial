var url = "http://localhost:61260/api/";

var user = {
    id: 0,
    username: "test",
    password: "test",
    firstname: "first",
    lastname: "last",
    email: "test@test.com",
    phone: "test",
    isReviewer : true,
    isAdmin: true,
    active: true
};

$().ready(function(){
    console.log("Ready...");

    $.ajax({
        method: "POST",
        url: url + "users",
        data: JSON.stringify(user),
        content: "json",
        contentType: "application/json"
    })
        .done(function(resp){
            console.log(resp);
            getAllUsers();
        });
});

function getAllUsers(){
    $.getJSON(url + "users")
        .done(function(resp){
            console.log(resp);
        });
}