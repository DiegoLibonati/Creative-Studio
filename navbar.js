const btnOpenNav = document.querySelector(".fa-bars");
const navbar = document.querySelector(".header_container_nav");
const header = document.querySelector(".header_container");
const logoNavbar = document.querySelector(".logoNav");
const navLinks = document.querySelectorAll(".navLink");
const faBars = document.querySelector(".fa-bars");

const openNav = () => {
  navbar.classList.toggle("open-nav");

  navbar.classList.contains("open-nav")
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
};

btnOpenNav.addEventListener("click", openNav);

const navbarScroll = (e) => {
  const y = window.scrollY;

  if (y > 100) {
    header.style.backdropFilter = "blur(10px)";
    logoNavbar.style.color = "#000";
    setStyleToAllElementsWithTheSameClass(
      navLinks,
      "#000",
      "--underline",
      "#000"
    );
    faBars.style.color = "#000";
  } else {
    header.style.backdropFilter = "blur(0px)";
    logoNavbar.style.color = "#fff";
    setStyleToAllElementsWithTheSameClass(
      navLinks,
      "#fff",
      "--underline",
      "#fff"
    );
    faBars.style.color = "#fff";
  }
};

window.addEventListener("scroll", navbarScroll);

const setStyleToAllElementsWithTheSameClass = (
  arr,
  color,
  variable,
  backgroundColor
) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].style.color = color;
    arr[i].style.setProperty(variable, backgroundColor);
  }
};

const navLinkClicked = (e) => {
  const navLink = e.currentTarget;

  navLinks.forEach(function (navLink) {
    if (navLink.classList.contains("active")) {
      navLink.classList.remove("active");
    }
  });

  navLink.classList.add("active");
};

navLinks.forEach(function (navLink) {
  navLink.addEventListener("click", navLinkClicked);
});
