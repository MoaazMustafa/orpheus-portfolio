const toggleBtn = document.querySelector(".menu");
const navList = document.querySelector("#nav-list");
const nav = document.querySelector("header nav");
const body = document.querySelector("body");

function toggleNav(e) {
  e.stopPropagation(); // Prevent body click when clicking menu
  toggleBtn.classList.toggle("opened");
  toggleBtn.setAttribute(
    "aria-expanded",
    toggleBtn.classList.contains("opened")
  );
  navList.classList.toggle("open");
  nav.classList.toggle("open");
}

// Close nav when clicking outside
document.addEventListener("click", function (e) {
  if (!nav.contains(e.target) && navList.classList.contains("open")) {
    toggleBtn.classList.remove("opened");
    navList.classList.remove("open");
    nav.classList.remove("open");
  }
});

// Prevent clicks inside the nav from closing it
nav.addEventListener("click", function (e) {
  e.stopPropagation();
});

toggleBtn.addEventListener("click", toggleNav);

// ------------nav------------ //

const themeBtn = document.querySelector("nav .items ul li button");
const logoImg = document.querySelector("nav .logo .img img");
const heroImg = document.querySelector("header .hero .right .image-container img");
themeBtn.addEventListener("click", () => {
  body.classList.toggle("light");
  if (body.classList.contains("light")) {
    logoImg.src = "/images/icons/logo2.svg"; // Light mode logo
    heroImg.src = "/images/image 5.png"
    themeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="24px" fill="none" >
     <defs>
                                    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stop-color="#fff6c2" />
                                        <stop offset="30%" stop-color="#ffd369" />
                                        <stop offset="60%" stop-color="#ffba00" />
                                        <stop offset="100%" stop-color="#ffea8a" />
                                    </linearGradient>
                                </defs><path d="M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0l-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z"/></svg>`;
  } else {
    logoImg.src = "/images/icons/Vector.svg"; // Dark mode logo
     heroImg.src = "/images/statue-skull-gold-marble-roman-greek-sculpture-1080P-wallpaper 1.png"
    themeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960"
                                width="30px" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stop-color="#fff6c2" />
                                        <stop offset="30%" stop-color="#ffd369" />
                                        <stop offset="60%" stop-color="#ffba00" />
                                        <stop offset="100%" stop-color="#ffea8a" />
                                    </linearGradient>
                                </defs>
                                
                                <path
                                    d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z" />
                            </svg>`;
  }
});
