// Usamos Invoked Function Expression (IIFE) para mantener el código limpio

(function() {

    // Se mostrará un mensaje en la consola cuando el DOM esté completamente cargado

    document.addEventListener('DOMContentLoaded', function() {

        console.info("¡El script se ha cargado correctamente!");

        console.log("¡La página está completamente cargada!");

        // Cambiamos algo en el HTML

        document.body.style.backgroundColor = "lightblue";

        // Y mostramos un mensaje de alerta

        alert("¡Bienvenido a nuestro sitio web!");

    });

})();