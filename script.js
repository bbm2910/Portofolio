const shadow = document.querySelector("#shadow");

const mouse_shadow = function (event) {
    shadow.style.top = event.pageY + 'px';
    shadow.style.left = event.pageX + 'px';
}

document.querySelector("body").onload = function () {
    this.addEventListener("mousemove", mouse_shadow)
}

const aboutBtn = document.querySelector("#about-me");
const myWorkBtn = document.querySelector("#my-work");
const contactBtn = document.querySelector("#contact-me");

const aboutSection = document.querySelector("#section1");
const workSection = document.querySelector("#section2");
const contactSection = document.querySelector("#section3");

aboutBtn.addEventListener("click", () => {
    aboutSection.scrollIntoView({ behavior: "smooth" });
});

myWorkBtn.addEventListener("click", () => {
    workSection.scrollIntoView({ behavior: "smooth" });
});

contactBtn.addEventListener("click", () => {
    contactSection.scrollIntoView({ behavior: "smooth" });
});



const err = document.querySelector(".error");
const content = document.querySelector(".wrapper");
const whatsappBtn = document.querySelector(".whatsapp-btn");
const backToMain = document.querySelector(".back-to-main-btn");

whatsappBtn.addEventListener("click", () => {
    err.style.display = "block";
    content.style.display = "none";
})
backToMain.addEventListener("click", () => {
    err.style.display = "none";
    content.style.display = "flex";
})

