// Define a function to generate an image
function generateImage() {
  // Define your image sources
  var imageSources = [...] // Your array of image sources
  
  // Select a random image source
  var randomIndex = Math.floor(Math.random() * imageSources.length);
  var randomImageSource = imageSources[randomIndex];
  
  // Create an image element
  var image = document.createElement("img");
  
  // Set the image source
  image.src = randomImageSource;
  
  // Append the image to a container element
  var container = document.getElementById("image-container"); // Replace "image-container" with the ID of your container element
  container.appendChild(image);
}

// Usage example
generateImage();
