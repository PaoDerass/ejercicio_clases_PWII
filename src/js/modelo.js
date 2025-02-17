class Libro {
    constructor(titulo, autor, año) {
        this.titulo = titulo;
        this.autor = autor;
        this.año = año;
    }
}

class AdminLibros {
    constructor() {
        this.libros = [];
    }

    agregarLibro(libro) {
        this.libros.push(libro);
    }

    listarLibros() {
        return this.libros;
    }
}

export { Libro, AdminLibros };
