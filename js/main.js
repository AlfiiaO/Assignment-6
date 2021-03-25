// HANDLE THE LOAD EVENT OF THE WINDOW

function init () {
let login = window.document.getElementById("btnAddEmployee");
// HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON
login.addEventListener("click", function () {
// OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP
        window.open("add-employee.html", "btnAddEmployee", "width=400");
 });
}
window.addEventListener("load", init);