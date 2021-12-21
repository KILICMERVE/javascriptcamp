function isItPrime(...numbers){
    for(let i=0;i<numbers.length;i++){
        let counter=0
        for(let j=2;j<numbers[i];j++){
            if(numbers[i]%j==0){
                counter++
            }
        }
        if(counter!=0){
            console.log("Sayı Asal Değildir")
        }else{
            console.log("Sayı Asaldır")
        }
    }
}

isItPrime(2,3,5,8,7,9)