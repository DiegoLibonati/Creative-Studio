import {
  btnOpenNav,
  header,
  logoNavbar,
  navHeight,
  navLinks,
  navbar,
} from "./elements";
import { setMultipleClassName } from "./helpers/setMultipleClassName";

const goSection = (e: Event): void => {
  e.preventDefault();
  const target = e.currentTarget as HTMLAnchorElement;
  const navLink = target.href;
  const newArray = navLink.split("#");

  const [_, sectionNavLink] = newArray;

  const section = document.getElementById(`${sectionNavLink}`) as HTMLElement;

  const sectionTop = section.offsetTop;
  const scrollTo = sectionTop - navHeight;

  window.scrollTo({
    left: 0,
    top: scrollTo,
  });

  const activeAnchor = document.querySelector(".active");

  if (activeAnchor) activeAnchor.classList.remove("active");

  target.classList.add("active");
};

navLinks.forEach(function (navLink) {
  navLink.addEventListener("click", (e) => goSection(e));
});

const openNav = (): void => {
  navbar.classList.toggle("open-nav");

  navbar.classList.contains("open-nav")
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
};

btnOpenNav.addEventListener("click", openNav);

const navbarScroll = (): void => {
  const y = window.scrollY;

  if (y > 100) {
    header.style.backdropFilter = "blur(10px)";
    logoNavbar.style.color = "#000";
    btnOpenNav.style.color = "#000";
    setMultipleClassName(navLinks, "#000", "--underline", "#000");
  } else {
    header.style.backdropFilter = "blur(0px)";
    logoNavbar.style.color = "#fff";
    btnOpenNav.style.color = "#fff";
    setMultipleClassName(navLinks, "#fff", "--underline", "#fff");
  }
};

window.addEventListener("scroll", navbarScroll);
