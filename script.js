function openLightbox(src){

document.getElementById("lightbox").style.display="flex";

document.getElementById("lightbox-img").src=src;

}

function closeLightbox(){

document.getElementById("lightbox").style.display="none";

}

window.addEventListener("scroll",()=>{

document.querySelectorAll(".reveal").forEach(el=>{

const top=el.getBoundingClientRect().top;

if(top<window.innerHeight-100){

el.classList.add("active");

}
  // Ocultar eventos vencidos automáticamente
document.addEventListener("DOMContentLoaded", () => {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    document.querySelectorAll(".event-card").forEach(evento => {
        const fechaTexto = evento.getAttribute("data-fecha");

        if (!fechaTexto) return;

        const fechaEvento = new Date(fechaTexto);
        fechaEvento.setHours(0, 0, 0, 0);

        if (fechaEvento < hoy) {
            evento.remove();
        }
    });
});

});

});
