function explain_Callback (name , age , task){

    task();
    console.log('Hellow ', name );

    console.log('Age is ', age);
    
    
}

function wasHand(){

    console.log(' Do wash Hand with Sope');
}

function takeShower(){

    console.log('Take shower with nice shop');
}

function FacebookScrolling(){

    console.log('Facebook user ')
}


explain_Callback('Shajon', 19 , wasHand );
explain_Callback('Kamal', 23 , takeShower);
explain_Callback('Jamal', 31 , FacebookScrolling);

