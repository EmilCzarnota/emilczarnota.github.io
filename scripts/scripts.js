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
  let photoMeMobile = document.getElementById("photoMeMobile");

  if(aboutMeContainer.style.display === "none"){
    aboutMeContainer.style.display = "block"
    photoMe.src="img/jaHike.png";
    photoMeMobile.src="img/jaHike.png";
    

    
  }
  else{
    aboutMeContainer.style.display = "none"
    photoMe.src="img/meColor.jpg";
    photoMe.style.display = "block";
    photoMeMobile.src="img/meColor.jpg";
    
  }
});


//projects hide and show
let projectsButton = document.getElementById("projectsButton");


//in text project button
projectsButton.addEventListener("click", function(){
  let projectsContainer = document.getElementById("projectsContainer");
  let photoMe = document.getElementById("photoMe")
  
  
  if(projectsContainer.style.display === "none"){
    projectsContainer.style.display = "block";
    photoMe.src="img/projects.png"
    
  }
  else{
    projectsContainer.style.display = "none";
    photoMe.src="img/meColor.jpg"
    
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
/*
  let navBar = document.getElementById("navBar");

document.body.addEventListener("scroll", function (){
  navBar.style.display = "none";
})

*/
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
