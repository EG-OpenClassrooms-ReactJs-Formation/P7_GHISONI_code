function elementDropDownListFactory(data, selectedElement) {
    
    element = data;
    
    function getElementListDropDownDOM(elementName, elementInDropdownCounter) {
        //console.log(element);
        // declare the element card
        //const elementsContainer = document.createElement('div');
        //elementsContainer.setAttribute("id", "elements-container-ingrediants");
        const elementsContainer = document.getElementById("dropdown-"+elementName+"-lists");
        // declare recette-list-ingrediants
        
        var elementList1 = 0;
        var elementList2 = 0;
        var elementList3 = 0;
        
        if(!document.getElementById(elementName +"-list-1")){
            console.log('First declaration of the ul list');
            elementList1 = document.createElement( 'ul' );
            
            
            // declare recette-list-ingrediants
            elementList2 = document.createElement( 'ul' );
            
            

            // declare recette-list-ingrediants
            elementList3 = document.createElement( 'ul' );
            
            
            elementList1.setAttribute("id", elementName + "-list-1");
            elementList2.setAttribute("id", elementName + "-list-2");
            elementList3.setAttribute("id", elementName + "-list-3");

            elementList1.setAttribute("class", "ul-element-list");
            elementList2.setAttribute("class", "ul-element-list");
            elementList3.setAttribute("class", "ul-element-list");
        
        } else{
            
            elementList1 = document.getElementById(elementName +"-list-1");
            
            elementList2 = document.getElementById(elementName +"-list-2");

            elementList3 = document.getElementById(elementName +"-list-3");
        }

        if (elementName == "ingredients"){
            
            var li = document.createElement('li');
            var elementName = document.createElement('p');
            //elementName.textContent = element.ingredients[i].ingredient;
            elementName.setAttribute("class", "filter-ingredient-element");
            elementName.textContent = element;
            li.appendChild(elementName);
            //elementList1.appendChild(li);
            
            if(elementInDropdownCounter%3 == 0){
                elementList1.appendChild(li);
            }
            if(elementInDropdownCounter%3 == 1){
                elementList2.appendChild(li);
            }
            if(elementInDropdownCounter%3 == 2){
                elementList3.appendChild(li);
            }
            
        }

        
        if (elementName == "appliance"){
            var li = document.createElement('li');
            var elementName = document.createElement('p');
            //elementName.setAttribute("class", "filter-text-element");
            elementName.setAttribute("class", "filter-appliance-element");
            elementName.textContent = element;
            li.appendChild(elementName);
            //elementList1.appendChild(li);
            
            if(elementInDropdownCounter % 3 == 0){
                elementList1.appendChild(li);
            }
            if(elementInDropdownCounter % 3 == 1){
                elementList2.appendChild(li);
            }
            if(elementInDropdownCounter %3 == 2){
                elementList3.appendChild(li);
            }
            
        }

        if (elementName == "ustensils"){
            
            var li = document.createElement('li');
            var elementName = document.createElement('p');
            //elementName.textContent = element.ustensils[i]
            elementName.setAttribute("class", "filter-ustensil-element");
            elementName.textContent = element;
            li.appendChild(elementName);
            //elementList1.appendChild(li);
            
            if(elementInDropdownCounter % 3 == 0){
                elementList1.appendChild(li);
            }
            if(elementInDropdownCounter % 3 == 1){
                elementList2.appendChild(li);
            }
            if(elementInDropdownCounter % 3 == 2){
                elementList3.appendChild(li);
            }
            
            
        }
        if(!document.getElementById(elementName +"-list-1")){
            // Append child in elementsContainer
            elementsContainer.appendChild(elementList1);
            elementsContainer.appendChild(elementList2);
            elementsContainer.appendChild(elementList3);
        }
        elementsContainer.appendChild(elementList1);

        
        return (elementsContainer);
    }
    return { getElementListDropDownDOM }
}