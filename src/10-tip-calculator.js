/**
 * 🍽️ TipEasy - Restaurant Tip Calculator
 *
 * You're building TipEasy, an app that helps diners calculate the right
 * tip based on how they'd rate their dining experience. No more awkward
 * mental math at the table!
 *
 * Service Rating → Tip Percentage:
 *   - 1 (terrible)  → 5%
 *   - 2 (poor)      → 10%
 *   - 3 (okay)      → 15%
 *   - 4 (good)      → 20%
 *   - 5 (excellent) → 25%
 *
 * Return an object with:
 *   - tipPercentage: the percentage as a number (e.g., 15)
 *   - tipAmount: the calculated tip rounded to 2 decimal places
 *   - totalAmount: bill + tip rounded to 2 decimal places
 *
 * Rules:
 *   - If billAmount is 0 or negative, return null
 *   - If serviceRating is not an integer from 1 to 5, return null
 *
 * Example:
 *   calculateTip(50, 4)
 *   → { tipPercentage: 20, tipAmount: 10.00, totalAmount: 60.00 }
 *
 * @param {number} billAmount - The bill amount in dollars
 * @param {number} serviceRating - Service rating from 1 to 5
 * @returns {{ tipPercentage: number, tipAmount: number, totalAmount: number } | null}
 */
export function calculateTip(billAmount, serviceRating) {
  // Your code here
  if ( billAmount <= 0 ) return null
  if ( 
    serviceRating !== 1 &&
    serviceRating !== 2 && 
    serviceRating !== 3 &&
    serviceRating !== 4 && 
    serviceRating !== 5 
  ) return null

  const billObject = {}

  if (serviceRating === 1) {
    const tipAmount = billAmount * 0.05

    billObject.tipPercentage = 5
    billObject.tipAmount = Number(tipAmount.toFixed(2))
    billObject.totalAmount = Number((billAmount + tipAmount).toFixed(2))
  } 
  if (serviceRating === 2){
    const tipAmount = billAmount * 0.10

    billObject.tipPercentage = 0.10 * 100
    billObject.tipAmount = Number(tipAmount.toFixed(2))
    billObject.totalAmount = Number((billAmount + tipAmount).toFixed(2))
  } 
  if (serviceRating === 3){
    const tipAmount = billAmount * 0.15

    billObject.tipPercentage = 0.15 * 100
    billObject.tipAmount = Number(tipAmount.toFixed(2))
    billObject.totalAmount = Number((billAmount + tipAmount).toFixed(2))
  } 
  if (serviceRating === 4){
    const tipAmount = billAmount * 0.20

    billObject.tipPercentage = 0.20 * 100
    billObject.tipAmount = Number(tipAmount.toFixed(2))
    billObject.totalAmount = Number((billAmount + tipAmount).toFixed(2))
  } 
  if (serviceRating === 5){
    const tipAmount = billAmount * 0.25

    billObject.tipPercentage = 0.25 * 100
    billObject.tipAmount = Number(tipAmount.toFixed(2))
    billObject.totalAmount = Number((billAmount + tipAmount).toFixed(2))
  } 

  return billObject
}
