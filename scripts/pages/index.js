//import recipes from '../../data'
//const recipes = require('../../data');
function getRecipes() {
    
    return recipes;
}

function displayData(recipes) {
    // To generate recipes cards
    const recipesCardsSection = document.querySelector(".cards-section");

    const ingrediantsDropdown = document.getElementById("dropdown-ingrediants-lists");
    let ingrediantsListNotUnique = [];
    let ingrediantsListUnique = [];
    let appliancesListNotUnique = [];
    let appliancesListUnique = [];
    let ustensilsListNotUnique = [];
    let ustensilsListUnique = [];

    let elementInDropdownCounter = 0;

    const inputValue = "Tart";
    const inputLength = inputValue.length;
    if (inputLength > 3){
        const regexp = new RegExp(inputValue, 'i');
        recipes = recipes.filter(x => regexp.test(x.name));
    }
    recipes.forEach((recipe) => {
        
        const recipesCardsModel = recipesCardsFactory(recipe);
        const userCardDOM = recipesCardsModel.getRecipesCardDOM();
        recipesCardsSection.appendChild(userCardDOM);

        // TODO check unicity of each values before pass it to the factory
        
        //const ingrediantDropDownModel = elementDropDownListFactory(recipe);
        //const listElementContainerDOM = ingrediantDropDownModel.getElementListDropDownDOM("ingredients");
        
        //ingrediantDropDownModel.getElementListDropDownDOM("appliance");
        //ingrediantDropDownModel.getElementListDropDownDOM("ustensils");
        //ingrediantsDropdown.appendChild(listElementContainerDOM);
        

        ingrediantsListNotUnique.push(recipe.ingredients[0].ingredient);
        appliancesListNotUnique.push(recipe.appliance);

        //ustensilsListNotUnique.push(recipe.ustensils);
        ustensilsListNotUnique = ustensilsListNotUnique.concat(recipe.ustensils)
        //console.log(ingrediants);

    });

    ingrediantsListNotUnique.forEach((ingrediant) => {
            
        //ingrediants.push(ingrediant.ingredient);
        if(ingrediantsListUnique.indexOf(ingrediant) === -1) {
            ingrediantsListUnique.push(ingrediant);
            
        }
    });

    appliancesListNotUnique.forEach((appliance) => {
            
        //ingrediants.push(ingrediant.ingredient);
        if(appliancesListUnique.indexOf(appliance) === -1) {
            appliancesListUnique.push(appliance);
            
        }
    });

    ustensilsListNotUnique.forEach((ustensil) => {
            
        //ingrediants.push(ingrediant.ingredient);
        if(ustensilsListUnique.indexOf(ustensil) === -1) {
            ustensilsListUnique.push(ustensil);
            
        }
    });

    ingrediantsListUnique.forEach((ingrediant) => {
        elementInDropdownCounter +=1;
        const ingrediantDropDownModel = elementDropDownListFactory(ingrediant);
        const listElementContainerDOM = ingrediantDropDownModel.getElementListDropDownDOM("ingredients", elementInDropdownCounter);
        
        
    });
    
    elementInDropdownCounter = 0;
    appliancesListUnique.forEach((appliance) => {
        elementInDropdownCounter +=1;
        const ingrediantDropDownModel = elementDropDownListFactory(appliance);
        
        ingrediantDropDownModel.getElementListDropDownDOM("appliance", elementInDropdownCounter);

        
    });
    //console.log(ustensilsListUnique);
    elementInDropdownCounter = 0;
    ustensilsListUnique.forEach((ustensil) => {
        elementInDropdownCounter +=1;
        const ingrediantDropDownModel = elementDropDownListFactory(ustensil);
        ingrediantDropDownModel.getElementListDropDownDOM("ustensils", elementInDropdownCounter);

    });
    

};

function init() {
    // Récupère les datas des photographes
    const recipes = getRecipes();
    displayData(recipes);
};

init();