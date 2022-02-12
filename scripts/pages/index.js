//import recipes from '../../data'
//const recipes = require('../../data');
function getRecipes() {
    
    return recipes;
}

function displayData(recipes) {
    // To generate recipes cards
    const recipesCardsSection = document.querySelector(".cards-section");

    const ingrediantsDropdown = document.getElementById("dropdown-ingrediants-lists");
    recipes.forEach((recipe) => {
        
        const recipesCardsModel = recipesCardsFactory(recipe);
        const userCardDOM = recipesCardsModel.getRecipesCardDOM();
        recipesCardsSection.appendChild(userCardDOM);

        
        const ingrediantDropDownModel = elementDropDownListFactory(recipe);
        const listElementContainerDOM = ingrediantDropDownModel.getElementListDropDownDOM("ingredients");
        
        ingrediantDropDownModel.getElementListDropDownDOM("appliance");
        ingrediantDropDownModel.getElementListDropDownDOM("ustensils");
        //ingrediantsDropdown.appendChild(listElementContainerDOM);
        
        
    });

    
    
    /*
    recipes.forEach((recipe) => {
        
        
    });*/
    

};

function init() {
    // Récupère les datas des photographes
    const recipes = getRecipes();
    displayData(recipes);
};

init();