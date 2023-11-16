//! Spoonacular
/* 
    - An API to help us build our project, a meal lister where users can select a random recipe to add to our own recipe deck.
    - This is a free API
    - Will need to create an account
        - Some APIs require this to manage how data is gathered and flows.
        - Also allows for control on how many times a request can be made.
        - Depends on the developer and what they require. This typically can be found in the documentation.
*/

//! API Keys
/* 
    - unique to each user
    - tied to threshold limits
*/

//! Documentation
/* 
    - Not all documentation is the same!
    - Read other documentation such as:
        - https://github.com/wh-iterabb-it/meowfacts
        - https://disneyapi.dev/docs
    - There isn't a required standard but being a clear as possible can make one API easy to use while another very difficult.
*/
import apiKey from "./key.js";
const baseURL = `https://api.spoonacular.com/recipes/random`;
const buildURL = `${baseURL}/?apiKey=${apiKey}`;

fetch(buildURL)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));