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
// FORMULARIO LA BRAVADA
// ========================================

document.addEventListener("DOMContentLoaded", function() {

    const formulario =
        document.getElementById("formBravada");

    const iframe =
        document.getElementById("bravadaFrame");

    if (!formulario) {
        return;
    }

    let envioEnCurso = false;

    function finalizarInscripcion() {

        if (!envioEnCurso) {
            return;
        }

        envioEnCurso = false;

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

        if (mensaje) {

            mensaje.style.display = "block";

            mensaje.innerHTML = `
                🔥 <strong>¡Inscripción recibida!</strong>
                <br><br>
                Bienvenido a La Bravada,
                <strong>${nombre} ${apellido}</strong>.
                <br><br>
                Tus datos fueron registrados correctamente.
            `;
        }

        formulario.reset();

        if (boton) {
            boton.disabled = false;
            boton.textContent =
                "🔥 INSCRIBIRME EN LA BRAVADA";
        }

        setTimeout(function() {
            cerrarBravada();
        }, 1400);
    }


    // El iframe se carga cuando Apps Script recibe
    // el envío del formulario.
    if (iframe) {

        iframe.addEventListener("load", function() {

            finalizarInscripcion();

        });

    }


    formulario.addEventListener("submit", function() {

        envioEnCurso = true;

        const boton =
            formulario.querySelector(".btn-enviar-bravada");

        if (boton) {
            boton.disabled = true;
            boton.textContent = "ENVIANDO...";
        }

        // No usamos preventDefault().
        // El formulario realiza el POST directamente.
    });

});
