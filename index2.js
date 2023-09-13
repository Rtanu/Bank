var balance = 59000;
balance = parseInt(balance);
function displayBalance(){
    
    document.getElementById("balance").innerHTML="Your Balance is: "+balance;
    
}
function withDraw() {
    var name = document.getElementById("name").value;
    var amount =document.getElementById("amount").value;
    amount = parseInt(amount);
    var flag =1;
    flag=parseInt(flag);
    if (amount>balance) {
        flag=0;
        
    } else {
        flag=1;
        
    }
    switch (flag) {
        case 0:
            document.getElementById("finalMessage").innerHTML= name +" Hello, your balance is insufficient & your balance "+balance+" is :" ;
            break;
        case 1:
            var finalAmount= balance-amount;
            document.getElementById("finalMessage").innerHTML= name + " Balance is: "+finalAmount ;
            break;
        
        default:
            break;
    }
    
    
}