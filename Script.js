// ===============================
// HBN Electronics - script.js
// ===============================

// Sticky Header

window.addEventListener("scroll", function () {

const header = document.querySelector(".header");

header.classList.toggle("sticky", window.scrollY > 50);

});


// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");

const navbar = document.querySelector(".navbar");

menuBtn.onclick = () => {

navbar.classList.toggle("active");

};



// Close Menu After Click

document.querySelectorAll(".navbar a").forEach(link => {

link.onclick = () => {

navbar.classList.remove("active");

};

});



// Scroll Animation

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".service-box,.gallery-box,.about-content,.contact-box").forEach(el=>{

observer.observe(el);

});



// Scroll To Top Button

const topBtn = document.createElement("div");

topBtn.className="top-btn";

topBtn.innerHTML="↑";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};// ===============================
// Gallery Lightbox
// ===============================

const galleryImages = document.querySelectorAll(".gallery-box img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

galleryImages.forEach(img => {

img.addEventListener("click", () => {

lightbox.style.display = "flex";

lightboxImg.src = img.src;

});

});

if(closeBtn){

closeBtn.onclick = () => {

lightbox.style.display = "none";

};

}

window.addEventListener("click", (e)=>{

if(e.target === lightbox){

lightbox.style.display = "none";

}

});


// ===============================
// Counter Animation
// ===============================

const counters = document.querySelectorAll(".service-counter .service-box h2");

counters.forEach(counter => {

    const target = parseInt(counter.innerText);

    let count = 0;

    const updateCounter = () => {

        if (count < target) {

            count += Math.ceil(target / 50);

            if (count > target) count = target;

            if (counter.innerText.includes("%")) {
                counter.innerText = count + "%";
            } else {
                counter.innerText = String(count).padStart(2, "0");
            }

            requestAnimationFrame(updateCounter);

        }

    };

    updateCounter();

});


// ===============================
// Contact Form
// ===============================

const form = document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank You! Your message has been received.");

form.reset();

});

}


// ===============================
// Footer Year
// ===============================

const year = new Date().getFullYear();

const copyright = document.querySelector(".copyright");

if(copyright){

copyright.innerHTML = "&copy; " + year + " HBN Electronics. All Rights Reserved.";

}


// ===============================
// Smooth Page Fade
// ===============================

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});


// ===============================
// Console Message
// ===============================

console.log("HBN Electronics Website Loaded Successfully.");