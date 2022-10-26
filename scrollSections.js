const navLinksTwo = document.querySelectorAll(".navLink");
const sections = document.querySelectorAll(".section");

const navHeight = document
  .querySelector(".header_container")
  .getBoundingClientRect().height;

const goSection = (e) => {
  e.preventDefault();
  const navLink = e.currentTarget.href;
  const newArray = navLink.split("#");

  const [url, sectionNavLink] = newArray;

  sections.forEach(function (section) {
    if (sectionNavLink === section.id) {
      const sectionTop = section.offsetTop;
      const scrollTo = sectionTop - navHeight;

      window.scrollTo({
        left: 0,
        top: scrollTo,
      });
    }
  });
};

navLinksTwo.forEach(function (navLink) {
  navLink.addEventListener("click", goSection);
});
