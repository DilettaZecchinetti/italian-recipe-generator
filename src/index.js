function displayRecipe(response) {
  console.log("recipe generated");
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "dbo60f7a4472d0ade271b940ftf815f3";
  let context =
    "You are an Italian chef and love to create easy and simple authentic Italian recipes. Your mission is to create a very simple and tasty recipe in basic HTML. Make sure to follow the user instructions";
  let prompt = `User instructions: generate an Italian recipe that contains ${instructionsInput.value}. First of all you have to show the name of the recipe. Then you have to list all the ingredients for the recipe first followed by the recipe instructions. At the end always say  <strong>Buon Appetito!</strong>`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating recipe");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-form-generator");
recipeFormElement.addEventListener("submit", generateRecipe);
