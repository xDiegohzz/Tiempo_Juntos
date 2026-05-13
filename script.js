// Contraseña predefinida
const CONTRASENA = "130326";

// Variable para almacenar la contraseña ingresada
let contrasenaIngresada = "";

// Función para agregar números al display
function agregarNumero(numero) {

    const textoCodigo = document.getElementById('texto-codigo');
    const display = document.querySelector('.display');

    // Si el texto actual es "Contraseña", limpiarlo
    if (textoCodigo.textContent === 'Contraseña') {
        textoCodigo.textContent = '';
    }

    // Mostrar asteriscos
    textoCodigo.textContent += '*';

    // Guardar contraseña real
    contrasenaIngresada += numero;

    // Activar estilo password
    display.classList.add('modo-password');

    // Validar contraseña
    if (contrasenaIngresada.length === CONTRASENA.length) {

        if (contrasenaIngresada === CONTRASENA) {

            mostrarContador();

        } else {

            alert("Contraseña incorrecta. Inténtalo de nuevo.");

            textoCodigo.textContent = 'Contraseña';

            display.classList.remove('modo-password');

            contrasenaIngresada = "";
        }
    }
}

// Función para mostrar contador
function mostrarContador() {

    const container = document.querySelector('.container');
    const seccionContador = document.getElementById('seccion-contador');

    // Ocultar caja fuerte
    container.style.display = 'none';

    // Mostrar contador
    seccionContador.style.display = 'block';
}

// Función para actualizar contador
function actualizarContador() {

    // Fecha de inicio de la relación
    // Año, Mes (0-11), Día, Hora, Minuto, Segundo
    const fechaInicio = new Date(2026, 2, 13, 0, 0, 0);

    const ahora = new Date();

    let anos = ahora.getFullYear() - fechaInicio.getFullYear();
    let meses = ahora.getMonth() - fechaInicio.getMonth();
    let dias = ahora.getDate() - fechaInicio.getDate();
    let horas = ahora.getHours() - fechaInicio.getHours();
    let minutos = ahora.getMinutes() - fechaInicio.getMinutes();
    let segundos = ahora.getSeconds() - fechaInicio.getSeconds();

    // Ajustar segundos
    if (segundos < 0) {
        segundos += 60;
        minutos--;
    }

    // Ajustar minutos
    if (minutos < 0) {
        minutos += 60;
        horas--;
    }

    // Ajustar horas
    if (horas < 0) {
        horas += 24;
        dias--;
    }

    // Ajustar días
    if (dias < 0) {

        meses--;

        const diasMesAnterior = new Date(
            ahora.getFullYear(),
            ahora.getMonth(),
            0
        ).getDate();

        dias += diasMesAnterior;
    }

    // Ajustar meses
    if (meses < 0) {
        meses += 12;
        anos--;
    }

    // Mostrar datos
    document.getElementById('anos').textContent = anos;
    document.getElementById('meses').textContent = meses;
    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;
}

// Ejecutar una vez al iniciar
actualizarContador();

// Actualizar cada segundo
setInterval(actualizarContador, 1000);

// Función para mostrar galería
function mostrarGaleria() {

    const seccionContador = document.getElementById('seccion-contador');
    const seccionGaleria = document.getElementById('seccion-galeria');
    const seccionCarta = document.getElementById('seccion-carta');

    // Ocultar otras secciones
    seccionContador.style.display = 'none';
    seccionCarta.style.display = 'none';

    // Mostrar galería
    seccionGaleria.style.display = 'block';
}

// Función para mostrar carta
function mostrarCarta() {

    const seccionGaleria = document.getElementById('seccion-galeria');
    const seccionCarta = document.getElementById('seccion-carta');

    // Ocultar galería
    seccionGaleria.style.display = 'none';

    // Mostrar carta
    seccionCarta.style.display = 'block';
}

// Función para volver al contador
function volverContador() {

    const seccionContador = document.getElementById('seccion-contador');
    const seccionGaleria = document.getElementById('seccion-galeria');

    // Ocultar galería
    seccionGaleria.style.display = 'none';

    // Mostrar contador
    seccionContador.style.display = 'block';
}

// Mostrar carta 1
function mostrarCarta1() {

    document.getElementById('carta1').style.display = 'block';
    document.getElementById('carta2').style.display = 'none';
}

// Mostrar carta 2
function mostrarCarta2() {

    document.getElementById('carta1').style.display = 'none';
    document.getElementById('carta2').style.display = 'block';
}