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

const URL_LA_BRAVADA =
    "https://script.google.com/macros/s/AKfycbxvGnBVqf54ftMX90XajGd8cIqIhS2oIlxHI-VwEA9S0Z9U9CVFxZnmwXrH8-mmehM/exec";


document.addEventListener("DOMContentLoaded", function() {

    const formulario =
        document.getElementById("formBravada");

    if (!formulario) {
        return;
    }


    formulario.addEventListener("submit", async function(event) {

        event.preventDefault();


        const nombre =
            document.getElementById("nombreFan")
                .value
                .trim();

        const apellido =
            document.getElementById("apellidoFan")
                .value
                .trim();

        const comuna =
            document.getElementById("comunaFan")
                .value
                .trim();

        const whatsapp =
            document.getElementById("whatsappFan")
                .value
                .trim();

        const instagram =
            document.getElementById("instagramFan")
                .value
                .trim();

        const mensaje =
            document.getElementById("mensajeBravada");

        const boton =
            formulario.querySelector(".btn-enviar-bravada");


        if (!mensaje) {
            return;
        }


        if (boton) {
            boton.disabled = true;
            boton.textContent = "ENVIANDO...";
        }


        const datos = new URLSearchParams();

        datos.append("nombre", nombre);
        datos.append("apellido", apellido);
        datos.append("comuna", comuna);
        datos.append("whatsapp", whatsapp);
        datos.append("instagram", instagram);


        try {

            await fetch(URL_LA_BRAVADA, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type":
                        "application/x-www-form-urlencoded;charset=UTF-8"
                },
                body: datos.toString()
            });


            mensaje.style.display = "block";

            mensaje.innerHTML = `
                🔥 <strong>¡Inscripción recibida!</strong>
                <br><br>
                Bienvenido a La Bravada,
                <strong>${nombre} ${apellido}</strong>.
                <br><br>
                Tus datos fueron enviados correctamente.
                <br>
                Muy pronto podrás conocer las novedades
                y beneficios de nuestra comunidad de fans.
            `;


            formulario.reset();


        } catch (error) {

            console.error(
                "Error al enviar inscripción:",
                error
            );


            mensaje.style.display = "block";

            mensaje.innerHTML = `
                ⚠️ <strong>No pudimos enviar tu inscripción.</strong>
                <br><br>
                Revisa tu conexión a internet
                e inténtalo nuevamente.
            `;


        } finally {

            if (boton) {

                boton.disabled = false;

                boton.textContent =
                    "🔥 INSCRIBIRME EN LA BRAVADA";

            }

        }

    });

});
