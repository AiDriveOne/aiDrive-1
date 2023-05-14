// Define a function to generate text
function generateText() {
  // Define your dataset
  var dataset = [...] // Your dataset of text samples
  
  // Select a random text sample from the dataset
  var randomIndex = Math.floor(Math.random() * dataset.length);
  var randomText = dataset[randomIndex];
  
  // Return the generated text
  return randomText;
}

// Usage example
var generatedText = generateText();
console.log(generatedText);
