const { increment, decrement } = require("three/tsl")

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
let counts = outer()
counts()
counts()





function display(){
    let work = "Done! Great work"

    setTimeout(() => {
        console.log(work)
    }, 1000)
}
display()




function counter(){
    let count = 0 

    return{
        increment(){
            count++
            console.log(count)
        },
        decrement(){
            count--;
            console.log(count)
        },
        reset(){
            count = 0;
            console.log()
        }
    }
}
let i = counter()
i.increment()
i.increment()
i.increment()
i.decrement()
i.decrement()
i.reset()