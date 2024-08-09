// 1. Encrypting Text in Node.js

const crypto = require('crypto');

// Define the encryption key and IV (Initialization Vector)
const key = Buffer.from('32characterslongpassphrase123456', 'utf-8'); // 32 bytes key
const iv = Buffer.from('16byteslongiv123', 'utf-8'); // 16 bytes IV

// Function to encrypt the text
function encrypt(text) {
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(text, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    return {
        iv: iv.toString('base64'),
        encryptedData: encrypted,
        key: key.toString('hex')
    };
}

// Example usage
const encrypted = encrypt('Hello from Node.js!');
console.log('Encrypted Text:', encrypted.encryptedData);
console.log('IV:', encrypted.iv);
console.log('Key:', encrypted.key);







// const crypto = require('crypto');

// // Define the encryption key and IV (Initialization Vector)
// const key = crypto.randomBytes(32); // 32 bytes key for AES-256
// const iv = crypto.randomBytes(16); // 16 bytes IV for AES

// // Function to encrypt the text
// function encrypt(text) {
//     const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
//     let encrypted = cipher.update(text, 'utf8', 'base64');
//     encrypted += cipher.final('base64');
//     return {
//         iv: iv.toString('base64'),
//         encryptedData: encrypted,
//         key: key.toString('hex')
//     };
// }

// // Example usage
// const encrypted = encrypt('Hello from Node.js!');
// console.log('Encrypted Text:', encrypted.encryptedData);
// console.log('IV:', encrypted.iv);
// console.log('Key:', encrypted.key);
