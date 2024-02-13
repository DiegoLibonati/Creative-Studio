export const navLinks = document.querySelectorAll(".navLink") as NodeList;
export const navbar = document.querySelector(
  ".header_container_nav"
) as HTMLElement;
export const header = document.querySelector(
  ".header_container"
) as HTMLElement;
export const logoNavbar = document.querySelector(
  ".logoNav"
) as HTMLAnchorElement;
export const btnOpenNav = document.querySelector(".fa-bars") as HTMLElement;

// export const sections = document.querySelectorAll(".section");

export const navHeight = header!.getBoundingClientRect().height;
