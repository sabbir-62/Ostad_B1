// //declaring variable and bills
// let billValues = [275, 40, 430];
// let bill, tips, totalBill;

// //Tips calculating function
// let calculateTips = (bill) => {  
//     if(bill>=50 && bill<=300)
//         return bill * .15;
//     else
//         return bill * .20;
// }

// //function call and print output
// for(bill of billValues){
//     tips = calculateTips(bill);
//     totalBill = bill + tips;
//     console.log(`The bill was ${bill}, the tip was ${tips}, and the total value ${totalBill}`);
// }


let bill = [2,3,4];
let tipc = (v) => {
    console.log(v);
}
bill.forEach(tipc);