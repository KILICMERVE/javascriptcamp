function friendNumbers(number1,number2){
    let totalNumber1=0
    let totalNumber2=0
    for(let i=1;i<number1;i++){
        if(number1%i==0){
            totalNumber1+=i
        }
    }
    for(let i=1;i<number2;i++){
        if(number2%i==0){
            totalNumber2+=i
        }
    }

    if(totalNumber1==number2 & totalNumber2==number1){
        console.log("Arkadaş Sayılar")
    }else{
        console.log("Arkadaş Sayı Değiller")
    }
}
friendNumbers(100,284)
friendNumbers(220,284)
