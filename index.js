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
let storedRecipes = [];

//* DOM Elements
const searchForm = document.querySelector('form');
const randomCard = document.querySelector('.random-card');
const keptCards = document.getElementById('kept-cards');

const removeElements = element => {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

//* Display Single Card
const displayRandomCard = recipe => {
    console.log(recipe);

    // while (randomCard.firstChild) {
    //     randomCard.removeChild(randomCard.firstChild);
    // }

    removeElements(randomCard);

    //* Create Elements
    let card = document.createElement('div');
    let img = document.createElement('img');
    let body = document.createElement('div');
    let title = document.createElement('h5');
    let btn = document.createElement('a');

    //* Set Attributes to Elements
    card.className = 'card';
    card.style.width = '18rem';
    img.src = recipe.image;
    img.className = 'card-img-top';
    img.alt = recipe.title;
    body.className = 'card-body';
    title.className = 'card-title';
    title.textContent = recipe.title;
    btn.className = 'btn btn-primary';
    btn.textContent = "Add";
    btn.onclick = () => {
        storedRecipes.push(recipe);
        setTable();
    }

    //* Attach Elements to Parent Elements
    body.appendChild(title);
    body.appendChild(btn);

    card.appendChild(img);
    card.appendChild(body);

    randomCard.appendChild(card);
}

//* Display Deck of Cards
const setTable = () => {
    console.log('Stored Recipe Array: ', storedRecipes);

    removeElements(keptCards);

    storedRecipes.map(obj => {

        //* Create
        let div = document.createElement('div');
        let card = document.createElement('div');
        let img = document.createElement('img');
        let body = document.createElement('div');
        let title = document.createElement('h5');
        let p = document.createElement('p');
        let a = document.createElement('a');

        //* Attributes
        div.className = 'col';
        card.className = 'card';
        img.className = 'card-img-top';
        img.src = obj.image; // need obj from array
        img.alt = obj.title; // need obj from array
        body.className = 'card-body';
        title.className = 'card-title';
        title.textContent = obj.title; // need object
        p.className = 'card-text';
        a.href = obj.src; // need obj from array
        a.target = '_blank';
        a.textContent = 'Link to Recipe';

        //* Attach
        p.appendChild(a);
        body.appendChild(title);
        body.appendChild(p);
        card.appendChild(img);
        card.appendChild(body);
        div.appendChild(card);

        keptCards.appendChild(div);
    })
}

//* Event Listener
searchForm.addEventListener('submit', e => {
    e.preventDefault(); // stops our page from refreshing due to default properties of the form.

    fetch(buildURL)
        .then(res => res.json())
        .then(data => {
            // console.log(data.recipes[0]);
            let recipe = data.recipes[0];
            // console.log(recipe);

            let obj = {
                title: recipe.title,
                image: recipe.image,
                src: recipe.sourceUrl
            }

            displayRandomCard(obj);
        })
        .catch(err => console.error(err));

})

