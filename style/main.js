// nama pembuat
// const watermark = () => {
//   alert(
//     "website ini dibuat oleh Bambang wijanarko(23120061) dan Fattahurrizqi(23120065) dari  kelompok C."
//   );
// };
// window.addEventListener("load", watermark);

// navbar border bottom selction location navlink
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
window.onscroll = () => {
  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // close icons saat navbar di click
  menuNav.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// toggle navbar
let menuNav = document.getElementById("menu-icon");
let navbar = document.querySelector(".navbar");

menuNav.onclick = () => {
  menuNav.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scrll reveal
ScrollReveal({
  //   reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .profil-container, .gallery-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content, .profil p", {
  origin: "right",
});

// typed js
const typed = new Typed(".js-text", {
  strings: ["INFORMATIKA"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// profil kelas C
function openNewTab() {
  window.open("/C class/profilClassC/profil.html", "_blank");
  localStorage.setItem("membukaTab", "true");
}

function goBack() {
  const membukaTab = localStorage.getItem("membukaTab");

  if (membukaTab === "true") {
    window.close();
    localStorage.removeItem("membukaTab");
  } else {
    location.href = "index.html";
  }
}

// jadwal
function openNewTabJadwal() {
  window.open("/C class/jadwal/jadwal.html", "_blank");
  localStorage.setItem("membukaTabJadwal", "true");
}

function goBackIndex() {
  const membukaTabJadwal = localStorage.getItem("membukaTabJadwal");

  if (membukaTabJadwal === "true") {
    window.close();
    localStorage.removeItem("membukaTabJadwal");
  } else {
    location.href = "index.html";
  }
}

// ppkmb
function openNewTabPpkmb() {
  window.open("/gallery/ppkmbGallery.html", "_blank");
  localStorage.setItem("membukaTabPpkmb", "true");
}

function goBackIndexPpkmb() {
  const membukaTabPpkmb = localStorage.getItem("membukaTabPpkmb");

  if (membukaTabPpkmb === "true") {
    window.close();
    localStorage.removeItem("membukaTabPpkmb");
  } else {
    location.href = "index.html";
  }
}

// it camp
function openNewTabItCamp() {
  window.open("/gallery/itCampGallery.html", "_blank");
  localStorage.setItem("membukaTabItCamp", "true");
}

function goBackIndexItCamp() {
  const membukaTabItCamp = localStorage.getItem("membukaTabItCamp");

  if (membukaTabItCamp === "true") {
    window.close();
    localStorage.removeItem("membukaTabItCamp");
  } else {
    location.href = "index.html";
  }
}

// gallery c class
function openNewTabClass() {
  window.open("/gallery/classCGallery.html", "_blank");
  localStorage.setItem("membukaTabClassC", "true");
}

function goBackIndexClass() {
  const membukaTabClassC = localStorage.getItem("membukaTabClassC");

  if (membukaTabClassC === "true") {
    window.close();
    localStorage.removeItem("membukaTabClassC");
  } else {
    location.href = "index.html";
  }
}

// ldkmm
function openNewTabLdkmm() {
  window.open("/gallery/ldkmGallery.html", "_blank");
  localStorage.setItem("membukaTabldkmm", "true");
}

function goBackIndexLdkmm() {
  const membukaTabldkmm = localStorage.getItem("membukaTabldkmm");

  if (membukaTabldkmm === "true") {
    window.close();
    localStorage.removeItem("membukaTabldkmm");
  } else {
    location.href = "index.html";
  }
}
