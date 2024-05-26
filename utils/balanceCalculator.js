const calculateBalance = (trades) => {
    const balances = {};
    trades.forEach((trade) => {
        const { operation, base_coin, amount } = trade;
        if (!balances[base_coin]) {
            balances[base_coin] = 0;
        }
        if (operation.toLowerCase() === 'buy') {
            balances[base_coin] += amount;
        } else if (operation.toLowerCase() === 'sell') {
            balances[base_coin] -= amount;
        }
    });
    return balances;
};
module.exports = calculateBalance;
