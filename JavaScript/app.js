

function imprimir( fn ){
    fn();
}

var miFuncion = function(){
    console.log("miFuncion");
}

imprimir( miFuncion );