
document.getElementById("middle").style.minHeight = (window.screen.availHeight - window.screenTop - document.body.clientHeight * 0.04 - 332) +"px";
function chose_target(o){
    document.getElementById("target_0").src="../images/question_target.jpg";
    document.getElementById("target_1").src="../images/contact_target.jpg";
    document.getElementById("target_"+o).src="../images/question_"+ o +".jpg";
    document.getElementById("about_contetn0").style.display = "none";
    document.getElementById("about_contetn1").style.display = "none";
    document.getElementById("about_contetn"+o).style.display = "block";

}