
var nombre = "Juan Carlos";

var persona = {

    nombre: "María",
    apellido: "Dubon",
    imprimirNombre: function(){
        console.log( this.nombre + " " + this.apellido );
    }

}

persona.nombre = "Andrés";

persona.imprimirNombre();



