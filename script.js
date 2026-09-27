```javascript
function openLightbox(src) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = src;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}


// ========================================
// ANIMACIÓN AL HACER SCROLL
// ========================================

window.addEventListener("scroll", () => {

    document.querySelectorAll(".reveal").forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            el.classList.add("active");
        }

    });

});
// ========================================
// LA BRAVADA - MODAL DE INSCRIPCIÓN
// ========================================

function abrirBravada() {

    const modal = document.getElementById("modalBravada");

    modal.style.display = "flex";

    document.body.style.overflow = "hidden";
}


function cerrarBravada() {

    const modal = document.getElementById("modalBravada");

    modal.style.display = "none";

    document.body.style.overflow = "";
}


/* CERRAR AL HACER CLIC FUERA */

window.addEventListener("click", function(event) {

    const modal = document.getElementById("modalBravada");

    if (event.target === modal) {

        cerrarBravada();

    }

});


/* CERRAR CON ESC */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        cerrarBravada();

    }

});


/* FORMULARIO */

document
    .getElementById("formBravada")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const nombre =
            document.getElementById("nombreFan").value.trim();

        const apellido =
            document.getElementById("apellidoFan").value.trim();

        const comuna =
            document.getElementById("comunaFan").value.trim();

        const whatsapp =
            document.getElementById("whatsappFan").value.trim();

        const instagram =
            document.getElementById("instagramFan").value.trim();


        const mensaje = document.getElementById(
            "mensajeBravada"
        );


        /*

        AQUÍ SE PUEDE CONECTAR POSTERIORMENTE
        CON GOOGLE SHEETS, FORMSPREE,
        SUPABASE O UNA BASE DE DATOS.

        */


        mensaje.style.display = "block";

        mensaje.innerHTML = `
            🔥 <strong>¡Bienvenido a La Bravada!</strong><br><br>

            Hemos recibido tus datos,
            ${nombre} ${apellido}.<br><br>

            Pronto podrás recibir información
            sobre la comunidad oficial de
            Los Bravos del Sabor.
        `;


        console.log("Nuevo fan:");

        console.log({
            nombre: nombre,
            apellido: apellido,
            comuna: comuna,
            whatsapp: whatsapp,
            instagram: instagram
        });


        document.getElementById("formBravada").reset();

    });
