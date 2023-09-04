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
const cvBtn = document.querySelector("#cv");

const aboutSection = document.querySelector("#section1");
const workSection = document.querySelector("#section2");
const contactSection = document.querySelector("#section3");

aboutBtn.addEventListener("click", () => {
    aboutSection.scrollIntoView({ behavior: "smooth" });
});

myWorkBtn.addEventListener("click", () => {
    workSection.scrollIntoView({ behavior: "smooth" });
});

cvBtn.addEventListener("click", () => {
    contactSection.scrollIntoView({ behavior: "smooth" });
});



const err = document.querySelector(".error");
const content = document.querySelector(".wrapper");
const whatsappBtn = document.querySelector(".whatsapp-btn");
const backToMain = document.querySelector(".back-to-main-btn");

whatsappBtn.addEventListener("click", () => {
    event.preventDefault();
    err.style.display = "block";
    content.style.display = "none";
})
backToMain.addEventListener("click", () => {
    err.style.display = "none";
    content.style.display = "flex";
})

window.addEventListener('scroll', function () {
    const footer = document.getElementById('scrollingFooter');
    const contentHeight = document.querySelector('.wrapper').clientHeight;
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;

    const scrollPosition = contentHeight - scrollTop - windowHeight;

    const opacity = scrollPosition > 0 ? 0 : 1;

    footer.style.opacity = opacity;
});


document.getElementById('contact-me').addEventListener('click', function () {
    const contentHeight = document.querySelector('.wrapper').clientHeight;
    const windowHeight = window.innerHeight;

    const scrollToPosition = contentHeight - windowHeight;

    window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'
    });
});


