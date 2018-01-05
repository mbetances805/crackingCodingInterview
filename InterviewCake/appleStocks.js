function appleStocks (arg) {
  let min = arg[0]
  let max = arg[arg.length - 1]
  let maxProfit = 0
  let counter = 0
  for (let i = 0; i < arg.length; i++) {
    if (arg.length < 2) {
      throw new Error('Getting a profit requires at least 2 prices')
    }

    if (arg[i] < arg[i + 1] && arg[i] < min) {
      min = arg[i]
      counter = i
    }

    if (i > counter && arg[i] > min && arg[i] > max) {
      max = arg[i]
    }
  }

  maxProfit = max - min
  return 'Max Profit $' + maxProfit
}

console.log(appleStocks([10, 1]))

// function getProductsOfAllIntsExceptAtIndex(arg) {
//     // write the body of your function here
//     let products = []
//     let singleProduct = 1
//     for (let i = 0; i < arg.length; i++) {
//         let j = 0
//         while (j < arg.length) {
//             if (i !== j) {
//                 singleProduct *= arg[j];
//             }
//             j++
//         }
//         console.log(singleProduct)
//         products.push(singleProduct);
//         singleProduct = 1;
//     }
//     return 'products ' + products;
// }
