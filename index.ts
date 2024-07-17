#! /usr/bin/env node

import inquirer from "inquirer"
let myBalance = 10000; //Dollar
let myPin = 3249
let pinAnswer = await inquirer.prompt(
    [
        {
            name:"pin",
            message:"Enter yuor pin",
            type: "number"

        }
    ]
);

if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!");

    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message:"please select option",
                type: "list",
                choices: ["withdraw","check balance"]
            }
        ]

    );
    if(operationAns.operation === "withdraw"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "Enter your amount",
                    type: "number",

                }
            ]
        );
        // = += -=
        myBalance -= amountAns.amount;

        console.log(`your remaining balance is ${myBalance}`)
    
             
        
    }else if(operationAns.operation === "check balance"){
        console.log(`Your remaining balance is ${myBalance}`)
    }
}
else{
    console.log("incorrect pin code");
}




