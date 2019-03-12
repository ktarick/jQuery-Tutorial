var url = "http://localhost:61260/api/";

$().ready(function(){
    console.log("Ready...");

    $.getJSON(`${url}users/1`)
        .done(function(resp){
            console.log(resp)
            user = resp;
            display();
        })
});

function display(){
    $("#id").text(user.id);
    $("#username").text(user.username);
    $("#firstname").text(user.firstname);
    $("#lastname").text(user.lastname);
    $("#email").text(user.email);
    $("#phone").text(user.phone);
    $("#isReviewer").text(user.isReviewer);
    $("#isAdmin").text(user.isAdmin);
    $("#active").text(user.active);
}
