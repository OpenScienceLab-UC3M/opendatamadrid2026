const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

function showMap(type, button) {
    document.querySelectorAll('.map-iframe').forEach(el => {
        el.classList.remove('active');
    });

    document.getElementById('map-' + type).classList.add('active');

    document.querySelectorAll('.map-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    button.classList.add('active');
}

document.addEventListener("DOMContentLoaded", () => {

    const headings = document.querySelectorAll(".body-article h2");
    const tocList = document.getElementById("toc-list");

    headings.forEach((heading, index) => {

        // Crear ID automático
        if (!heading.id) {
            heading.id = "seccion-" + index;
        }

        // Crear enlace índice
        const li = document.createElement("li");

        li.innerHTML = `
            <a href="#${heading.id}">
                ${heading.textContent}
            </a>
        `;

        tocList.appendChild(li);
    });

    // ===== RESALTAR SECCIÓN ACTIVA =====

    const tocLinks = document.querySelectorAll(".toc a");
    tocLinks.forEach(link => {

    link.addEventListener("click", () => {

        tocLinks.forEach(l => {
            l.classList.remove("active");
        });

        link.classList.add("active");

    });

});

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                tocLinks.forEach(link => {
                    link.classList.remove("active");
                });

                const activeLink = document.querySelector(
                    `.toc a[href="#${entry.target.id}"]`
                );

                if(activeLink){
                    activeLink.classList.add("active");
                }
            }

        });

    }, {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0
    });

    headings.forEach(heading => {
        observer.observe(heading);
    });

});

