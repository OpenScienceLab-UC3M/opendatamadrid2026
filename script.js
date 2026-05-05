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


