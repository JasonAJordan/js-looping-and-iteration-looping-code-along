// Code your solutions in this file


function writeCards(array, string){
    let newarr = []
    for (let i = 0 ; i< array.length; i++){
        newarr.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`);

    }
    return newarr;
}


function countDown(num){
    let num2 = num
    while (num2 >= 0) {
        console.log(num2)
        num2 = num2 - 1;
    }

}

