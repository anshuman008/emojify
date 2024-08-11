const ALGO_METHOD = "AEC-GCM";
const CRYPTO_ALGO_NAME = "AES-GCM";

const GenrateUiqueCode = async (data: string) => {
  console.log("this is normal data!!");

  const arr = new Uint8Array(12);
  const iv = window.crypto.getRandomValues(arr);
  const dataInBytes = new TextEncoder().encode(data);
  console.log(iv);

  const key = await window.crypto.subtle.generateKey(
    {
      name: "AES-GCM",
      length: 128,
    },
    true,
    ["encrypt", "decrypt"]
  );

  const encryptedBuffer = await window.crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv,
    },
    key,
    dataInBytes
  );

  console.log(encryptedBuffer, "this is the encrypted Data!!");
};

const EncryptData = async (Text: string, password: string) => {
  GenrateUiqueCode(Text);
  // console.log(Text,password)
};

export { EncryptData };
