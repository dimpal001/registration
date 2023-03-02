$(function(){
    $(".ckbx2").click(function(){
        $(".pass1").attr("type","password");
        $(".ckbx1").prop("checked",false);
    })

    $(".ckbx1").click(function(){
        $(".pass1").removeAttr("type");
        $(".ckbx2").prop("checked",false);
    })


    $(".name").blur(function(){
        if($(".name").val() === "dimpal@gmail.com" && $(".pass1").val() === "1234"){
            $("#login").removeClass("disabled");
        }
        else{
            $("#login").addClass("disabled");   
        }
    })
    $(".pass1").blur(function(){
        if($(".name").val() === "dimpal@gmail.com" && $(".pass1").val() === "1234"){
            $("#login").removeClass("disabled");
            $("#inc-crd").addClass("d-none");
        }
        else{
            $("#inc-crd").removeClass("d-none");
            $("#login").addClass("disabled");   
        }
    })
})