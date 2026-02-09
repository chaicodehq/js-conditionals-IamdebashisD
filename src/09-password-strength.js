/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here

  let capLetters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
    'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 
    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 
    'Y', 'Z'
  ]

  let smallLetter = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 
    'h', 'i', 'j', 'k', 'l', 'm', 'n', 
    'o', 'p', 'q', 'r', 's', 't', 'u', 
    'v', 'w', 'x', 'y', 'z'
  ]

  let specialChar = [
    '!', '@', '#', '$', '%', '^', '&',
    '*', '(', ')', '_', '+', '-', '=', 
    '[', ']', '{', '}', '|', ';', ':', 
    ',', '.', '<', '>', '?'
  ]

  let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']


  if(typeof password !== "string" || password.trim().length === 0) return "weak"

  const isLong = password.length >= 8;
  const atLeastOneUpperChar = [...password].some(char => capLetters.includes(char))
  const atLeastOneLowerChar = [...password].some(char => smallLetter.includes(char))
  const atLeastOneNumber = [...password].some(char => numbers.includes(char))
  const oneSpecialChar = [...password].some(char => specialChar.includes(char))

  const criteriaArray = [isLong, atLeastOneUpperChar, atLeastOneLowerChar, atLeastOneNumber, oneSpecialChar]

  const criteriaCount = criteriaArray.filter(items => items === true).length

  if (criteriaCount >= 5) return "very strong"
  if (criteriaCount === 4) return "strong"
  if (criteriaCount === 2 || criteriaCount === 3) return "medium"
  if (criteriaCount === 1) return "weak"
}
