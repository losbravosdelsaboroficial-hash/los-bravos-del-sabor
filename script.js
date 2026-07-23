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

        const fechaEvento = new Date(evento.dataset.fecha);
        fechaEvento.setHours(0, 0, 0, 0);

        const diferencia = fechaEvento - hoy;
        const dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));

        const contador = evento.querySelector("#contador-evento");

        if (dias > 0) {
            contador.innerHTML = `⏳ Faltan <strong>${dias}</strong> días`;
        } else if (dias === 0) {
            contador.innerHTML = "🔥 <strong>¡El evento es hoy!</strong>";
        } else {
            contador.innerHTML = "✅ Evento realizado";
        }

    });

});

});

});
