// Array of emojis for mapping
const emojis = [
    '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇',
    '🙂', '🙃', '😉', '😌', '😍', '😘', '😗', '😙', '😚', '😋',
    '😛', '😜', '🤪', '😝', '🤑', '🤗', '🤭', '🤫', '🤔', '🤐',
    '🤨', '😐', '😑', '😶', '😏', '😒', '🙄', '😬', '🤥', '😌',
    // Add more emojis as needed
];

// Function to encrypt text to emojis
function encryptToEmojis(text) {
    return text.split('').map(char => {
        const charCode = char.charCodeAt(0);
        return emojis[charCode % emojis.length];
    }).join('');
}

// Function to decrypt emojis back to text
function decryptFromEmojis(encryptedText) {
    return encryptedText.split('').map(emoji => {
        const emojiIndex = emojis.indexOf(emoji);
        // Assuming the original character code is the one closest to the emoji index
        return String.fromCharCode(emojiIndex);
    }).join('');
}

// Example usage
const originalText = "Hello World!";
const encryptedText = encryptToEmojis(originalText);
console.log('Encrypted:', encryptedText);

const decryptedText = decryptFromEmojis(encryptedText);
console.log('Decrypted:', decryptedText);
