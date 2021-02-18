function seasonWear( season) {

    switch( season ) {
    case "spring" :
        console.log( `It is ${season}, its starting to warm up`);
        break;
    case  "summer" :
        console.log( `It is ${season}, no need for a coat, just flip flops`);
        break;
    case "winter" :
        console.log( `It is ${season}, so make sure you have your coat at the ready`);
        break;
    case "autumn" :
        console.log( `It is ${season}, so make sure you have your jacket on`);
        break;
    deafult :
    console.log( "Error" );
    break;
        

    }
}

seasonWear( "summer")