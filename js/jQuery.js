$().ready(function() {

    console.log("Everything is OK!");

    $("p").css("color","blue").css("font-size","1.5em");

    $("button").click(function(){
        $("p").css("color", "red").css("font-size","2.5em");
        $("input").val("Danger Zone!");
    });

    $("label").text("You have entered the: ")
    
});