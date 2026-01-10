/**
 * Convert text to snake case
 * @param {string} text - The text to convert
 * @returns {string} The text in snake case
 */
function toSnakeCase(text) {
  return text
    .replace(/([A-Z])/g, '_$1') // Insert underscore before uppercase letters
    .replace(/\s+/g, '_') // Replace spaces with underscores
    .replace(/_+/g, '_') // Replace multiple underscores with single underscore
    .toLowerCase() // Convert to lowercase
    .replace(/^_/, ''); // Remove leading underscore if present
}

module.exports = { toSnakeCase };
