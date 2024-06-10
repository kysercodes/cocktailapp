

const container = document.querySelector('#cards-container');

export function displayDrinks(drinks) {
//     if(drinks){
//         container.innerHTML = "";
//   console.log(drinks)
// }
  if (!drinks) {
              container.innerHTML = "";
              const message = document.createElement('p');
              message.innerText = 'Please check the name of the drink you\'re searching for';
              container.appendChild(message);
              return;
           
            }

            container.innerHTML = '';

   // Extract drink details and display them
        drinks.forEach(drink => {
          const card = document.createElement('section');
          card.classList.add('card');
          const drinkName = drink.strDrink;
          const drinkPic = drink.strDrinkThumb;
          const instructions = drink.strInstructions;
  
//           // Create elements for displaying drink details
          const heading = document.createElement('h2');
          heading.innerText = drinkName;
          const pic = document.createElement('img');
          pic.src = drinkPic;
          const paragraph = document.createElement('p');
          paragraph.innerText = instructions;
  
//           // Display ingredients and measurements
          const ingredientList = document.createElement('ul');
          for (let i = 1; i <= 15; i++) {
            const ingredient = drink[`strIngredient${i}`];
            const measure = drink[`strMeasure${i}`];
            if (ingredient && measure) {
              const listItem = document.createElement('li');
              listItem.innerText = `${measure.trim()} ${ingredient}`;
              ingredientList.appendChild(listItem);
            } else if (ingredient !== null) {
              const listItem = document.createElement('li');
              listItem.innerText = ingredient;
              ingredientList.appendChild(listItem);
            }
          }
  
//           // Append elements to card
          card.appendChild(heading);
          card.appendChild(pic);
          card.appendChild(ingredientList);
          card.appendChild(paragraph);

//           // Append card to container
          container.appendChild(card); 
        });
        //       })        
}