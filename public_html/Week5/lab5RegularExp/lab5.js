/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function submitForm(){
   var firstName = document.getElementById("Fname");
   var lastName = document.getElementById("Lname");
   var emailAddress = document.getElementById("email");
   var userComments = document.getElementById("comments");
   var fnameValidateMessage = document.getElementById("fnDtU1");
   var fnameErrorMessage = document.getElementById("fnDtU2");
   var lnameValidateMessage = document.getElementById("lnDtU1");
   var lnameErrorMessage = document.getElementById("lnDtU2");
   var emailValidateMessage = document.getElementById("eDtU1");
   var emailErrorMessage = document.getElementById("eDtU2");
   var t1,t2,t3,t4;
   if (!firstName.value.length){
       firstName.className="bad";
       fnameValidateMessage.innerHTML = "<strong>!!Invalid Entry!!</strong>";
       fnameErrorMessage.className="error";
       t1 = false;
       console.log("error FirstName");
   } 
   
   else if (noSpaceAlphaValidate( firstName.value ) == false){
       firstName.className="bad";
       fnameValidateMessage.innerHTML = "<strong>!!Invalid Entry!!</strong>";
       fnameErrorMessage.className="error";
       t1 = false;
       console.log("error FirstName");
   }
   
   else{
      firstName.className="good";
      fnameValidateMessage.innerHTML="<strong>Valid</strong>";
      fnameErrorMessage.className="valid";
      console.log( firstName.value );
      console.log(noSpaceAlphaValidate( firstName.value ));
}   
   
   if(!lastName.value.length ||SpaceAlphaValidate(lastName.value)== false){
       lastName.className="bad";
       lnameValidateMessage.innerHTML = "<strong>!!Invalid Entry!!</strong>";
       lnameErrorMessage.className="error";
       t2 = false;
       console.log("Error LastName");
   }
   else{
      lastName.className="good";
      lnameValidateMessage.innerHTML="<strong>Valid</strong>";
      lnameErrorMessage.className="valid";
      console.log("valid LastName");
   }
   if(EmailValidate(emailAddress.value) == false){
       emailAddress.className="bad";
       emailValidateMessage.innerHTML = "<strong>!!Invalid Entry!!</strong>";
       emailErrorMessage.className="error";
       t3 = false;
       console.log("Error Email");
   }
   else{
       emailAddress.className="good";
       emailValidateMessage.innerHTML="<strong>Valid</strong>";
       emailErrorMessage.className="Vaild";
       console.log("Valid Email");
   }
   if(userComments.value.replace(/[\s\r\n]/g,"")===""){
       console.log("comment field is empty");
       t4 = false;
       alert("Please Enter Comments");
   }
   else if (userComments.value.replace(strip_HTML)){
       
       t4 = false;
       alert("!!!HTML CODE NOT ALLOWED!!!");
       strip_HTML("");
       
   }
   else if (t1 == false||t2 == false||t3 == false||t4 == false){
       alert("Error Please Review All Fields");
   }
   else 
       alert( "Thank you "+ firstName.value+" "+lastName.value);
   }
function noSpaceAlphaValidate(str){
    var alphaRegex = /^[A-z]{1,}$/;
    return alphaRegex.test(str);
}
function SpaceAlphaValidate(str){
    var slphaRegex = /^[A-z" "]{1,}$/;
    return slphaRegex.test(str);
}
function EmailValidate(str){
    var emailRegex = /(^[a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]{3}$)/;
    return emailRegex.test(str);
}
function strip_HTML(str){
    var findHtml = /<(.|\n)*?>/gi;
    return str.replace(findHtml,"");
    }
