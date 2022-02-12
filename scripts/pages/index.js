//import recipes from '../../data'
//const recipes = require('../../data');
function getRecipes() {
    console.log(recipes);
    return recipes;
}

function displayData(recipes) {
    const recipesCardsSection = document.querySelector(".cards-section");
    console.log(recipes);
    recipes.forEach((recipe) => {
        console.log(recipe);
        const recipesCardsModel = recipesCardsFactory(recipe);
        const userCardDOM = recipesCardsModel.getRecipesCardDOM();
        recipesCardsSection.appendChild(userCardDOM);
    });
};

function init() {
    // Récupère les datas des photographes
    const recipes = getRecipes();
    displayData(recipes);
};

init();