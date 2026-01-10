/**
 * Converts a string to kebab-case format
 * @param {string} input - The string to convert
 * @returns {string} The kebab-case converted string
 * @throws {TypeError} If input is not a string
 */
function toKebabCase(input) {
    // Input validation
    if (typeof input !== 'string') {
        throw new TypeError(`Expected string, but received ${typeof input}`);
    }

    // Handle empty strings
    if (input.length === 0) {
        return '';
    }

    return input
        // Insert hyphen before uppercase letters (for camelCase conversion)
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        // Replace spaces, underscores, and dots with hyphens
        .replace(/[\s_.]+/g, '-')
        // Convert to lowercase
        .toLowerCase()
        // Remove leading/trailing hyphens
        .replace(/^-+|-+$/g, '');
}

// Example usages:
// toKebabCase('helloWorld') → 'hello-world'
// toKebabCase('HelloWorld') → 'hello-world'
// toKebabCase('hello_world') → 'hello-world'
// toKebabCase('hello.world') → 'hello-world'
// toKebabCase('hello world') → 'hello-world'
// toKebabCase('') → ''
// toKebabCase(123) → throws TypeError
// toKebabCase(null) → throws TypeError