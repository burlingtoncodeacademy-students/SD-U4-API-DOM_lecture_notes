//! Concepts to Consider
/* 
    - When a user clicks the "Random" button
        - A card is generated

    - A single card displayed needs
        - An image, a title, and a button.
        - The button will add that recipe to a collection of recipes.
            - This collection will be stored in this file.
    
    - When a recipe is added to the collection
        - A "deck" of cards will display.
            - Each card will display:
                - An image, a title, a hyperlink to the recipe details.

    - Need variables to target elements on the html document.
    - Need event listeners to respond to user interaction
    - Need functions to handle both the single card and deck of cards display.
*/

import apiKey from "./key.js"; //* Imports are typically set to the top of the file.

//? Global Variables
const baseURL = `https://api.spoonacular.com/recipes/random`;
const buildURL = `${baseURL}/?apiKey=${apiKey}`;

fetch(buildURL)
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));

//TODO: DOM Elements

//TODO: Display Single Card

//TODO: Display Deck of Cards

//TODO: Event Listener