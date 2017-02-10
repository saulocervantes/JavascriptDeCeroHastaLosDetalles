
var nombre = "Juan Carlos";

var persona = {

    nombre: "María",
    apellido: "Dubon",
    imprimirNombre: function(){
        console.log( this.nombre + " " + this.apellido );
    },
    direccion: {
        pais: "Costa Rica",
        obtenerPais: function(){
            
            var self = this;

            var nuevaDireccion = function(){
                console.log( this );
                console.log("La dirección es en " + self.pais );
            }

            nuevaDireccion();
        }
    }

}

persona.imprimirNombre();
persona.direccion.obtenerPais();


