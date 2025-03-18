document.addEventListener("DOMContentLoaded", function () {
    const title = document.querySelector("h1");
    const text = "CURRICULUM VITAE";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            title.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }

    title.textContent = "";
    typeEffect();

    const elements = document.querySelectorAll("h2, p, ul, form");

    function checkScroll() {
        elements.forEach((el) => {
            const position = el.getBoundingClientRect().top;
            if (position < window.innerHeight - 100) {
                el.style.opacity = 1;
                el.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", checkScroll);

    elements.forEach((el) => {
        el.style.opacity = 0;
        el.style.transform = "translateY(20px)";
        el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    });

    const submitButton = document.querySelector("input[type='submit']");
    submitButton.addEventListener("mouseover", () => {
        submitButton.style.transform = "scale(1.1)";
    });

    submitButton.addEventListener("mouseleave", () => {
        submitButton.style.transform = "scale(1)";
    });
});
