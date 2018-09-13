// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    const HAMMOUNT = 50;
    const QAMMOUNT = 25;
    const DAMMOUNT = 10;
    const NAMMOUNT = 5;
    const MAXAMMOUNT = 10000;
    const MINAMMOUNT = 0;
    let Result = {};
    let ErrorObject = {error: "You are rich, my friend! We don't have so much coins for exchange"};
    if (currency >= MAXAMMOUNT){
        return ErrorObject;
    } else if (currency <= MINAMMOUNT){
        return Result;
    }
    let rest = currency;
    console.log(rest);
    Result["H"] = Math.floor(rest/HAMMOUNT);
    rest %= HAMMOUNT;
    Result["Q"] = Math.floor(rest/QAMMOUNT);
    rest %= QAMMOUNT;
    Result["D"] = Math.floor(rest/DAMMOUNT);
    rest %= DAMMOUNT;
    Result["N"] = Math.floor(rest/NAMMOUNT);
    rest %= NAMMOUNT;
    Result["P"] = rest;
    for (key in Result){
        console.log(Result[key]);
        if(!Result[key]){
            delete Result[key];
        }
    }
    return Result;
}
