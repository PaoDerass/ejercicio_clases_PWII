import { Libro, AdminLibros } from "./modelo.js";


const adminLibros = new AdminLibros();

document.getElementById("formLibro").addEventListener("submit", function(event) {
    event.preventDefault();

    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const año = document.getElementById("año").value;

    const nuevoLibro = new Libro(titulo, autor, año);
    adminLibros.agregarLibro(nuevoLibro);
    mostrarLibros();
});


function mostrarLibros() {
    const lista = document.getElementById("listaLibros");
    lista.innerHTML = "";
    
    adminLibros.listarLibros().forEach(libro => {
        const li = document.createElement("li");
        li.textContent = `${libro.titulo} - ${libro.autor} (${libro.año})`;
        lista.appendChild(li);
    });
}
