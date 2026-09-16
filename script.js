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
console.log("Fecha del evento:", new Date(fechaEvento));
console.log("Ahora:", new Date());
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
console.log("Diferencia:", diferencia);
.eventos-lista {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 35px;
    max-width: 1000px;
    margin: 40px auto;
}

.evento-card {
    background: rgba(0, 0, 0, 0.75);
    border: 1px solid #d4af37;
    border-radius: 15px;
    padding: 25px;
    text-align: center;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.4);
}

.evento-card h3 {
    color: #d4af37;
    font-family: 'Cinzel', serif;
    font-size: 1.4rem;
    margin: 15px 0;
}

.evento-card p {
    color: #fff;
    line-height: 1.6;
}

.event-date {
    color: #d4af37 !important;
    font-weight: bold;
    font-size: 1.15rem;
}

.event-image {
    width: 100%;
    max-height: 450px;
    object-fit: cover;
    border-radius: 10px;
}

/* 📱 CELULARES */
@media (max-width: 768px) {

    .eventos-lista {
        grid-template-columns: 1fr;
        gap: 25px;
        margin: 25px 15px;
    }

    .evento-card {
        padding: 20px;
    }

    .evento-card h3 {
        font-size: 1.2rem;
    }
}
```css
.eventos-lista {
    width: 100%;
    max-width: 950px;
    margin: 30px auto;
    padding: 0 20px;

    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 30px;

    box-sizing: border-box;
}

.evento-card {
    width: 100%;
    max-width: 430px;
    box-sizing: border-box;

    padding: 25px;
    text-align: center;

    background: rgba(0, 0, 0, 0.8);
    border: 1px solid #d4af37;
    border-radius: 12px;
}

.evento-card h3 {
    color: #d4af37;
    margin: 15px 0;
}

.event-date {
    color: #d4af37;
    font-weight: bold;
}

@media (max-width: 768px) {
    .eventos-lista {
        flex-direction: column;
        align-items: center;
        padding: 0 15px;
    }

    .evento-card {
        max-width: 100%;
    }
}
```
