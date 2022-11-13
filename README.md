# Creative-Studio-Page

## Getting Started

1. Clone the repository
2. Join to the correct path of the clone
3. Install LiveServer extension from Visual Studio Code [OPTIONAL]
4. Click in "Go Live" from LiveServer extension

---

1. Clone the repository
2. Join to the correct path of the clone
3. Open index.html in your favorite navigator

## Description

I made a website about creative studio, but basically what I did was to take a design from the internet and implement it on my own without seeing the original code. All this was because I wanted to keep practicing CSS.

## Technologies used

1. CSS3
2. Javascript
3. HTML5

## Galery

![creative-studio](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/Css/Imagenes/creativestoriescss-0.jpg)

![creative-studio](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/Css/Imagenes/creativestoriescss-1.jpg)

![creative-studio](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/Css/Imagenes/creativestoriescss-2.jpg)

![creative-studio](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/Css/Imagenes/creativestoriescss-3.jpg)

![creative-studio](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/Css/Imagenes/creativestoriescss-4.jpg)

## Portfolio Link

`https://diegolibonati.github.io/DiegoLibonatiWeb/#/projects?q=Creative%20Studio%20Page`

## Video

https://user-images.githubusercontent.com/99032604/199624347-9adebe1c-aab6-4a77-ae14-1c802c29499b.mp4

## Documentation

### ./navbar.js

In this `navbar.js` file we will find all the navbar functionalities. Like for example `openNav()` with this function we are going to handle when the navbar is closed and opened in its mobile version:

```
const openNav = () => {
  navbar.classList.toggle("open-nav");

  navbar.classList.contains("open-nav")
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
};
```

With the `navbarScroll()` function what it generates is that when passing the 100 height it will style the navbar so that it is visible:

```
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
```

`navLinkClicked()` this function will allow us to style the navLink that was pressed and is active:

```
const navLinkClicked = (e) => {
  const navLink = e.currentTarget;

  navLinks.forEach(function (navLink) {
    if (navLink.classList.contains("active")) {
      navLink.classList.remove("active");
    }
  });

  navLink.classList.add("active");
};
```

### ./scrollSections.js

Knowing the height of the navbar that we obtain in the variable: `navHeight` we will be able to execute the function `goSection()` which basically serves to go to a specific section when a link in the navbar is touched, that is, a navLink:

```
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
```
