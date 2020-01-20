/*
Design an algorithm to find the maximum profit. 
You may complete as many transactions as you like 
(i.e., buy one and sell one share of the stock multiple times).

Input: [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

steps scan array and store min

*/

const buySell = (arr) => {
    if (prices.length <= 1) return 0;
    var profits = 0;
    for (var i = 1, l = prices.length; i <= l - 1; ++i) {
        if (prices[i] > prices[i - 1]) {
            profits += prices[i] - prices[i - 1];
        }
    }
    return profits;
}