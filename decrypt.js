// From Flutter
// Encrypted (Base64): eE8wSP/yuP5UQJlJ4Wak2tdLM4hteJb9DCBobaffmdA=
// IV (Base64): MTZieXRlc2xvbmdpdjEyMw==
// Key (Hex): 3332636861726163746572736c6f6e6770617373706872617365313233343536

// **********  Decrypting Text in Node.js *************
const crypto = require('crypto');

// Key and IV must match what was used in Flutter
const key = Buffer.from('32characterslongpassphrase123456', 'utf-8'); // 32 bytes key
const iv = Buffer.from('16byteslongiv123', 'utf-8'); // 16 bytes IV

// Function to decrypt the text
function decrypt(encryptedText) {
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    let decrypted = decipher.update(encryptedText, 'base64', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

// Encrypted text from Flutter (base64 encoded)
const encryptedText = 'eE8wSP/yuP5UQJlJ4Wak2tdLM4hteJb9DCBobaffmdA='; // Replace with actual encrypted text

// Decrypt the text
const decryptedText = decrypt(encryptedText);
console.log('Decrypted:', decryptedText);


// ****** Example with Actual Data ************
// const crypto = require('crypto');

// // Convert the key from hex
// const key = Buffer.from('3332636861726163746572736c6f6e6770617373706872617365313233343536', 'hex');
// // Convert the IV from base64
// const iv = Buffer.from('MTZieXRlc2xvbmdpdjEyMw==', 'base64');

// // Function to decrypt the text
// function decrypt(encryptedText) {
//     const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
//     let decrypted = decipher.update(encryptedText, 'base64', 'utf8');
//     decrypted += decipher.final('utf8');
//     return decrypted;
// }

// // Encrypted text from Flutter (base64 encoded)
// const encryptedText = 'eE8wSP/yuP5UQJlJ4Wak2tdLM4hteJb9DCBobaffmdA='; // Replace with actual encrypted text

// // Decrypt the text
// const decryptedText = decrypt(encryptedText);
// console.log('Decrypted:', decryptedText);




