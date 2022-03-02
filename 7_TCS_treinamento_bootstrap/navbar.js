$("#menuNav").on("show.bs.collapse", function (){
    $(".topCasaFinaBanner").css("transform", "translate(-50%, 10%)");
});

$("#menuNav").on("hide.bs.collapse	", function (){
    $(".topCasaFinaBanner").css("transform", "translate(-50%, -50%)")
});
