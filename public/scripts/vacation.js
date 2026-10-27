
document.getElementById("vacation-form").onsubmit = () => {

     let isValid = true;

    // Clear all errors
    clearErrors();

  let numTrav = document.getElementById("num-travelers").value.trim();
    if (numTrav <= 0) {
        document.getElementById("err-travelers").style.display = "block";
        isValid = false;
    }





    let des=document.getElementById("destination").value;
if(des == "none"){
    document.getElementById("err-des").style.display="block";
    isValid=false;
}
    return isValid;






}










function clearErrors() {
    let errors = document.getElementsByClassName("err");
    for (let i=0; i<errors.length; i++) {
        errors[i].style.display = "none";
    }
}