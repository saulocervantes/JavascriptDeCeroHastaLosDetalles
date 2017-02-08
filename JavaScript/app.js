

var persona = {
    nombre: "Juana",
    apellido: "Herrera",
    edad: 25,
    direccion: {
        pais: "Costa Rica",
        ciudad: "San José",
        edificio: {
            nombre: "Edificio principal",
            telefono: "2222-3333"
        }
    }
};

persona.direccion.zipcode = 11101;

var edificio = persona.direccion.edificio;

edificio.nopiso = "8vo piso";

console.log( persona );