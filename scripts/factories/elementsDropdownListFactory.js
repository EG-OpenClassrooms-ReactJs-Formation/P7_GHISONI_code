function elementDropDownListFactory(data, selectedElement) {
    
    element = data
    console.log(element.ingredients.length)
    //console.log(element.ingredients[0].ingredient)
    const picture = 'assets/Solid_grey.png';

    function getElementListDropDownDOM(elementName) {
        // declare the element card
        //const elementsContainer = document.createElement('div');
        //elementsContainer.setAttribute("id", "elements-container-ingrediants");
        const elementsContainer = document.getElementById("dropdown-"+elementName+"-lists");
        // declare recette-list-ingrediants

        var elementList1 = 0;
        var elementList2 = 0;
        var elementList3 = 0;
        if(!document.getElementById(elementName +"-list-1")){
            console.log('test done');
            elementList1 = document.createElement( 'ul' );
            elementList1.setAttribute("id", elementName + "-list-1");
            // declare recette-list-ingrediants
            elementList2 = document.createElement( 'ul' );
            elementList2.setAttribute("id", elementName + "-list-2");

            // declare recette-list-ingrediants
            elementList3 = document.createElement( 'ul' );
            elementList3.setAttribute("id", elementName + "-list-3");
        
        } else{
            elementList1 = document.getElementById(elementName +"-list-1");
        
            elementList2 = document.getElementById(elementName +"-list-2");

            elementList3 = document.getElementById(elementName +"-list-3");
        }

        if (elementName == "ingredients"){
            
            for (var i = 0; i < element.ingredients.length; i++) {
                
                var li = document.createElement('li');
                var elementName = document.createElement('p');
                elementName.textContent = element.ingredients[i].ingredient;
                li.appendChild(elementName);
                if(i%3 == 0){
                    elementList1.appendChild(li);
                }
                if(i%3 == 1){
                    elementList2.appendChild(li);
                }
                if(i%3 == 2){
                    elementList3.appendChild(li);
                }
            }
        }
        /*
        if (elementName == "appliance"){
            var li = document.createElement('li');
            var elementName = document.createElement('p');
            elementName.textContent = element.ingredients[i].ingredient;
            li.appendChild(elementName);
            if(i%3 == 0){
                elementList1.appendChild(li);
            }
            if(i%3 == 1){
                elementList2.appendChild(li);
            }
            if(i%3 == 2){
                elementList3.appendChild(li);
            }
        }*/

        if (elementName == "ustensils"){
            for (var i = 0; i < element.ustensils.length; i++) {
                
                var li = document.createElement('li');
                var elementName = document.createElement('p');
                elementName.textContent = element.ustensils[i]
                li.appendChild(elementName);
                if(i%3 == 0){
                    elementList1.appendChild(li);
                }
                if(i%3 == 1){
                    elementList2.appendChild(li);
                }
                if(i%3 == 2){
                    elementList3.appendChild(li);
                }
            }
        }
        if(!document.getElementById(elementName +"-list-1")){
            // Append child in elementsContainer
            elementsContainer.appendChild(elementList1);
            elementsContainer.appendChild(elementList2);
            elementsContainer.appendChild(elementList3);
        }



        return (elementsContainer);
    }
    return { name, picture, getElementListDropDownDOM }
}