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

    if (!formulario) {
        return;
    }


    formulario.addEventListener(
        "submit",
        function(event) {

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


            if (!mensaje) {
                return;
            }


            mensaje.style.display = "block";


            mensaje.innerHTML = `

                🔥 <strong>
                    ¡Bienvenido a La Bravada!
                </strong>

                <br><br>

                Hemos recibido tus datos,
                ${nombre} ${apellido}.

                <br><br>
                Pronto podrás recibir información
                sobre la comunidad oficial de
                Los Bravos del Sabor.

            `;


            console.log("Nuevo fan:", {

                nombre,
                apellido,
                comuna,
                whatsapp,
                instagram

            });


            formulario.reset();

        }
    );

});
