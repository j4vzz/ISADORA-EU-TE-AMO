const carta = document.getElementById("carta");
const inicio = document.getElementById("inicio");
const cartaAberta = document.getElementById("cartaAberta");
const voltar = document.getElementById("voltar");

carta.addEventListener("click", () => {

    // Animação da carta
    carta.style.transform = "scale(1.1)";

    setTimeout(() => {

        inicio.style.display = "none";

        cartaAberta.classList.add("visivel");

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

    }, 500);
});


voltar.addEventListener("click", () => {

    cartaAberta.classList.remove("visivel");

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

    setTimeout(() => {
        inicio.style.display = "flex";
        carta.style.transform = "";
    }, 300);
});
