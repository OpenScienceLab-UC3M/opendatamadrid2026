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

        // Crear ID automático si no existe
        if (!heading.id) {
            heading.id = "seccion-" + index;
        }

        // Crear elemento del índice
        const li = document.createElement("li");

        li.innerHTML = `
            <a href="#${heading.id}">
                ${heading.textContent}
            </a>
        `;

        tocList.appendChild(li);
    });

});

