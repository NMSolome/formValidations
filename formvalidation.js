function validationForm(){
    let username = document.forms["RegForm"] ["Name"];
    let email = document.forms["RegForm"] ["Email"];
    let phone = document.forms["RegForm"] ["Telephone"];
    // let nameerr = document.forms["RegForm"] ["nameerr"];
    if (username.value == ""){
        // alert("Please enter your name");
        username.style.border = "2px solid red";
        username.innerHTML = "Please enter your name"
        // username.focus();
        return false;
    }
    else {
        username.style.border = "2px solid green";
    }
    if (email.value == ""){
        // alert("Please enter your email");
        email.style.border = "2px solid red";
        email.innerHTML = "Please enter your email"
        // email.focus();
        return false;
    }
    if (email.value.indexOf("@", 0)<0 || email.value.indexOf(".",0)<0){
        // alert("Please enter a valid email address");
        email.style.border = "2px solid red";
        email.innerHTML = "Please enter a valid email address"
        // email.focus();
        return false;
    }
    else {
        email.style.border = "2px solid green";
    }
    if (phone.value == "" || phone.value.length  != 10){
        // alert("Please enter a valid phone number");
        phone.style.border = "2px solid red";
        // phone.focus();
        return false;
    }
    else {
        phone.style.border = "2px solid green";
    }
}





// add else statement : 
// failure border: Red
// Passing border: Green -- Incase the field has been passed. Green border when successful.
// present it using github link. create a folder, push it to new repository: share file link with Isaac
// remove the alert

// Starting next week - Look at progress of projects
// Work on your projects in git - continuously use GIT



// improves user interface and ensures completeness of data alongside right information used