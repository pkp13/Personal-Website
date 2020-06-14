
var mybutton = document.querySelector(".top-button");
var downloadResume = document.querySelector(".download-res");

window.onscroll = function() {scrollFunction()};

function scrollFunction()
{
  if (document.documentElement.scrollTop > 1000)
  {
    downloadResume.style.display = "block";
    mybutton.style.display = "block"
  }
  else if (document.documentElement.scrollTop > 200)
  {
    mybutton.style.display = "block";
    downloadResume.style.display = "none";
  }
  else
  {
    mybutton.style.display = "none";
    downloadResume.style.display = "none";
  }
}


var aboutMeButtonValue = document.querySelector("#aboutMeButton i");
var skillButtonValue = document.querySelector("#skillButton i");

function toggleSymbolAboutMe()
{
  if (aboutMeButtonValue.className === "fas fa-caret-up")
  {
    aboutMeButtonValue.className = "fas fa-caret-down";
  }
  else if (aboutMeButtonValue.className !== "fas fa-caret-up")
  {
    aboutMeButtonValue.className = "fas fa-caret-up";
  }
}

function toggleSymbolSkills()
{
  if (skillButtonValue.className === "fas fa-caret-up")
  {
    skillButtonValue.className = "fas fa-caret-down";
  }
  else if (skillButtonValue.className !== "fas fa-caret-up")
  {
    skillButtonValue.className = "fas fa-caret-up";
  }
}
