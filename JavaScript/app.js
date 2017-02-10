

function identifica( param ){

    if( typeof param == "function" ){
        param();
    }else{
        console.log( param );
    }

}


identifica( function(){
    console.log( "Soy anonima" );
} );// function

identifica( 2 );
