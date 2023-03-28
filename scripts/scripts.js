let emilButton = document.getElementById("emil");

/*
replacement for a:hover 

emilButton.addEventListener("mouseover",function(){
  emilButton.style.color="rgb(0,4,255)";
  emilButton.style.fontWeight = "bold";
  emilButton.style.transitionDuration = "0.8s";
  emilButton.style.cursor="pointer";
})

emilButton.addEventListener("mouseout", function(){
  emilButton.style.color="rgb(0,255,255)";
})
*/

emilButton.addEventListener("click", function(){
  let aboutMeContainer = document.getElementById("aboutMe");
  let photoMe = document.getElementById("photoMe");  
  
  if(aboutMeContainer.style.display === "none"){
    aboutMeContainer.style.display = "block"
    photoMe.src="img/jaHike.png";
    

    
  }
  else{
    aboutMeContainer.style.display = "none"
    photoMe.src="img/meColor.jpg";
    
  }
});


//projects hide and show
let projectsButton = document.getElementById("projectsButton");


//in text project button
projectsButton.addEventListener("click", function(){
  let projectsContainer = document.getElementById("projectsContainer");
  let photoMe = document.getElementById("photoMe");

  photoMe.src="img/projects.png"
  if(projectsContainer.style.display === "none"){
    projectsContainer.style.display = "block"
    
    
  }
  else{
    projectsContainer.style.display = "none";
   
    
  }
})

//skills button
let skillsButton=document.getElementById("skillsButton");
let skillsContainer = document.getElementById("skillsContainer");

skillsButton.addEventListener("click", function(){
  if(skillsContainer.style.display === "none"){
    skillsContainer.style.display = "block"}
    else{skillsContainer.style.display = "none"}
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
