function openLightbox(src) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = src;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Animación al hacer scroll
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});

const fechaEvento = new Date("2026-08-08T21:00:00").getTime();

function actualizarContador(){

    const ahora = new Date().getTime();
    const diferencia = fechaEvento - ahora;

    if(diferencia <= 0){

        document.getElementById("dias").textContent="00";
        document.getElementById("horas").textContent="00";
        document.getElementById("minutos").textContent="00";
        document.getElementById("segundos").textContent="00";

        return;
    }

    const dias=Math.floor(diferencia/(1000*60*60*24));
    const horas=Math.floor((diferencia%(1000*60*60*24))/(1000*60*60));
    const minutos=Math.floor((diferencia%(1000*60*60))/(1000*60));
    const segundos=Math.floor((diferencia%(1000*60))/1000);

    document.getElementById("dias").textContent=dias;
    document.getElementById("horas").textContent=horas;
    document.getElementById("minutos").textContent=minutos;
    document.getElementById("segundos").textContent=segundos;

}

actualizarContador();
setInterval(actualizarContador,1000);
