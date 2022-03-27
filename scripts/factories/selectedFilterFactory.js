function savedFilterFactory(data) {
    
    element = data;
    
    function getSavedFilterElementDOM(selectedElementType) {
        
        const elementsRow = document.getElementById("saved-filter-row");
        
        var elementContainer = document.createElement('div');
        //elementContainer.setAttribute("class", "saved-element-filter");

        var elementName = document.createElement('p');
        elementName.setAttribute("class", "saved-element-text");
        elementName.textContent = element;

        const elementIcon = document.createElement( 'i' );
        elementIcon.setAttribute("class", "far fa-times-circle time-circle-icon");
        // The type should make applies the write class on the element
        if (selectedElementType == "ingredient"){
            elementContainer.setAttribute("class", "saved-element-filter saved-ingredient-filter");
        }

        
        if (selectedElementType == "appliance"){
            elementContainer.setAttribute("class", "saved-element-filter saved-appliance-filter");
        }

        if (selectedElementType == "ustensil"){
            elementContainer.setAttribute("class", "saved-element-filter saved-ustensils-filter");
            
        }
        elementContainer.appendChild(elementName);
        elementContainer.appendChild(elementIcon);

        elementsRow.appendChild(elementContainer);
        return (elementContainer);
    }
    return { getSavedFilterElementDOM }
}