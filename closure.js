function bank(){
    let myBalance = 10000

    return{
        deposite(amount){
            myBalance += amount
            console.log(myBalance)
        },
        withdrawl(amount){
            myBalance -= amount
            console.log(myBalance)
        }
    }
}
let currentBalance = bank()
currentBalance.deposite(10000)
currentBalance.withdrawl(1)




function outer(){
    let count = 0;

    function inner(){
        count++;
        console.log(count)
    }
    return inner;
}
let counter = outer()
counter()
counter()
counter()
counter()