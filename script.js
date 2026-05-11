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

    if (!tocList || headings.length === 0) return;

    headings.forEach((heading, index) => {
        if (!heading.id) {
            heading.id = "seccion-" + index;
        }

        const li = document.createElement("li");
        const link = document.createElement("a");

        link.href = "#" + heading.id;
        link.textContent = heading.textContent;

        li.appendChild(link);
        tocList.appendChild(li);
    });
});

