//Question 10---Simple Closure

function counter()
{
    let count=0;
    function inner()
    {
        count++;
       console.log(count)
    }
    return inner;
}

const c=counter();
c();
c();
c();



//Question 11--Medium Closure

function createWallet()
{var balance=0;
    {function addMoney(amount)
    {
        balance=amount+balance;
    }
        
    
   return addMoney;
}
   {
    function checkBalance()
    {
        console.log(balance);
    }
    return checkBalance;
   }
}
let myWallet = createWallet();
myWallet.addMoney(500);
myWallet.addMoney(200);
myWallet.checkBalance();  // should show 700
