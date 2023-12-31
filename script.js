function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var typed = new Typed('.textTyped', {
  strings:["Frontend Developer","Webflow Developer","Webflow Designer"],
  typeSpeed:50,
  backSpeed:50,
  backDelay:1000,
  loop:true
})