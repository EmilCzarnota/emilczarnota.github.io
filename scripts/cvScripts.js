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

// side nav bar scripts

let gitHubButton=document.getElementById("githubButton");

gitHubButton.addEventListener("mouseover", function(){
 document.getElementById("github").style.display = "inline"
})
gitHubButton.addEventListener("mouseout", function(){
  document.getElementById("github").style.display = "none"
 })

 let linkedinButton=document.getElementById("linkedinButton");

linkedinButton.addEventListener("mouseover", function(){
 document.getElementById("linkedin").style.display = "inline"
})
linkedinButton.addEventListener("mouseout", function(){
  document.getElementById("linkedin").style.display = "none"
 })

 let emailButton=document.getElementById("emailButton");

 emailButton.addEventListener("mouseover", function(){
  document.getElementById("email").style.display = "inline"
 })
 emailButton.addEventListener("mouseout", function(){
   document.getElementById("email").style.display = "none"
  })

//hide and show top nav bar

let navBar = document.getElementById("navBar");

document.addEventListener("scroll", function (){
  navBar.style.display = "none"
})

// Initial state
var scrollPos = 0;
// adding scroll event
document.addEventListener('scroll', function(){
  // detects new state and compares it with the new one
  if ((document.body.getBoundingClientRect()).top > scrollPos)
		document.getElementById("navBar").style.display = "block";
	else
		document.getElementById("navBar").style.display = "none";
	// saves the new position for iteration.
	scrollPos = (document.body.getBoundingClientRect()).top;
});