// Tensorflow.js
let net;

// HTML Elements
const imageInput = document.getElementById('file-input');
const displayImg = document.getElementById('displayImg')
const predictionConsole = document.getElementById('prediction-console')

async function app() {
  console.log('Loading mobilenet..');

  // Load the model.
  net = await mobilenet.load();
  console.log('Sucessfully loaded model');

  // Make a prediction through the model on our image.
  const result = await net.classify(displayImg);
  result.forEach(function(prediction, index){
      console.log("Prediction", prediction)
      console.log("index", index)
      const predictionElement = document.createElement('h2');
      predictionElement.appendChild(document.createTextNode(`${index + 1}. ${prediction.className} - ${Math.round(prediction.probability * 100)}%`))
    predictionConsole.appendChild(predictionElement)
  })
  console.log(result);
}

imageInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    displayImg.src = URL.createObjectURL(file)
    app();
})

