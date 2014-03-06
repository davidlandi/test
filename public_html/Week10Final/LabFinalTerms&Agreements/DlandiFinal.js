/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor. Created By David Landi 2014
 */

//using arrays to store tracking info 
var clickedLink1 = [];
var clickedLink2 = [];
var scrollTerms = [];
var btnErr = [];
 
// global var's 
var scrollValidate = document.getElementById('agreeScroll');
var reqDoc1  = document.getElementById('agreeLink1');
var reqDoc2  = document.getElementById('agreeLink2');
var btnCont  = document.getElementById('submitAgreement');
var btnAgree = document.getElementById('agree');
var btnNotAgree = document.getElementById('notagree'); 
var err1 = document.getElementById('error');
var myDiv = null;
var newDiv = null;
// 
// event listeners for click, scroll and continue btn events.
//when user clicks a link or scrolls the program is storing stings in given arrays to tell if event happend or not.
btnCont.addEventListener("click",btnContinue);
reqDoc1.addEventListener("click",DocumentLink1);
reqDoc2.addEventListener("click",DocumentLink2);
scrollValidate.addEventListener('scroll',Scroll);
 
// this function sends string to array if the first link  is clicked
function DocumentLink1 (){
    clickedLink1.push('clicked');
    console.log(clickedLink1);
}
// this function sends string to array if the second link  is clicked 
function DocumentLink2 (){
    clickedLink2.push('clicked');
    console.log(clickedLink2);
}
// function to see if scrolled to bottom
function Scroll(){
    if (scrollValidate.scrollTop == (scrollValidate.scrollHeight - scrollValidate.offsetHeight)){
        scrollTerms.push('Scrolled');
        btnAgree.disabled = false;
        btnNotAgree.disabled = false;
        console.log(scrollTerms);
}
}
// function that goes through dif. cases for validation 
// the first 2 statements are used to store a value for link 1 and 2 when they are not clicked
function Validate(){
    if (clickedLink1[0] !== 'clicked'){
    clickedLink1.push('notClicked');
}
    else if (clickedLink2[0] !== 'clicked'){
    clickedLink2.push('notClicked');
}
    if(clickedLink1[0] === "notclicked"||clickedLink2[0] === "notclicked"){
      var link = false; 
      console.log("both links not clicked");
}
    else if(clickedLink1[0] === "clicked" && clickedLink2[0] === "clicked"){
      link = true; 
      console.log("both links clicked");
}
    if (scrollTerms[0] === ""){
      var scroll = false;
      console.log("scroll error");
}
    else if (scrollTerms[0] === "Scrolled"){
      scroll = true; 
      console.log("scroll pass");
}   
    if(btnAgree.checked === false && btnNotAgree.checked === false){
      var btn = false;
      console.log("both radio btn are null");
}
    else if(btnNotAgree.checked === true){
      btnErr.push('didntAgree');
     console.log("didnt agree to terms");
}
    else if(btnAgree.checked === true){
      btn = true;     
}
    return [link,scroll,btn];
}
// this is the function to create the new div to display error 
function createNewDiv(divcolor,divwidth,divborder,divheight,divmargin,divhtml){
var newDiv = document.createElement("div");
      newDiv.style.color = divcolor;
      newDiv.style.width = divwidth;
      newDiv.style.border = divborder;
      newDiv.style.height = divheight;
      newDiv.style.margin= divmargin;
      var label = document.createElement('label');
      label.innerHTML = divhtml;
      label.style.textAlign="center";
      newDiv.appendChild(label);
      myDiv = document.getElementById("changeDiv");
      document.body.insertBefore(newDiv, myDiv);
}
// when continue button clicked disable radio btn's,hide page element,display new div that has message to user or display inline error message
function btnContinue(){
    var displayToUser = Validate();
    
    if(clickedLink1[0] === "notClicked"||clickedLink2[0] === "notClicked"){
      err1.style.color = "red";
      err1.innerHTML = "Please review both links";
                  
}
    else if(displayToUser[2] === false){
      err1.style.color = "red";
      err1.innerHTML = "Agree or disagree slection must be made to continue";
                  
}
    if (displayToUser[0] === true && displayToUser[1] === true && btnErr[0] === "didntAgree"){
                  document.getElementById('changeDiv').style.visibility="hidden";
      createNewDiv("red","500px","1px solid red","100px","1em auto","<h3>Terms & conditions were declined. To continue, terms and conditions must be accepted. To try again please refresh page.</h3>");
      Clear_Disable();
}
    else if (displayToUser[0] === false || displayToUser[1] === false || displayToUser[2] === false){
                  document.getElementById('changeDiv').style.visibility="hidden";
      createNewDiv("red","500px","1px solid red","100px","1em auto","<h3>You have not met the requirements of this form. Please refresh page to try again.</h3>");
      Clear_Disable();
}
  else if (displayToUser[0] === true && displayToUser[1] === true && displayToUser[2] === true){
      document.getElementById('changeDiv').style.visibility="hidden";
      createNewDiv("black","500px","1px solid green","50px","1em auto","<h3>You have met the requirments. Please continue.</h3><br><br> <p>The purpose of this project is to have a user agree to the terms and conditions before they can continue.  The user must click on the links to view a document.  They must also agree to the terms and condition of the scroll box agreement. Once the user agrees they can click continue and a confirmation message should appear.</p>");
      console.log("met validation");
}
     Clear_Disable();
     console.log(displayToUser);
}
// this function is to set the radio btns to not be clickable and checks removed 
function Clear_Disable(){
     btnAgree.checked = false;
     btnNotAgree.checked = false;
     btnAgree.disabled = true;
     btnNotAgree.disabled = true;
}


