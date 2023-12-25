document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        const aboutSection = document.getElementById("about");
        const projectsSection = document.getElementById("projects");
        const contactSection = document.getElementById("contact");
        const scrollPosition = window.scrollY;

        if (scrollPosition >= 0 && scrollPosition < aboutSection.offsetHeight) {
            document.body.style.background = "url('background1.jpg') center/cover no-repeat";
        } else if (scrollPosition >= aboutSection.offsetHeight && scrollPosition < aboutSection.offsetHeight + projectsSection.offsetHeight) {
            document.body.style.background = "url('background2.jpg') center/cover no-repeat";
        } else {
            document.body.style.background = "url('background3.jpg') center/cover no-repeat";
        }
    });
});
