
function showLogin(){
    document.querySelector(".innerContainer2").classList.add("active");
        document.querySelector(".innerContainer1").classList.remove("active");

}
function showRegister(){
     document.querySelector(".innerContainer1").classList.add("active");
        document.querySelector(".innerContainer2").classList.remove("active");
}
function successLogin(){
    var username = 
    document.getElementById("username").value;
    alert("Hi "  + username + " You are succesfully loged In ");
}
function createAc(){
    var name =
    document.getElementById("fullName").value;
    alert("Hi " + name + " You are succesfully Registerd ");
    var data = 
    document.getElementById("Cpass").value;
    alert("Here is your Password " + data + " save this password for you future refrence" );
    
}