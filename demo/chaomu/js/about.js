document.getElementById("middle").style.minHeight = (window.screen.availHeight - window.screenTop - document.body.clientHeight * 0.04 - 332) +"px";
function chose_target(o){
    document.getElementById("target_0").src="../images/about_target.jpg";
    document.getElementById("target_1").src="../images/story_target.jpg";
    document.getElementById("target_2").src="../images/culture_target.jpg";
    document.getElementById("target_"+o).src="../images/target_"+ o +".jpg";
    document.getElementById("about_contetn_0").style.display = "none";
    document.getElementById("about_contetn_1").style.display = "none";
    document.getElementById("about_contetn_2").style.display = "none";
    document.getElementById("about_contetn_"+o).style.display = "block";

}
