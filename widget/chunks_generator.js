// Function to generate chunks for training
function generateChunks() {
  // Define the number of chunks to generate
  const numChunks = 1000;

  // Define the maximum length of each chunk
  const maxChunkLength = 100;

  // Array to store the generated chunks
  const chunks = [];

  // Generate random chunks
  for (let i = 0; i < numChunks; i++) {
    // Generate a random chunk of text
    const chunk = generateRandomText(maxChunkLength);

    // Add the chunk to the array
    chunks.push(chunk);
  }

  // Return the generated chunks
  return chunks;
}

// Function to generate random text
function generateRandomText(maxLength) {
  // Define the characters to choose from
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  // Generate a random length for the text
  const length = Math.floor(Math.random() * maxLength) + 1;

  // Generate the random text
  let text = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    text += characters.charAt(randomIndex);
  }

  // Return the generated text
  return text;
}

// Example usage
const generatedChunks = generateChunks();
console.log(generatedChunks);
