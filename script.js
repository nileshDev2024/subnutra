// document.addEventListener("DOMContentLoaded", () => {

//   const hamburger = document.getElementById("hamburger");
//   const sideMenu = document.getElementById("sideMenu");
//   const closeBtn = document.querySelector(".close-btn");

//   // Open side menu
//   hamburger.onclick = () => {
//     sideMenu.style.left = "0px";
//   };

//   // Close menu
//   closeBtn.onclick = () => {
//     sideMenu.style.left = "-300px";
//   };

//   // Mobile Ingredients Dropdown
//   const dropBtn = document.querySelector(".mobile-drop-btn");
//   const dropContent = document.querySelector(".mobile-drop-content");

//   dropBtn.onclick = () => {
//     dropContent.style.display =
//       dropContent.style.display === "block" ? "none" : "block";
//   };

// });

// MOBILE MENU




document.addEventListener("DOMContentLoaded", () => {

  // ========== HEADER ==========

  const hamburger = document.getElementById("hamburger");
  const sideMenu = document.getElementById("sideMenu");
  const closeBtn = document.querySelector(".close-btn");

  if (hamburger) {
    hamburger.onclick = () => {
      sideMenu.style.left = "0px";
    };
  }

  if (closeBtn) {
    closeBtn.onclick = () => {
      sideMenu.style.left = "-300px";
    };
  }

  // Mobile dropdown
  const dropBtn = document.querySelector(".mobile-drop-btn");
  const dropContent = document.querySelector(".mobile-drop-content");

  if (dropBtn) {
    dropBtn.onclick = () => {
      dropContent.style.display =
        dropContent.style.display === "block" ? "none" : "block";
    };
  }


  // DESKTOP DROPDOWN CLICK TOGGLE
const desktopDropBtn = document.querySelector(".drop-btn");
const desktopDropMenu = document.querySelector(".dropdown-menu");

desktopDropBtn.addEventListener("click", (e) => {
  e.stopPropagation();

  // Toggle dropdown
  desktopDropMenu.style.display =
    desktopDropMenu.style.display === "block" ? "none" : "block";
});

// Hide dropdown on outside click
document.addEventListener("click", () => {
  desktopDropMenu.style.display = "none";
});



  // ========== CONTACT FORM WHATSAPP SEND ==========

  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      let name = document.getElementById("name").value.trim();
      let email = document.getElementById("email").value.trim();
      let phone = document.getElementById("phone").value.trim();
      let enquiry = document.getElementById("enquiry").value.trim();
      let message = document.getElementById("message").value.trim();

      let whatsappNumber = "917312550350";

      let whatsappMessage = `

    *Name:* ${name}
    *Email:* ${email}
    *Phone:* ${phone}
    *Enquiry Type:* ${enquiry}
    *Message:* ${message}
      `;

      let url = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(whatsappMessage);

      window.open(url, "_blank");
    });
  }

});




// // SEARCH POPUP
// const searchBtn = document.querySelectorAll(".search-btn");
// const searchPopup = document.getElementById("searchPopup");
// const closeSearch = document.getElementById("closeSearch");

// searchBtn.forEach(btn => {
//   btn.onclick = () => searchPopup.style.display = "flex";
// });

// closeSearch.onclick = () => {
//   searchPopup.style.display = "none";
// };


// // STICKY HEADER (optional smooth effect)
// window.addEventListener("scroll", () => {
//   const header = document.getElementById("header");
//   header.classList.toggle("sticky", window.scrollY > 20);
// });


// // silder js
// let slides = document.querySelectorAll(".slide");
// let current = 0;

// document.getElementById("total").innerText = slides.length.toString().padStart(2, "0");

// function showSlide(index) {
//   slides.forEach((slide, i) => {
//     slide.classList.remove("active");
//     if (i === index) slide.classList.add("active");
//   });

//   document.getElementById("current").innerText = (index + 1).toString().padStart(2, "0");
// }

// document.getElementById("next").onclick = () => {
//   current = (current + 1) % slides.length;
//   showSlide(current);
// };

// document.getElementById("prev").onclick = () => {
//   current = (current - 1 + slides.length) % slides.length;
//   showSlide(current);
// };
