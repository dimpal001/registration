$(function(){
    $(".ckbx2").click(function(){
        $(".pass1").attr("type","password");
        $(".pass2").attr("type","password");
        $(".ckbx1").prop("checked",false);
    })

    $(".ckbx1").click(function(){
        $(".pass1").removeAttr("type");
        $(".pass2").removeAttr("type");
        $(".ckbx2").prop("checked",false);
    })

    $(".name").focus(function(){
        $(".name").blur(function(){
            var name = $(".name").val();
            var email = $(".email").val();
            var pass = $(".pass1").val();
            if(name !== "" && email == "" && pass == ""){
                $(".bar").css("width","25%");
            }
            else if(name !== "" && email !== "" && pass == ""){
                $(".bar").css("width","50%");
            }
            else if(name !== "" && email == "" && pass !== ""){
                $(".bar").css("width","50%");
            }
            else if(name !== "" && email !== "" && pass !== ""){
                $(".bar").css("width","75%");
            }

            else if(name == "" && email !== "" && pass == ""){
                $(".bar").css("width","25%");
            }
            else if(name !== "" && email !== "" && pass == ""){
                $(".bar").css("width","50%");
            }
            else if(name == "" && email !== "" && pass !== ""){
                $(".bar").css("width","50%");
            }
            else if(name !== "" && email !== "" && pass !== ""){
                $(".bar").css("width","75%");
            }

            else if(name == "" && email == "" && pass !== ""){
                $(".bar").css("width","25%");
            }
            else if(name == "" && email !== "" && pass !== ""){
                $(".bar").css("width","50%");
            }
            else if(name !== "" && email == "" && pass !== ""){
                $(".bar").css("width","50%");
            }
            else if(name !== "" && email !== "" && pass !== ""){
                $(".bar").css("width","75%");
            }
            else if(name == "" && email == "" && pass == ""){
                $(".bar").css("width","0%");
            }
        })
    })
    $(".email").focus(function(){
        $(".email").blur(function(){
            var name = $(".name").val();
            var email = $(".email").val();
            var pass = $(".pass1").val();
            if(name == "" && email !== "" && pass == ""){
                $(".bar").css("width","25%");
            }
            else if(name !== "" && email !== "" && pass == ""){
                $(".bar").css("width","50%");
            }
            else if(name == "" && email !== "" && pass !== ""){
                $(".bar").css("width","50%");
            }
            else if(name !== "" && email !== "" && pass !== ""){
                $(".bar").css("width","75%");
            }
            
            else if(name !== "" && email == "" && pass == ""){
                $(".bar").css("width","25%");
            }
            else if(name !== "" && email !== "" && pass == ""){
                $(".bar").css("width","50%");
            }
            else if(name !== "" && email == "" && pass !== ""){
                $(".bar").css("width","50%");
            }
            else if(name !== "" && email !== "" && pass !== ""){
                $(".bar").css("width","75%");
            }

            else if(name == "" && email == "" && pass !== ""){
                $(".bar").css("width","25%");
            }
            else if(name == "" && email !== "" && pass !== ""){
                $(".bar").css("width","50%");
            }
            else if(name !== "" && email == "" && pass !== ""){
                $(".bar").css("width","50%");
            }
            else if(name !== "" && email !== "" && pass !== ""){
                $(".bar").css("width","75%");
            }
            else if(name == "" && email == "" && pass == ""){
                $(".bar").css("width","0%");
            }
        })
    })
    $(".pass1").focus(function(){
        $(".pass2").removeAttr("disabled");
        $(".pass1").blur(function(){
            var name = $(".name").val();
            var email = $(".email").val();
            var pass = $(".pass1").val();

            if(pass == ""){
                $(".pass2").val("");
                $(".pass2").attr("disabled", true);
            }
            if(name == "" && email == "" && pass !== ""){
                $(".bar").css("width","25%");
            }
            else if(name == "" && email !== "" && pass !== ""){
                $(".bar").css("width","50%");
            }
            else if(name !== "" && email == "" && pass !== ""){
                $(".bar").css("width","50%");
            }
            else if(name !== "" && email !== "" && pass !== ""){
                $(".bar").css("width","75%");
            }

            else if(name !== "" && email == "" && pass == ""){
                $(".bar").css("width","25%");
            }
            else if(name !== "" && email !== "" && pass == ""){
                $(".bar").css("width","50%");
            }
            else if(name !== "" && email == "" && pass !== ""){
                $(".bar").css("width","50%");
            }
            else if(name !== "" && email !== "" && pass !== ""){
                $(".bar").css("width","75%");
            }

            else if(name == "" && email !== "" && pass == ""){
                $(".bar").css("width","25%");
            }
            else if(name !== "" && email !== "" && pass == ""){
                $(".bar").css("width","50%");
            }
            else if(name == "" && email !== "" && pass !== ""){
                $(".bar").css("width","50%");
            }
            else if(name !== "" && email !== "" && pass !== ""){
                $(".bar").css("width","75%");
            }
            else if(name == "" && email == "" && pass == ""){
                $(".bar").css("width","0%");
            }
        })
    })
    $(".pass2").focus(function(){
        $(".pass2").blur(function(){
            var pass1 = $(".pass1").val();
            var pass2 = $(".pass2").val();
            var email = $(".pass2").val();
            var name = $(".name").val();
            if(pass1 === pass2 && email !=="" && name !== ""){
                $(".pass-error").addClass("d-none");
                $(".bar").css("width","100%");
                $("#rgstr").removeClass("disabled");
            }
            else if(pass1 !== pass2){
                $(".pass-error").removeClass("d-none");
                $("#rgstr").addClass("disabled");
            }
            else{
                $("#rgstr").addClass("disabled");
            }
        })
    })
    $("#rgstr").click(function(){
        $("#body").fadeOut(slow);
    })
})