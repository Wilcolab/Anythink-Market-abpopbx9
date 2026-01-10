/**
 * Converts a given string to camel case format.
 * 
 * Camel case format capitalizes the first letter of each word except for the first word,
 * and removes spaces, underscores, and hyphens.
 * 
 * @param {string} str - The input string to be converted to camel case.
 * @throws {Error} Throws an error if the input is not a string.
 * @returns {string} The camel case formatted string.
 * 
 * @example
 * console.log(toCamelCase("first name")); // "firstName"
 * console.log(toCamelCase("user_id")); // "userId"
 * console.log(toCamelCase("SCREEN_NAME")); // "screenName"
 * console.log(toCamelCase(" mobile-number ")); // "mobileNumber"
 * console.log(toCamelCase("")); // ""
 */

/**
 * Converts a given string to dot case format.
 * 
 * Dot case format converts all words to lowercase and joins them with dots,
 * removing spaces, underscores, and hyphens.
 * 
 * @param {string} str - The input string to be converted to dot case.
 * @throws {Error} Throws an error if the input is not a string.
 * @returns {string} The dot case formatted string.
 * 
 * @example
 * console.log(toDotCase("first name")); // "first.name"
 * console.log(toDotCase("user_id")); // "user.id"
 * console.log(toDotCase("SCREEN_NAME")); // "screen.name"
 * console.log(toDotCase(" mobile-number ")); // "mobile.number"
 * console.log(toDotCase("")); // ""
 */
function toCamelCase(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }

    // Trim the string and replace spaces, underscores, and hyphens
    return str
        .trim()
        .split(/[\s_-]+/) // Split by spaces, underscores, or hyphens
        .map((word, index) => {
            // Convert the first word to lowercase and capitalize the rest
            return index === 0 
                ? word.toLowerCase() 
                : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(''); // Join the words back together
}

// Example usage
console.log(toCamelCase("first name")); // "firstName"
console.log(toCamelCase("user_id")); // "userId"
console.log(toCamelCase("SCREEN_NAME")); // "screenName"
console.log(toCamelCase(" mobile-number ")); // "mobileNumber"
console.log(toCamelCase("")); // ""
function toDotCase(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }

    // Trim the string and replace spaces, underscores, and hyphens
    return str
        .trim()
        .split(/[\s_-]+/) // Split by spaces, underscores, or hyphens
        .map(word => word.toLowerCase()) // Convert all words to lowercase
        .join('.'); // Join the words with dots
}

// Example usage
console.log(toDotCase("first name")); // "first.name"
console.log(toDotCase("user_id")); // "user.id"
console.log(toDotCase("SCREEN_NAME")); // "screen.name"
console.log(toDotCase(" mobile-number ")); // "mobile.number"
console.log(toDotCase("")); // ""