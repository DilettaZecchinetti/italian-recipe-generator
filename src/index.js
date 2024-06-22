function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "Ricetta per la bruschetta tipica italiana",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#recipe-form-generator");
recipeFormElement.addEventListener("submit", generateRecipe);
