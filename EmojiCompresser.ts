const pako = require('pako')
// Convert emojis to a byte array
const emojiToBytes = (data) => {
  const codePoints = Array.from(data).map((char) => char.codePointAt(0) || 0);
  return new Uint8Array(codePoints);
};

// Compress the byte array using Gzip
const compressBytes = (data) => {
  return pako.deflate(data);
};

// Convert compressed bytes back to emojis
const convertToEmoji = (dataInBytes) => {
  const dataArray = Array.from(new Uint8Array(dataInBytes));
  const emojis = getLargerEmojiSet();
  let res = "";
  dataArray.forEach((data) => {
    res += emojis[data % emojis.length];
  });
  return res;
};

// Get a larger set of emojis for more efficient encoding
const getLargerEmojiSet = () => {
  const startIndex = [
    127744, 128000, 128512, 129280, 129472, 128405, 128718, 129003, 129456,
  ];
  const endIndex = [
    127871, 128063, 128591, 129343, 129535, 128567, 128762, 129072, 129535,
  ];
  let index = 0;
  const emojis = [];
  startIndex.forEach((start, i) => {
    const end = endIndex[i];
    for (let j = start; j <= end; j++) {
      emojis[index] = String.fromCodePoint(j);
      index++;
    }
  });
  return emojis;
};

// Example Usage:
const originalEmojis = "🍶🎻🍹🎒🙀🤐😇🤹🤠🎿🤭🍰😷🍷🍹🧕🎸🎋👍🎌😮🏂🐾😛🤬👍😤🍮🎀🎀😫😂😜🤓🐾🍷😵🧘🤺🙏🤖🍭🐼🐱😄😽🍫🍩😓🐸🍻🧑👇🍵🧟🎱🧟😢🏇🎁😳😗😝😮🙎🏋🤱🏅🤰🤮🧢😢🤐";

const emojiBytes = emojiToBytes(originalEmojis);
const compressedBytes = compressBytes(emojiBytes);
const smallerEmojiSet = convertToEmoji(compressedBytes.buffer);

console.log("Original Length:", originalEmojis.length);
console.log("Compressed Emoji Set:", smallerEmojiSet);
console.log("Compressed Length:", smallerEmojiSet.length);
