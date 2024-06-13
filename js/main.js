
import { displayDrinks } from './helperfunctions.js';

const  getDrink = async () => {
  const input = document.querySelector('input');
  const drinkName = input.value;
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`)

    if(response.ok) {
      const drinkData = await response.json()
      const drinks = drinkData.drinks;
      displayDrinks(drinks)
      
    }
  } catch(error) {
    console.log(error)
  }
}

document.querySelector('#drinkBtn').addEventListener('click', getDrink);





















// // Function to handle fetching and displaying drink data
// function getDrink() {
//     const input = document.querySelector('input');
//     const drinkName = input.value;
  
//     // Fetch drink data from API
//     fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`)
//       .then(response => response.json()) // Parse response as JSON
//       .then(data => {
//         console.log(data);
  
//         const drinks = data.drinks;
  
//         // Check if the drinks array is empty
//         if (!drinks) {
//           const container = document.querySelector('#cards-container');
//           const message = document.createElement('p');
//           message.innerText = 'Please check the name of the drink you\'re searching for';
//           container.appendChild(message);
//           return;
//         }

//         // Clear previous search results
//         const container = document.querySelector('#cards-container');
//         container.innerHTML = '';
  
//         // Extract drink details and display them
//         drinks.forEach(drink => {
//           const card = document.createElement('section');
//           card.classList.add('card');
//           const drinkName = drink.strDrink;
//           const drinkPic = drink.strDrinkThumb;
//           const instructions = drink.strInstructions;
  
//           // Create elements for displaying drink details
//           const heading = document.createElement('h2');
//           heading.innerText = drinkName;
//           const pic = document.createElement('img');
//           pic.src = drinkPic;
//           const paragraph = document.createElement('p');
//           paragraph.innerText = instructions;
  
//           // Display ingredients and measurements
//           const ingredientList = document.createElement('ul');
//           for (let i = 1; i <= 15; i++) {
//             const ingredient = drink[`strIngredient${i}`];
//             const measure = drink[`strMeasure${i}`];
//             if (ingredient && measure) {
//               const listItem = document.createElement('li');
//               listItem.innerText = `${measure.trim()} ${ingredient}`;
//               ingredientList.appendChild(listItem);
//             } else if (ingredient !== null) {
//               const listItem = document.createElement('li');
//               listItem.innerText = ingredient;
//               ingredientList.appendChild(listItem);
//             }
//           }
  
//           // Append elements to card
//           card.appendChild(heading);
//           card.appendChild(pic);
//           card.appendChild(ingredientList);
//           card.appendChild(paragraph);

//           // Append card to container
//           container.appendChild(card);
//         });
//       })
//       .catch(error => {
//         console.log(`Error: ${error}`);
//       });
//   }


