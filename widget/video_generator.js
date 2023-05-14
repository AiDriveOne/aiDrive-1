// Define a function to generate a video
function generateVideo() {
  // Define your video sources
  var videoSources = [...] // Your array of video sources
  
  // Select a random video source
  var randomIndex = Math.floor(Math.random() * videoSources.length);
  var randomVideoSource = videoSources[randomIndex];
  
  // Create a video element
  var video = document.createElement("video");
  
  // Set the video source
  video.src = randomVideoSource;
  
  // Set video attributes (optional)
  video.autoplay = true;
  video.controls = true;
  
  // Append the video to a container element
  var container = document.getElementById("video-container"); // Replace "video-container" with the ID of your container element
  container.appendChild(video);
}

// Usage example
generateVideo();
