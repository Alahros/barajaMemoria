let grupoTarjetas = ["🗡️", "⚖️", "🔭", "🏹", "💣", "🔫", "💻", "💾", "🎥"];
let totalTarjetas = grupoTarjetas.concat(grupoTarjetas);

function barajarTarjetas() {
    let resultado;

    resultado = totalTarjetas.sort(function () {
        return 0.5 - Math.random();
    });

    return resultado;
}

function reparteTarjetas() {
    let mesa = document.querySelector("#mesa");
    let tarjetaBarajada = barajarTarjetas();
    mesa.innerHTML = "";
    tarjetaBarajada.forEach(
        function (elemento) {
            let tarjeta = document.createElement("div");

            tarjeta.innerHTML =

                "<div class = 'tarjeta'>" + "<div class = 'tarjeta_contenido'>" + elemento + "</div>" + "</div>";

            mesa.appendChild(tarjeta);
        }
    );
}

function descubrir() {
    this.classList.add("descubierta");
}

    


reparteTarjetas();

document.querySelectorAll(".tarjeta").forEach(function (elemento) {
    elemento.addEventListener("click", descubrir);
});