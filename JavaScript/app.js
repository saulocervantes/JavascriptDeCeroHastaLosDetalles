

function identifica( param ){

    console.log( typeof param );
    console.log( param instanceof Persona );

}

function Persona(){
    this.nombre = "Fernando";
    this.edad = 30;
}

var fernando = new Persona();

identifica( fernando );
