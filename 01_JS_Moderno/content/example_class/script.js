class Contador {
    constructor() {
        this.cuenta = 0;

        document.getElementById("incrementar").addEventListener("click", () => {
            this.cuenta++;  // Aquí, 'this' refiere correctamente al objeto Contador
            console.log(this.cuenta);
        });
    }
}

// Instantiate the Contador class
document.addEventListener("DOMContentLoaded", () => {
    new Contador();
});