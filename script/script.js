let menu = document.querySelector("header nav .menu");
let menuToggle = document.querySelector("header nav .menu-toggle");
let menuAnchor = document.querySelectorAll("header nav ul li a");

// to open menu in mobile
menuToggle.addEventListener("click", () => {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    menuToggle.classList.remove("active");
  } else {
    menu.classList.add("active");
    menuToggle.classList.add("active");
  }
});

// to close nav menu after menu links click in mobile
menuAnchor.forEach((element) =>
  element.addEventListener("click", () => {
    menu.classList.remove("active");
    menuToggle.classList.remove("active");
  }),
);

// to close nav menu after menu if user click outside hamburger or menubar
document.addEventListener("click", (event) => {
  if (
    menu.classList.contains("active") &&
    menuToggle.classList.contains("active")
  ) {
    // console.log(event.target);
    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
      // console.log("shit");
      menu.classList.remove("active");
      menuToggle.classList.remove("active");
    }
  }
});
