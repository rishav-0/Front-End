

function callBackTwo(age){
    console.log('call back two',age);
}

function callBack(callbackTwoCalled){
    let age = 4
    console.log('call back one');
    if(age == 4){
        callbackTwoCalled(age)
    }
}


callBack(callBackTwo)


