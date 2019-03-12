var url = "http://localhost:61260/api/";

$().ready(function(){
    console.log("Ready...");

    $.getJSON(url + "users")
        .done(function(resp){
            console.log(resp)
            buildTable(resp);
        })
});

function buildTable(users){
    $("tbody").html("");
    for(var user of users){
        var tr = "<tr>"
        tr += "<td>" + user.id + "</td>";
        tr += "<td>" + user.username + "</td>";
        tr += "<td>" + user.password + "</td>";
        tr += "<td>" + user.firstname + " " + user.lastname + "</td>";
        tr += "<td>" + user.email + "</td>";
        tr += "<td>" + user.phone + "</td>";
        tr += "<td>" + (user.isAdmin ? "Admin" : "") + " " +  (user.isReviewer ? "Rev" : "") + "</td>";
        tr += `<td><a href="">Detail</a> | <a href="">Edit</a>`;
        tr += "</tr>";
        $("tbody").append(tr);
    }
}