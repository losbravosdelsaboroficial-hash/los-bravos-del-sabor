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
// CONTADOR DE EVENTOS
// ========================================

// Por ahora dejamos el contador antiguo desactivado,
// ya que el evento del 8 de agosto ya pasó.

```
