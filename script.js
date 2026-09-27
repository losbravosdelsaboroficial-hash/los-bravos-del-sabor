function openLightbox(src) {

    const lightbox = document.getElementById("lightbox");
    const image = document.getElementById("lightbox-img");

    if (!lightbox || !image) {
        return;
    }

    lightbox.style.display = "flex";
    image.src = src;
}


function closeLightbox() {

    const lightbox = document.getElementById("lightbox");

    if (!lightbox) {
        return;
    }

    lightbox.style.display = "none";
}


// ========================================
// ANIMACIÓN AL HACER SCROLL
// ========================================

function activarReveal() {

    document.querySelectorAll(".reveal").forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            el.classList.add("active");

        }

    });

}


window.addEventListener("scroll", activarReveal);


// Ejecutar también al cargar
window.addEventListener("load", activarReveal);
document.addEventListener("DOMContentLoaded", activarReveal);


// ========================================
// LA BRAVADA
// ========================================

function abrirBravada() {

    const modal =
        document.getElementById("modalBravada");

    if (!modal) {
        return;
    }

    modal.style.display = "flex";

    document.body.style.overflow = "hidden";
}


function cerrarBravada() {

    const modal =
        document.getElementById("modalBravada");

    if (!modal) {
        return;
    }

    modal.style.display = "none";

    document.body.style.overflow = "";
}


// ========================================
// CERRAR MODAL AL HACER CLIC AFUERA
// ========================================

window.addEventListener("click", function(event) {

    const modal =
        document.getElementById("modalBravada");

    if (!modal) {
        return;
    }

    if (event.target === modal) {

        cerrarBravada();

    }

});


// ========================================
// CERRAR MODAL CON ESC
// ========================================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        cerrarBravada();

    }

});


// ========================================
// CONTADOR LA BRAVADA
// ========================================

const URL_LA_BRAVADA =
    "https://script.google.com/macros/s/AKfycbxvGnBVqf54ftMX90XajGd8cIqIhS2oIlxHI-VwEA9S0Z9U9CVFxZnmwXrH8-mmehM/exec";


function actualizarContadorBravada(data) {

    const contador =
        document.getElementById("contadorBravada");

    const barra =
        document.getElementById("barraBravada");

    const texto =
        document.getElementById("textoCuposBravada");


    if (!contador || !barra || !texto) {
        return;
    }


    const inscritos =
        Math.max(0, Number(data.inscritos || 0));

    const limite = 100;

    const porcentaje =
        Math.min(100, (inscritos / limite) * 100);

    const disponibles =
        Math.max(0, limite - inscritos);


    contador.textContent =
        inscritos + " / " + limite;

    barra.style.width =
        porcentaje + "%";


    if (inscritos >= limite) {

        texto.textContent =
            "🎉 ¡Las 100 credenciales especiales ya fueron completadas!";

    } else {

        texto.textContent =
            "🔥 Quedan " +
            disponibles +
            " credenciales especiales disponibles.";

    }

}


function cargarContadorBravada() {

    const script =
        document.createElement("script");

    const callback =
        "actualizarContadorBravada";

    script.src =
        URL_LA_BRAVADA +
        "?count=1&callback=" +
        callback +
        "&t=" +
        Date.now();

    script.async = true;

    document.body.appendChild(script);

}


document.addEventListener(
    "DOMContentLoaded",
    cargarContadorBravada
);


// ========================================
// LA BRAVADA
// ========================================

function abrirBravada() {

    const modal =
        document.getElementById("modalBravada");

    if (!modal) {
        return;
    }

    modal.style.display = "flex";

    document.body.style.overflow = "hidden";
}


function cerrarBravada() {

    const modal =
        document.getElementById("modalBravada");

    if (!modal) {
        return;
    }

    modal.style.display = "none";

    document.body.style.overflow = "";
}


// ========================================
// CERRAR MODAL AL HACER CLIC AFUERA
// ========================================

window.addEventListener("click", function(event) {

    const modal =
        document.getElementById("modalBravada");

    if (!modal) {
        return;
    }

    if (event.target === modal) {

        cerrarBravada();

    }

});


// ========================================
// CERRAR MODAL CON ESC
// ========================================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        cerrarBravada();

    }

});


// ========================================
// FORMULARIO LA BRAVADA
// ========================================

document.addEventListener("DOMContentLoaded", function() {

    const formulario =
        document.getElementById("formBravada");

    if (!formulario) {
        return;
    }


    formulario.addEventListener("submit", function() {

        const mensaje =
            document.getElementById("mensajeBravada");

        const boton =
            formulario.querySelector(".btn-enviar-bravada");

        const nombre =
            document.getElementById("nombreFan")
                .value
                .trim();

        const apellido =
            document.getElementById("apellidoFan")
                .value
                .trim();


        if (boton) {

            boton.disabled = true;

            boton.textContent =
                "ENVIANDO...";

        }


        setTimeout(function() {

            if (mensaje) {

                mensaje.style.display = "block";

                mensaje.innerHTML = `
                    🔥 <strong>¡Inscripción recibida!</strong>
                    <br><br>
                    Bienvenido a La Bravada,
                    <strong>${nombre} ${apellido}</strong>.
                    <br><br>
                    Tus datos fueron enviados correctamente.
                `;

            }

        }, 900);


        setTimeout(function() {

            formulario.reset();

            cerrarBravada();

            if (boton) {

                boton.disabled = false;

                boton.textContent =
                    "🔥 INSCRIBIRME EN LA BRAVADA";

            }

            // Actualizar contador inmediatamente
            // después de una nueva inscripción.
            setTimeout(
                cargarContadorBravada,
                300
            );

        }, 2300);

    });

});
