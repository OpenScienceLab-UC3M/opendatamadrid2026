const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

<script>
function showMap(type) {
    // ocultar todos los mapas
    document.querySelectorAll('.map-iframe').forEach(el => {
        el.classList.remove('active');
    });

    // mostrar el seleccionado
    document.getElementById('map-' + type).classList.add('active');

    // actualizar botones
    document.querySelectorAll('.map-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    event.target.classList.add('active');
}
</script>


