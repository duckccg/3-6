/**
 * Created by Administrator on 15-12-10.
 */
setTimeout(function(){
    console.log(1);
    document.getElementById("img1").onmouseover=function(e){
        console.log(1);
        $("#div2").css("display","block");
        $("#div3").css("display","block");
        move(e)
    };
    document.getElementById("div2").onmousemove=function(e){
        move(e);
        document.getElementById("div2").onmouseout=function(){
            $("#div2").css("display","none");
            $("#div3").css("display","none");
        }
    };

},500);




function move(e){
    //console.log(e.clientX-document.getElementById("img1").getBoundingClientRect().left);
    //console.log(e.clientY-document.getElementById("img1").getBoundingClientRect().top);
    var livex = e.clientX-document.getElementById("img1").getBoundingClientRect().left;
    var livey = e.clientY-document.getElementById("img1").getBoundingClientRect().top;
    if(livex<68){
        $("#div2").css("left",0);
        $("#img2").css("left",0)
    }else if(livex>272){
        $("#div2").css("left",204);
        $("#img2").css("left",340-850)
    }else{
        $("#div2").css("left",livex-68);
        $("#img2").css("left",5*(68-livex)/2);

    }
    if(livey<68){
        $("#div2").css("top",0);
        $("#img2").css("top",0)
    }else if(livey>272){
        $("#div2").css("top",204);
        $("#img2").css("top",340-850)
    }else{
        $("#div2").css("top",livey-68);
        $("#img2").css("top",5*(68-livey)/2);

    }
}