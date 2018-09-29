// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    const HAMMOUNT = 50;
    const QAMMOUNT = 25;
    const DAMMOUNT = 10;
    const NAMMOUNT = 5;
    const PAMMOUNT = 1;
    const MAXAMMOUNT = 10000;
    const MINAMMOUNT = 0;
    const coins = {'H': HAMMOUNT, 'Q': QAMMOUNT, 'D': DAMMOUNT, 'N': NAMMOUNT, 'P': PAMMOUNT};

    let Result = {};
    let ErrorObject = {error: "You are rich, my friend! We don't have so much coins for exchange"};
    let rest = currency;

    if (currency >= MAXAMMOUNT){
        return ErrorObject;
    } else if (currency <= MINAMMOUNT){
        return Result;
    }
    for([key, value] of Object.entries(coins)){
        let numberOfCoins = Math.floor(rest/value);
        if(numberOfCoins) {
            Result[key] = numberOfCoins;
            rest %= value;
        }
    }
    return Result;
}
