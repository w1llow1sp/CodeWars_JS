{/*
* @Task
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

Notes
Array/list size is at least 2.

Array/list numbers could be a mixture of positives, negatives also zeroes .

Input >> Output Examples
adjacentElementsProduct([1, 2, 3]); ==> return 6
Explanation:
The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.
adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
Explanation:
Max product obtained from multiplying 5 * 10  =  50 .

adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14
Explanation:
The maximum product obtained from multiplying -2 * 7 = -14, and they're adjacent numbers in the array.*/}

export function adjacentElementsProduct(arr: number[]): number {
    // Initialize the maximum product to the product of the first two elements
    let maxProduct = arr[0] * arr[1];

    // Iterate through the rest of the array starting from the third element
    for (let i =  2; i < arr.length; i++) {
        // Update the current product with the product of the current and previous element
        const currentProduct = arr[i -  1] * arr[i];
        // If the current product is greater than the maximum product, update the maximum product
        if (currentProduct > maxProduct) {
            maxProduct = currentProduct;
        }
    }

    // Return the maximum product found
    return maxProduct;
}

{/*
export const adjacentElementsProduct = (arr: number[]): number =>
  Math.max(
    ...arr.map((value, index) =>
      index === arr.length - 1 ? value * arr[index - 1] : value * arr[index + 1]
    )
  )
*/}