/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.Created by David Landi 
 */
// on click function 
function submitForm() {
    var fullname = document.getElementById("name");
    var fullnameErr = document.getElementById("err_name");
    var validemail = document.getElementById("email");
    var validemailErr = document.getElementById("err_email");
    var commentValid = document.getElementById("comments");
    var commentValidErr = document.getElementById("userInput");
    var f1,f2,f3;
    
    // checking to see if name field has value 
    if ( fullname.value.length > 0 ){
        console.log("name valid");
        fullname.className="good";
        fullnameErr.innerHTML="<strong>Ok</strong>";
        fullnameErr.className="valid";
        f1=true;
    }
    
    else{
        console.log("name is NOT valid");
        fullname.className="bad";
        fullnameErr.innerHTML="<strong>Invalid Entry!!!!!</strong>";
        fullnameErr.className="error";
    }
    
    //email validation 
    if ( validemail.value.length > 0 && validemail.value.indexOf("@") > 0 && validemail.value.indexOf(".") >0 ) {
        console.log("email is valid");
        validemail.className="good";
        validemailErr.innerHTML = "<strong>Ok</strong>";
        validemailErr.className = "valid";
        f2=true;
       } 
       
    else 
    {
        console.log("email is NOT valid");
        validemail.className="bad";
        validemailErr.innerHTML = "<strong>Invalid Entry!!!!!</strong>";
        validemailErr.className = "error";
    }
    
    //validation for comments box 
    if (commentValid.value.length <  150 && commentValid.value.length >=1){
        console.log("content good");
        commentValid.className="good";
        commentValidErr.innerHTML="<strong>OK</strong>";
        commentValidErr.className="valid";
        f3=true;
    }
    else{
        console.log("content bad");
        commentValid.className="bad";
        commentValidErr.innerHTML="<strong> Please limit comments to 150 characters </strong>";
        commentValidErr.className="error"; 
    }
    
    //validation for form, all fields have to meet requirments 
    //using alerts to have popup to display message to user. 
    if (f1 == true && f2 == true && f3 == true){
        alert("Your information has been sent");
    }
    else{
        alert("Please review all fields and try again");
    }
}


