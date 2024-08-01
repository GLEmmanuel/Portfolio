let menuVisible = false;

// Función que oculta o muestra el menú
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    // oculto el menú una vez que selecciono una opción
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Función que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("php");
        habilidades[3].classList.add("python");
        habilidades[4].classList.add("basededatos");
        habilidades[5].classList.add("office");
        habilidades[6].classList.add("comunicacion");
        habilidades[7].classList.add("trabajo");
        habilidades[8].classList.add("creatividad");
        habilidades[9].classList.add("dedicacion");
        habilidades[10].classList.add("proyect");
    }
}

// Detecto el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function() {
    efectoHabilidades();
}

// Función para descargar el CV
function descargarCV() {
    const filePath = 'CV/CURRICULUM EGL.pdf'; // Asegúrate de que esta ruta sea correcta
    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'CV_EGL.pdf'; // Nombre del archivo que se descargará
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Asigna la función de descarga al botón
document.getElementById('downloadCV').addEventListener('click', descargarCV);
