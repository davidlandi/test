/* 
 * Created by David Landi 2014
 * 
 * 
 */

// Json that will collect all this data
var trackUser = {
    "nameField" : '',
    "emailField" : '',
    "mouseX" : [],
    "mouseY" : [],
    "height" : [],
    "title" : '',
    "agent" : ''
};
// variable for saveuserdata function
var full_name = document.getElementById('fullname');
var e_mail = document.getElementById('email');
full_name.addEventListener('blur',saveUserData);
e_mail.addEventListener('blur',saveUserData);

//this function will store email and name when onblur event happens
function saveUserData()
{
   trackUser.nameField = document.getElementById('fullname').value;
   trackUser.emailField = document.getElementById('email').value;
}

//this is the function for mouse movment
document.addEventListener('mousemove',trackMouseEvent);
function trackMouseEvent(e)
{
    trackUser.mouseX.push(e.clientX);
    trackUser.mouseY.push(e.clientY);
    //Once the Array has a length of 100 you can stop pushing the mouse cords into the array
    if (trackUser.mouseX.length > 100)
    {
        document.removeEventListener('mousemove',trackMouseEvent);
    }
}
//this is the function for window movment
window.addEventListener('load',trackScreenEvent);
function trackScreenEvent()
{
    trackUser.title = document.title;
    trackUser.agent = window.navigator.userAgent;
    trackUser.height = window.innerHeight;
    trackUser.width = window.innerWidth;
    
}

//this function displays the stord results
var results = document.getElementById('showResults');
results.addEventListener("click", showTracking);
function showTracking() 
{
    console.clear();
    console.log(trackUser);
}


