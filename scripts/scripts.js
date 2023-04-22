let navBar = document.getElementById("navBar");
let buttonNav = document.querySelector (".button_nav");
let navSideBar = document.querySelector(".navSideBar");

let meColor = document.getElementById("meColor");
let photoFrame = document.getElementById("emilFrame");

let aboutMeContainer = document.getElementById("aboutMeContainer");
let projectsContainer = document.getElementById("projectsContainer");
let skillsContainer = document.getElementById("skillsContainer");
let textCv = document.querySelector(".textCv");
let cvContainer = document.querySelector(".cvContainer");



let h = navBar.getBoundingClientRect().top
let resolutionY = window.innerHeight;
let resolutionX = window.innerWidth;
let leftBox = document.querySelector(".leftBox");
let rightBox = document.querySelector(".rightBox");
//nav buttons



photoHeight = 0

//open animation
window.addEventListener("beforeunload",function(){
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
} )
document.querySelector("html").style.overflow = "hidden"
setTimeout(function(){
  navBar.style.top = "90vh"
  navBar.style.transition = "0.5s"
    }, 500);
setTimeout(function(){navBar.style.top = "50vh"}, 1000);
setTimeout(function(){navBar.style.top = "90vh"}, 1500);
setTimeout(function(){
  navBar.style.borderRadius = "0%"
  navBar.style.width = "100%"
  navBar.style.margin= "0% 0%"}, 1700);
setTimeout(function(){navSideBar.style.opacity="1"}, 1800)


setTimeout(function(){
  aboutMeButton.style.opacity = "1",
  aboutMeButton.style.display = "inline-block";
    }, 1800)
setTimeout(function(){
  projectsButton.style.opacity = "1",
  projectsButton.style.display = "inline-block";
    }, 2000)
setTimeout(function(){
  skillsButton.style.opacity = "1",
  skillsButton.style.display = "inline-block";
    }, 2200)
setTimeout(function(){
  cvButton.style.opacity = "1",
  cvButton.style.display = "inline-block";
    }, 2400)
setTimeout(function(){
  photoFrame.style.opacity = "1"
  meColor.style.height = "60vh"
    }, 1800)
setTimeout(function(){
    aboutMeContainer.style.opacity = "1";
    }, 2200)


//animation done

//navigation buttons
let aboutMeButton = document.getElementById("aboutMeButton");
let projectsButton = document.getElementById("projectsButton");
let skillsButton = document.getElementById("skillsButton");
let cvButton = document.getElementById("cvButton");
let hikePhoto = document.getElementById("hikePhoto");
let projectsPhoto = document.getElementById("projectsPhoto");

aboutMeButton.addEventListener("mouseover", function(){
  aboutMeButton.style.backgroundColor = "white";
  aboutMeButton.style.color = "black";
  aboutMeButton.style.fontWeight = "bold";
})
aboutMeButton.addEventListener("mouseout", function(){
  aboutMeButton.style.backgroundColor = null;
  aboutMeButton.style.color = null;
  aboutMeButton.style.fontWeight = null;
})
aboutMeButton.addEventListener("click", function(){
  navBar.style.top = "90vh";
  navBar.style.transition = "1s";
  leftBox.style.top = null;
  leftBox.style.opacity = null;
  rightBox.style.opacity = null;
  rightBox.style.top = null;
  aboutMeContainer.style.opacity = "1";
  projectsContainer.style.opacity = "0";
  skillsContainer.style.opacity = "0";
  cvContainer.style.top = "100%";
  document.querySelector("html").style.overflow = "hidden"
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  projectsPhoto.style.height = "0";
  hikePhoto.style.height = "0";
  meColor.style.height = "60vh";


})




projectsButton.addEventListener("mouseover", function(){
  projectsButton.style.backgroundColor = "white";
  projectsButton.style.color = "black";
  projectsButton.style.fontWeight = "bold";
})
projectsButton.addEventListener("mouseout", function(){
  projectsButton.style.backgroundColor = null;
  projectsButton.style.color = null;
  projectsButton.style.fontWeight = null;
})
projectsButton.addEventListener("click", function(){
  navBar.style.top = "90vh";
  navBar.style.transition = "1s";
  leftBox.style.top = null;
  rightBox.style.top = null;
  leftBox.style.opacity = null;
  rightBox.style.opacity = null;
  aboutMeContainer.style.opacity = "0";
  projectsContainer.style.opacity = "1";
  skillsContainer.style.opacity = "0";
  cvContainer.style.top = "100%";
  document.querySelector("html").style.overflow = "hidden"
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  projectsPhoto.style.height = "60vh";
  hikePhoto.style.height = "0";
  meColor.style.height = "0";
  
})
skillsButton.addEventListener("mouseover", function(){
  skillsButton.style.backgroundColor = "white";
  skillsButton.style.color = "black";
  skillsButton.style.fontWeight = "bold";
})
skillsButton.addEventListener("mouseout", function(){
  skillsButton.style.backgroundColor = null;
  skillsButton.style.color = null;
  skillsButton.style.fontWeight = null;
})
skillsButton.addEventListener("click", function(){
  navBar.style.top = "90vh";
  navBar.style.transition = "1s";
  leftBox.style.top = null;
  rightBox.style.top = null;
  leftBox.style.opacity = null;
  rightBox.style.opacity = null;
  aboutMeContainer.style.opacity = "0";
  projectsContainer.style.opacity = "0";
  skillsContainer.style.opacity = "1";
  cvContainer.style.top = "100%";
  document.querySelector("html").style.overflow = "hidden"
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  projectsPhoto.style.height = "0";
  hikePhoto.style.height = "60vh";
  meColor.style.height = "0";
  
  
})


cvButton.addEventListener("mouseover", function(){
  cvButton.style.backgroundColor = "white";
  cvButton.style.color = "black";
  cvButton.style.fontWeight = "bold";
})
cvButton.addEventListener("mouseout", function(){
  cvButton.style.backgroundColor = null;
  cvButton.style.color = null;
  cvButton.style.fontWeight = null;
})
cvButton.addEventListener("click", function(){
  navBar.style.top = "0%";
  navBar.style.transition = "1s";
  navBar.style.position = "fixed"
  leftBox.style.opacity = "0";
  leftBox.style.transition = "1s";
  rightBox.style.opacity = "0";
  rightBox.style.transition = "1s";
  cvContainer.style.top = "10%";
  document.querySelector("html").style.overflow = "auto"


})
//end of nav panel
//side nav panel
  let github = document.getElementById("github");
  let linkedin = document.getElementById("linkedin");
  let email = document.getElementById("email");
  let githubButton = document.getElementById("githubButton");
  let linkedinButton = document.getElementById("linkedinButton");
  let emailButton = document.getElementById("emailButton");
  
  githubButton.addEventListener("mouseover", function(){
    github.style.width = "100px";
    github.style.height = "20px";
  })
  githubButton.addEventListener("mouseout", function(){
    github.style.width = null;
    github.style.height = null;
  })
  linkedinButton.addEventListener("mouseover", function(){
    linkedin.style.width = "100px";
    linkedin.style.height = "20px";
  })
  linkedinButton.addEventListener("mouseout", function(){
    linkedin.style.width = null;
    linkedin.style.height = null;
  })
  emailButton.addEventListener("mouseover", function(){
    email.style.width = "100px";
    email.style.height = "20px";
  })
  emailButton.addEventListener("mouseout", function(){
    email.style.height = null;
    email.style.width = null;
    
  })


//cv navigation
let cvSkillsContent=document.getElementById("cvSkillsContent")
let cvSkillsButton=document.getElementById("cvSkillsButton")
let cvExperienceContent=document.getElementById("cvExperienceContent")
let cvExperienceButton=document.getElementById("cvExperienceButton")
let cvEducationButton=document.getElementById("cvEducationButton")
let cvEducationContent=document.getElementById("cvEducationContent")
let cvProjectsButton=document.getElementById("cvProjectsButton")
let cvProjectsContent=document.getElementById("cvProjectsContent")


cvSkillsButton.addEventListener("click", function(){
  if(cvSkillsContent.style.opacity == 0){
    cvSkillsContent.style.opacity = "1"
    cvSkillsContent.style.height = "auto";
  }
  else{
    cvSkillsContent.style.opacity = 0
    cvSkillsContent.style.height = 0;
  }
})

cvExperienceButton.addEventListener("click", function(){
  if(cvExperienceContent.style.opacity == 0){
    cvExperienceContent.style.opacity = "1"
    cvExperienceContent.style.height = "auto";
  }
  else{
    cvExperienceContent.style.opacity = 0
    cvExperienceContent.style.height = 0;
  }
})

cvEducationButton.addEventListener("click", function(){
  if(cvEducationContent.style.opacity == 0){
    cvEducationContent.style.opacity = "1"
    cvEducationContent.style.height = "auto";
  }
  else{
    cvEducationContent.style.opacity = 0
    cvEducationContent.style.height = 0;
  }
})

cvProjectsButton.addEventListener("click", function(){
 
  if(cvProjectsContent.style.opacity == 0){
    cvProjectsContent.style.opacity = "1"
    cvProjectsContent.style.height = "auto";
  }
  else{
    cvProjectsContent.style.opacity = 0
    cvProjectsContent.style.height = 0;
  }
})
//end of cv scripts