function recipesCardsFactory(data) {
    const { name, time, ingredients, description} = data;
    //const name = data.name;
    
    
    const picture = 'assets/Solid_grey.png';

    function getRecipesCardDOM() {
        // declare recette-card
        const recette_card = document.createElement( 'article' );
        recette_card.setAttribute("class", "recette-card");

        // declare recette-card-image-container
        const recette_card_image_container = document.createElement( 'div' );
        recette_card_image_container.setAttribute("class", "recette-card-image-container");
        
        const recette_card_image = document.createElement( 'img' );
        recette_card_image.setAttribute("class", "recette-card-image");
        recette_card_image.setAttribute("src", picture);
        
        // Append child image container
        recette_card_image_container.appendChild(recette_card_image);

        // Create the column info
        const recette_column_infos = document.createElement( 'div' );
        recette_column_infos.setAttribute("class", "recette-column-infos");
        
        // declare recette-card-image-container
        const recette_row_titre_time = document.createElement( 'div' );
        recette_row_titre_time.setAttribute("class", "recette-row-titre-time");

        // declare recette_titre
        const recette_titre = document.createElement( 'p' );
        recette_titre.setAttribute("class", "recette-titre");
        recette_titre.innerHTML = data.name;
        //console.log("name: " + data.name)

        // declare recette_time
        const recette_time = document.createElement( 'div' );
        recette_time.setAttribute("class", "recette-time");

        const recette_time_icone = document.createElement( 'i' );
        recette_time_icone.setAttribute("class", "fa fa-clock");

        const recette_time_value = document.createElement( 'p' );
        recette_time_value.setAttribute("class", "recette-time-value");
        recette_time_value.textContent = time;
        
        recette_time.appendChild(recette_time_icone);
        recette_time.appendChild(recette_time_value);

        // declare recette_time and recette_title as child of recette-row-titre-time
        recette_row_titre_time.appendChild(recette_titre);
        recette_row_titre_time.appendChild(recette_time);

        // declare recette-row-ingrediants-description
        const recette_row_ingrediants_description = document.createElement( 'div' );
        recette_row_ingrediants_description.setAttribute("class", "recette-row-ingrediants-description");
        
        // declare recette-list-ingrediants
        const recette_list_ingrediants = document.createElement( 'ul' );
        recette_list_ingrediants.setAttribute("class", "recette-list-ingrediants");

        for (var i = 0; i < ingredients.length; i++) {
            var name = ingredients[i];
            var li = document.createElement('li');
            var pIngrediant = document.createElement('p');
            var pQuantity = document.createElement('p');
            pIngrediant.setAttribute("class", "recette-ingrediant");
            pQuantity.setAttribute("class", "recette-ingrediant-quantity");
            
            pIngrediant.textContent = ingredients[i].ingredient + ":";
            pQuantity.textContent = ingredients[i].quantity;
            if(ingredients[i].unit){
                pQuantity.textContent += ingredients[i].unit;
            }
            li.appendChild(pIngrediant);
            li.appendChild(pQuantity);
            recette_list_ingrediants.appendChild(li);
        }

        // declare recette-description
        const recette_description = document.createElement( 'p' );
        recette_description.setAttribute("class", "recette-description");
        recette_description.textContent = description;


        // Append child in recette_row_ingrediants_description
        recette_row_ingrediants_description.appendChild(recette_list_ingrediants);
        recette_row_ingrediants_description.appendChild(recette_description);

        // Append child in recette_column_infos
        recette_column_infos.appendChild(recette_row_titre_time);
        recette_column_infos.appendChild(recette_row_ingrediants_description);
        //recette_column_infos.appendChild(recette_row_ingrediants_description);
        
        



        // Append child for the complete card
        recette_card.appendChild(recette_card_image_container);
        recette_card.appendChild(recette_column_infos);
        //recette_card.appendChild(recette_row_ingrediants_description);


        return (recette_card);
    }
    return { name, picture, getRecipesCardDOM }
}