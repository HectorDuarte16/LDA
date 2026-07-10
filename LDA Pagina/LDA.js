/* ===================================================== */
/* SCRIPT.JS - LDA */
/* ===================================================== */

/*
=========================================================
TIPOS DE CAMBIO
=========================================================

Todos los valores están basados en Lempiras (HNL).

Puedes modificarlos fácilmente cuando desees
actualizar los tipos de cambio.
*/

const tasasCambio = {
    HNL: 1,
    USD: 0.039,
    EUR: 0.036,
    MXN: 0.73,
    COP: 160,
    ARS: 45,
    GTQ: 0.30,
    CRC: 20,
    PEN: 0.14,
    BRL: 0.22
};

/* ===================================================== */
/* MENÚ RESPONSIVE */
/* ===================================================== */

const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

/* ===================================================== */
/* VARIABLES GENERALES */
/* ===================================================== */

const selectorMoneda = document.getElementById("moneda");

let totalWord = 0;
let totalExcel = 0;
let totalLogo = 150;

/* ===================================================== */
/* FUNCIÓN CONVERTIR MONEDA */
/* ===================================================== */

function convertir(valorHNL) {

    const moneda = selectorMoneda.value;

    const convertido = valorHNL * tasasCambio[moneda];

    return convertido.toFixed(2) + " " + moneda;
}

/* ===================================================== */
/* ACTUALIZAR WORD */
/* ===================================================== */


/* ===================================================== */
/* ACTUALIZAR EXCEL */
/* ===================================================== */

function actualizarExcel() {

    const hojas =
        parseInt(document.getElementById("excelHojas").value) || 0;

    totalExcel = hojas * 10;

    document.getElementById("excelTotalHNL").innerText =
        totalExcel.toFixed(2);

    document.getElementById("excelConvertido").innerText =
        convertir(totalExcel);
}

/* ===================================================== */
/* ACTUALIZAR LOGO */
/* ===================================================== */

function actualizarLogo() {

    document.getElementById("logoConvertido").innerText =
        convertir(totalLogo);
}

/* ===================================================== */
/* EVENTOS INPUT */
/* ===================================================== */

document
.getElementById("wordPaginas")
.addEventListener("input", actualizarWord);

document
.getElementById("excelHojas")
.addEventListener("input", actualizarExcel);

/* ===================================================== */
/* CAMBIO DE MONEDA */
/* ===================================================== */

selectorMoneda.addEventListener("change", () => {

    actualizarWord();

    actualizarExcel();

    actualizarLogo();

});

/* ===================================================== */
/* SOLICITAR SERVICIO */
/* ===================================================== */

function solicitarServicio(
    servicio,
    cantidad,
    precioUnitario,
    total
) {

    if (!cantidad || cantidad <= 0) {

        alert("Debe ingresar una cantidad válida.");

        return;
    }

    document.getElementById(
    "pedidoConvertido"
    ).innerText =
    convertir(Number(total));

    document.getElementById(
        "pedidoServicio"
    ).innerText = servicio;

    document.getElementById(
        "pedidoCantidad"
    ).innerText = cantidad;

    document.getElementById(
        "pedidoUnitario"
    ).innerText =
        precioUnitario + " HNL";

    document.getElementById(
        "pedidoTotal"
    ).innerText =
        total + " HNL";

    document.getElementById(
        "pedidoMoneda"
    ).innerText =
        selectorMoneda.value;

    /*
    Scroll automático
    */

    document
        .getElementById("pedido")
        .scrollIntoView({
            behavior: "smooth"
        });
}

/* ===================================================== */
/* VALIDACIÓN CONTACTO */
/* ===================================================== */

const contactForm =
document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const nombre =
        contactForm.querySelector(
            'input[type="text"]'
        ).value.trim();

    const correo =
        contactForm.querySelector(
            'input[type="email"]'
        ).value.trim();

    const mensaje =
        contactForm.querySelector(
            "textarea"
        ).value.trim();

    if (
        nombre === "" ||
        correo === "" ||
        mensaje === ""
    ) {

        alert(
            "Por favor complete todos los campos."
        );

        return;
    }

    alert(
        "Mensaje enviado correctamente."
    );

    contactForm.reset();

});

/* ===================================================== */
/* ANIMACIÓN AL HACER SCROLL */
/* ===================================================== */

const elementos =
document.querySelectorAll(
    ".card, .pago-card, .pedido-box"
);

function mostrarElementos() {

    elementos.forEach(elemento => {

        const posicion =
            elemento.getBoundingClientRect().top;

        const pantalla =
            window.innerHeight - 100;

        if (posicion < pantalla) {

            elemento.style.opacity = "1";

            elemento.style.transform =
                "translateY(0)";
        }
    });
}

window.addEventListener(
    "scroll",
    mostrarElementos
);

mostrarElementos();

/* ===================================================== */
/* INICIALIZAR VALORES */
/* ===================================================== */

actualizarWord();

actualizarExcel();

actualizarLogo();

/* ===================================================== */
/* CONFIGURACIÓN WHATSAPP
/* ===================================================== */

/*

PARA CAMBIAR EL NÚMERO DE WHATSAPP:

En index.html busca:

https://wa.me/50499999999

y reemplaza:

50499999999

por tu número real.

Ejemplo:

https://wa.me/50498765432

Cuando el usuario presione el botón verde
de WhatsApp se abrirá automáticamente el chat.

*/

/* ===================================================== */
/* FUTURAS PASARELAS DE PAGO
/* ===================================================== */

/*

Aquí podrás integrar posteriormente:

- PayPal
- Stripe
- BAC
- Ficohsa
- Banco Atlántida
- Kash
- Tigo Money

Ejemplo:

function procesarPago() {

}

*/

console.log(
    "LDA cargado correctamente."
);