//import recipes from '../../data'
//const recipes = require('../../data');

const searchField = document.getElementById("search-input");

const ingredientSearchField = document.getElementById("ingredient-input");
const applianceSearchField = document.getElementById("appliance-input");
const ustensilsSearchField = document.getElementById("ustensils-input");

//searchField.onkeyup = updateInput();
window.updateFilterRequired = true;
let elementListContainer = document.querySelectorAll('.dropdown-element-lists');
const recipesCardsSection = document.querySelector(".cards-section");


searchField.addEventListener("keyup", updateInput);
ingredientSearchField.addEventListener("keyup", updateInput);


//applianceSearchField.addEventListener("keyup", updateElementListInput);
//ustensilsSearchField.addEventListener("keyup", updateElementListInput);

function updateIngredientListInput(){
    const inputValue = ingredientSearchField.value;
    const inputLength = inputValue.length;

    let ingrediantsListUniqueFiltered = []
    if (inputLength > 1){
        const regexpSearch = new RegExp(inputValue, 'i');
        ingrediantsListUniqueFiltered = ingrediantsListUnique.filter(x => regexpSearch.test(x));
    }
    else{
        ingrediantsListUniqueFiltered = ingrediantsListUnique;
    }
    return ingrediantsListUniqueFiltered;
}
// Get input components

const ingredientInput = document.getElementById("ingredient-input");
const applianceInput = document.getElementById("appliance-input");
const ustensilInput = document.getElementById("ustensils-input");

//ingredientInput.addEventListener("click", () =>showUlSelection("ingredient"));
//applianceInput.addEventListener("click", () =>showUlSelection("appliance"));
//ustensilInput.addEventListener("click", () =>showUlSelection("ustensils"));
//ingredientInput.addEventListener("focusout", hideUlSelection);
showDropdown = true;
function showUlSelection(dataType){
    if(showDropdown){
        if(dataType === "ingredient"){
            document.getElementById("ingredients-list-1").style.display = "block";
            document.getElementById("ingredients-list-2").style.display = "block";
            document.getElementById("ingredients-list-3").style.display = "block";
        }
        
        if(dataType === "appliance"){
            document.getElementById("appliance-list-1").style.display = "block";
            document.getElementById("appliance-list-2").style.display = "block";
            document.getElementById("appliance-list-3").style.display = "block";
        }

        
        if(dataType === "ustensils"){
            document.getElementById("ustensils-list-1").style.display = "block";
            document.getElementById("ustensils-list-2").style.display = "block";
            document.getElementById("ustensils-list-3").style.display = "block";
        }
    }
    
    
    else{
        if(dataType === "ingredient"){
            document.getElementById("ingredients-list-1").style.display = "none";
            document.getElementById("ingredients-list-2").style.display = "none";
            document.getElementById("ingredients-list-3").style.display = "none";
        }
        
        if(dataType === "appliance"){
            document.getElementById("appliance-list-1").style.display = "none";
            document.getElementById("appliance-list-2").style.display = "none";
            document.getElementById("appliance-list-3").style.display = "none";
        }

        
        if(dataType === "ustensils"){
            document.getElementById("ustensils-list-1").style.display = "none";
            document.getElementById("ustensils-list-2").style.display = "none";
            document.getElementById("ustensils-list-3").style.display = "none";
        }
    }
    //showDropdown = !showDropdown;
}
/*
function hideUlSelection(){
    
}
*/


function getRecipes()
{
    return recipes;
}

function displayData(recipes) {
    let ingrediantsListNotUnique = [];
    let ingrediantsListUnique = [];
    let appliancesListNotUnique = [];
    let appliancesListUnique = [];
    let ustensilsListNotUnique = [];
    let ustensilsListUnique = [];
    // To generate recipes cards
    // const recipesCardsSection = document.querySelector(".cards-section");

    const ingrediantsDropdown = document.getElementById("dropdown-ingrediants-lists");
    

    let elementInDropdownCounter = 0;

    recipes.forEach((recipe) => {
        
        const recipesCardsModel = recipesCardsFactory(recipe);
        const userCardDOM = recipesCardsModel.getRecipesCardDOM();
        recipesCardsSection.appendChild(userCardDOM);

        
        // TODO improve filter for recipes
        recipe.ingredients.forEach((ingredient) => {
            ingrediantsListNotUnique.push(ingredient.ingredient);
        });
        
        appliancesListNotUnique.push(recipe.appliance);

        //ustensilsListNotUnique.push(recipe.ustensils);
        ustensilsListNotUnique = ustensilsListNotUnique.concat(recipe.ustensils)
        //console.log(ingrediants);

    });
    //displayFilterContent();
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
    elementInDropdownCounter = 0;
    window.ingrediantsListUnique = ingrediantsListUnique;
    ingrediantsListUnique = updateIngredientListInput();
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
    if(window.ingredientArray){
        //console.log("Launch factory filters")
        window.ingredientArray.forEach((element) => {
            const ingredientSavedFilterModel = savedFilterFactory(element);
            ingredientSavedFilterModel.getSavedFilterElementDOM("ingredient");

        });
    }

    if(window.applianceArray){
        
        window.applianceArray.forEach((element) => {
            const ingredientSavedFilterModel = savedFilterFactory(element);
            ingredientSavedFilterModel.getSavedFilterElementDOM("appliance");

        });
    }

    if(window.ustensilArray){
        
        window.ustensilArray.forEach((element) => {
            const ingredientSavedFilterModel = savedFilterFactory(element);
            ingredientSavedFilterModel.getSavedFilterElementDOM("ustensil");

        });
    }
    
    
    const IngredientFilterComponent = document.querySelectorAll(".filter-ingredient-element");
    const ApplianceFilterComponent = document.querySelectorAll(".filter-appliance-element");
    const UstensilFilterComponent = document.querySelectorAll(".filter-ustensil-element");

    getDropDownElementChoice(IngredientFilterComponent, "ingredient");
    getDropDownElementChoice(ApplianceFilterComponent, "appliance");
    getDropDownElementChoice(UstensilFilterComponent, "ustensil");
    
    const SavedIngredientFilterComponent = document.querySelectorAll(".saved-ingredient-filter");
    const SavedApplianceFilterComponent = document.querySelectorAll(".saved-appliance-filter");
    const SavedUstensilFilterComponent = document.querySelectorAll(".saved-ustensils-filter");
    deleteSavedChoice(SavedIngredientFilterComponent, "ingredient");
    deleteSavedChoice(SavedApplianceFilterComponent, "appliance");
    deleteSavedChoice(SavedUstensilFilterComponent, "ustensil");

};

function displayFilterContent(){
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
    elementInDropdownCounter = 0;
    ingrediantsListUnique = updateIngredientListInput(ingrediantsListUnique);
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
    if(window.ingredientArray){
        //console.log("Launch factory filters")
        window.ingredientArray.forEach((element) => {
            const ingredientSavedFilterModel = savedFilterFactory(element);
            ingredientSavedFilterModel.getSavedFilterElementDOM("ingredient");

        });
    }

    if(window.applianceArray){
        
        window.applianceArray.forEach((element) => {
            const ingredientSavedFilterModel = savedFilterFactory(element);
            ingredientSavedFilterModel.getSavedFilterElementDOM("appliance");

        });
    }

    if(window.ustensilArray){
        
        window.ustensilArray.forEach((element) => {
            const ingredientSavedFilterModel = savedFilterFactory(element);
            ingredientSavedFilterModel.getSavedFilterElementDOM("ustensil");

        });
    }
    
    
    const IngredientFilterComponent = document.querySelectorAll(".filter-ingredient-element");
    const ApplianceFilterComponent = document.querySelectorAll(".filter-appliance-element");
    const UstensilFilterComponent = document.querySelectorAll(".filter-ustensil-element");

    getDropDownElementChoice(IngredientFilterComponent, "ingredient");
    getDropDownElementChoice(ApplianceFilterComponent, "appliance");
    getDropDownElementChoice(UstensilFilterComponent, "ustensil");
    
    const SavedIngredientFilterComponent = document.querySelectorAll(".saved-ingredient-filter");
    const SavedApplianceFilterComponent = document.querySelectorAll(".saved-appliance-filter");
    const SavedUstensilFilterComponent = document.querySelectorAll(".saved-ustensils-filter");
    deleteSavedChoice(SavedIngredientFilterComponent, "ingredient");
    deleteSavedChoice(SavedApplianceFilterComponent, "appliance");
    deleteSavedChoice(SavedUstensilFilterComponent, "ustensil");
}

function getIngredientFilteredRecipes(recipes){
    let filteredRecipesList = [];
    recipes.forEach(recipe => {
        let filterFound = 0;
        let alreadyAdded = false;
        recipe.ingredients.forEach(ingredient => {
            
            if(window.ingredientArray.includes(ingredient.ingredient)){
                filterFound +=1;
                //filteredRecipesList.push(recipe);
                
            }
            if(filterFound == window.ingredientArray.length && alreadyAdded == false){
                filteredRecipesList.push(recipe);
                alreadyAdded = true;
            }
        })
        
    });

    return filteredRecipesList;
}
function getUstensilFilteredRecipes(recipes){
    let filteredRecipesList = [];
    recipes.forEach(recipe => {
        let filterFound = 0;
        let alreadyAdded = false;
        recipe.ustensils.forEach(ustensil => {
            
            if(window.ustensilArray.includes(ustensil)){
                filterFound +=1;
                //filteredRecipesList.push(recipe);
                
            }
            if(filterFound == window.ustensilArray.length && alreadyAdded == false){
                filteredRecipesList.push(recipe);
                alreadyAdded = true;
            }
        })
        
    });

    return filteredRecipesList;
}



function init() {
    // Récupère les datas des photographes
    const recipes = getRecipes();
    displayData(recipes);
};


function updateInput() {

    //console.log("Update values");

    // Get data from dataset
    let recipes = getRecipes();
    
    const inputValue = searchField.value;
    const inputLength = inputValue.length;

    // Filter the ingredients in the window.ingredientArray
    
    if(window.ingredientArray){
        if(window.ingredientArray.length !== 0){

            recipes = getIngredientFilteredRecipes(recipes);
        }
        
        //console.log(recipes);
    }
    
    
    if(window.applianceArray){
        window.applianceArray.forEach(appliance => {
            //console.log("done");
            let regexpAppliance = new RegExp(appliance, 'i');
            recipes = recipes.filter(x => regexpAppliance.test(x.appliance));
        });
    }

    if(window.ustensilArray){
        if(window.ustensilArray.length !== 0){
            
            recipes = getUstensilFilteredRecipes(recipes);
            
        }
        
        //console.log(recipes);
    }
    
    
    if (inputLength > 3){
        const regexpSearch = new RegExp(inputValue, 'i');
        let recipesFiltered = recipes.filter(x => regexpSearch.test(x.name));
        

        clearComponents();
        displayData(recipesFiltered);
    }
    else{
        clearComponents();
        displayData(recipes);
    }
    
};

// Clear the dropdown content
function clearComponents(){
    //elementListContainer = [...elementListContainer].forEach(child => child.innerHTML = '');
    
    // Clear saved Filter row

    var filterRow = document.getElementById("saved-filter-row");
    filterRow.innerHTML = '';
    
    elementListContainer.forEach(element =>{
        
        var child = element.lastElementChild; 
        while (child) {
            element.removeChild(child);
            child = element.lastElementChild;
        }
        //element.remove();
        
    });
    
    var cardChild = recipesCardsSection.lastElementChild;
    while (cardChild) {
        recipesCardsSection.removeChild(cardChild);
        cardChild = recipesCardsSection.lastElementChild;
    }
}

function getDropDownElementChoice(ElementFilterComponent, dataType){
    ElementFilterComponent.forEach(elementFilter => {
        elementFilter.addEventListener('click', function handleClick(event){
            //console.log(elementFilter.textContent);
            if (dataType==="ingredient"){
                if(!window.ingredientArray){
                    window.ingredientArray = []
                }
                // Add the element into the list if it's not already in
                if(window.ingredientArray.indexOf(elementFilter.textContent) === -1){
                    window.ingredientArray.push(elementFilter.textContent);
                    ingredientInput.value = "";
                }
               
            }
            if (dataType==="appliance"){
                if(!window.applianceArray){
                    window.applianceArray = []
                }
                if(window.applianceArray.indexOf(elementFilter.textContent) === -1){
                    window.applianceArray.push(elementFilter.textContent);
                }
            }
            if (dataType==="ustensil"){
                if(!window.ustensilArray){
                    window.ustensilArray = []
                }
                if(window.ustensilArray.indexOf(elementFilter.textContent) === -1){
                    window.ustensilArray.push(elementFilter.textContent);
                }
            }
            
            
            updateInput();
        })
    });
}

function deleteSavedChoice(ElementFilterComponent, dataType){
    ElementFilterComponent.forEach(elementFilter => {
        elementFilter.addEventListener('click', function handleClick(event){
            var elementText = elementFilter.firstChild.textContent; 
            if (dataType==="ingredient"){
                
                window.ingredientArray = window.ingredientArray.filter(e => e !== elementText);
            }
            if (dataType==="appliance"){
                if(!window.applianceArray){
                    window.applianceArray = []
                }
                window.applianceArray = window.applianceArray.filter(e => e !== elementText);
            }
            if (dataType==="ustensil"){
                window.ustensilArray = window.ustensilArray.filter(e => e !== elementText);
            }
            
            
            updateInput();
        })
    });
}

init();
