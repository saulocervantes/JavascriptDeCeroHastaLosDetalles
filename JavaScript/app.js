

function identifica( param ){

    console.log( typeof param );

}

function Persona(){

}

var juan = new Persona();

identifica( 1 );// number
identifica( "1" );// string
identifica( true );// boolean
identifica( {} );// object
identifica( juan );// object
identifica( function(){} );// function