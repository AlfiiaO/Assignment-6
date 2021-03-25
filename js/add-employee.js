// HANDLE THE LOAD EVENT OF THE WINDOW
function init () {
// SET WIDTH AND HEIGHT VARIABLES TO 800 x 700
let width = 800;
let height = 700;
// RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT
window.resizeTo(width, height);
// MOVE THE POPUP TO THE MIDDLE OF THE SCREEN
window.moveTo(((window.screen.width - width) / 2),window.screen.heigh);
// CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM
let login = window.document.getElementById("btnAddEmployee");
login.addEventListener("click", function()  {
// CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT
// SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS
let id = window.document.getElementById("id").value;
let name = window.document.getElementById("name").value;
let extension = window.document.getElementById("extention").value;
let email = window.document.getElementById("email").value;
let department = window.document.getElementById("department").value;
let output = window.opener.document.getElementById("loginDetails");
output.innerHTML = "ID:" + id + "<br>Name:" + name + "<br>Extension:" + extension + "<br>Email:" + email + "<br>Department:" + department;
window.close();
let form = document.querySelector("form");

form.addEventListener('click', (e) => {
    // PREVENT THE FORM SUBMISSION
    e.preventDefault();

});



window.addEventListener("load", init);
// HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW

// HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION

});
}


// GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE

// SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES

// CLOSE THE POPUP

// THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE
