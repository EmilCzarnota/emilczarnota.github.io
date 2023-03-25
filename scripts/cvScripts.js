//scripts for cv 
//skills button
let cvSkillsButton = document.getElementById("cvSkillsButton");

cvSkillsButton.addEventListener("click", function(){
  let cvSkillsContent = document.getElementById("cvSkillsContent")
  if(cvSkillsContent.style.display === "none"){
    cvSkillsContent.style.display = "block"}
    else{cvSkillsContent.style.display = "none"}
})
//experience button
let cvExperienceButton = document.getElementById("cvExperienceButton");

cvExperienceButton.addEventListener("click", function(){
  let cvExperienceContent = document.getElementById("cvExperienceContent")
  if(cvExperienceContent.style.display === "none"){
    cvExperienceContent.style.display = "block"}
    else{cvExperienceContent.style.display = "none"}
})
//education button
let cvEducationButton = document.getElementById("cvEducationButton");

cvEducationButton.addEventListener("click", function(){
  let cvEducationContent = document.getElementById("cvEducationContent")
  if(cvEducationContent.style.display === "none"){
    cvEducationContent.style.display = "block"}
    else{cvEducationContent.style.display = "none"}
})
//projects button
let cvProjectsButton = document.getElementById("cvProjectsButton");

cvProjectsButton.addEventListener("click", function(){
  let cvProjectsContent = document.getElementById("cvProjectsContent")
  if(cvProjectsContent.style.display === "none"){
    cvProjectsContent.style.display = "block"}
    else{cvProjectsContent.style.display = "none"}
})