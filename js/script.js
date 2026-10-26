
// ANIMACIONES AL HACER SCROLL

document.addEventListener("DOMContentLoaded", function () {

    const elementos = document.querySelectorAll(".reveal");

    const observador = new IntersectionObserver(
        function (entradas) {
            entradas.forEach(function (entrada) {

                if (entrada.isIntersecting) {
                    entrada.target.classList.add("visible");
                    observador.unobserve(entrada.target);
                }

            });
        },
        {
            threshold: 0.1
        }
    );

    elementos.forEach(function (elemento) {
        observador.observe(elemento);
    });


    // BOTÓN VOLVER ARRIBA

    const botonArriba = document.getElementById("backTop");

    if (botonArriba) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 300) {
                botonArriba.classList.add("show");
            } else {
                botonArriba.classList.remove("show");
            }

        });

        botonArriba.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });

    }

});
