

const links = document.querySelectorAll(".links li");
const pages = document.querySelectorAll(".window");
const home = document.querySelector(".window.home");
const aboutPage = document.querySelector(".window.about");
const contactPage = document.querySelector(".window.contact");
const openBtn = document.querySelector(".open-btn");
const navBar = document.querySelector(".nav-bar");
const hireMeBtn = document.getElementById("hire-me");
const sendBtn = document.querySelector(".mesages .btn");


window.addEventListener("load", (e) => {
  home.classList.add("show");
  links[0].classList.add("on");
});

openBtn.addEventListener("click", (e) => {
  navBar.classList.toggle("active");
  if (navBar.classList.contains("active")) {
    openBtn.classList.add("hide");
  } else {
    openBtn.classList.remove("hide");
  }
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    showSection(link);
    navBar.classList.remove("active");
    openBtn.classList.remove("hide");
  });
});

function showSection(link) {
  pages.forEach((pag) => {
    const name = pag.classList[1];
    if (link.className == name) {
      pages.forEach((pag) => {
        pag.classList.remove("show");
      });
      links.forEach((link) => {
        link.classList.remove("on");
      });
      pag.classList.add("show");
      link.classList.add("on");
    }
  });
}
hireMeBtn.addEventListener('click', () => {
  aboutPage.classList.remove("show");
  contactPage.classList.add("show");
  document.querySelector('.nav-bar .about').classList.remove('on');
  document.querySelector('.nav-bar .contact').classList.add('on');
})
sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
});














