// variables for Emil
let emilButton = document.getElementById("emil");
let aboutMeContainer = document.getElementById("aboutMe");

//hide  and show text function for Emil
emilButton.addEventListener("click", function(){
  if(aboutMeContainer.style.display === "none"){
  aboutMeContainer.style.display = "block"}
  else{aboutMeContainer.style.display = "none"}
})

//variables for Projects
let projectsButton = document.getElementById("projectsButton");
let projectsContainer = document.getElementById("projectsContainer");

//hide and show text function for projects

projectsButton.addEventListener("click", function(){
  if(projectsContainer.style.display === "none"){
    projectsContainer.style.display = "block"}
    else{projectsContainer.style.display = "none"}
})

let skillsButton=document.getElementById("skillsButton");
let skillsContainer = document.getElementById("skillsContainer");

skillsButton.addEventListener("click", function(){
  if(skillsContainer.style.display === "none"){
    skillsContainer.style.display = "block"}
    else{skillsContainer.style.display = "none"}
})