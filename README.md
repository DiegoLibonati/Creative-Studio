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

---

1. Clone the repository
2. Join to the correct path of the clone
3. Execute: `yarn install`
4. Execute: `yarn dev`

## Description

I made a website about creative studio, but basically what I did was to take a design from the internet and implement it on my own without seeing the original code. All this was because I wanted to keep practicing CSS.

## Technologies used

1. CSS3
2. Typescript
3. HTML5

## Portfolio Link

[`https://www.diegolibonati.com.ar/#/project/23`](https://www.diegolibonati.com.ar/#/project/23)

## Video

https://user-images.githubusercontent.com/99032604/199624347-9adebe1c-aab6-4a77-ae14-1c802c29499b.mp4

## Documentation

In this `script.ts` file we will find all the navbar functionalities. Like for example `openNav()` with this function we are going to handle when the navbar is closed and opened in its mobile version:

```
const openNav = (): void => {
  navbar.classList.toggle("open-nav");

  navbar.classList.contains("open-nav")
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
};
```

With the `navbarScroll()` function what it generates is that when passing the 100 height it will style the navbar so that it is visible:

```
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
```

Knowing the height of the navbar that we obtain in the variable: `navHeight` we will be able to execute the function `goSection()` which basically serves to go to a specific section when a link in the navbar is touched, that is, a navLink:

```
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
```
