// define necessary variables
let chatbotInput = document.getElementById("chatbot-input");
let chatbotOutput = document.getElementById("chatbot-output");
let chatbotSubmit = document.getElementById("chatbot-submit");

// add event listener to submit button
chatbotSubmit.addEventListener("click", function() {
  // get user input
  let input = chatbotInput.value;

  // send input to server for processing
  sendToServer(input, function(response) {
    // display response to user
    chatbotOutput.innerHTML = response;
  });

  // clear input field
  chatbotInput.value = "";
});

// function to send user input to server for processing
function sendToServer(input, callback) {
  // send HTTP request to server with user input as data
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/api/chatbot");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = function() {
    // handle response from server
    if (xhr.status === 200) {
      callback(xhr.responseText);
    } else {
      console.log("Error: " + xhr.status);
    }
  };
  xhr.send(JSON.stringify({ "input": input }));
}
