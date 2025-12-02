let login = document.getElementById("login-open");
let loginform=document.getElementById("login-form");
let submit=document.getElementById("submit");
loginform.style.display="none";
login.addEventListener("click", ()=>{
loginform.style.display="block";
});
submit.addEventListener("click", ()=>{
loginform.style.display="none";
});