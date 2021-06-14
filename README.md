# Pokédex - React + styled-components

## Deployed @ https://pokemoncatchreact.netlify.app/

- How it works:

  - Click on "Catch 'em all" button to start catching pokémons.
  - In Collection page, you can see all the cought pokémons displayed with pokéball icon, while not cought ones are hidden.
  - Using the serchbar, you can filter based on name.
  - Click on show all to see all the pokémons.

- Behind the scene:
  - On load, the pokémon list is fetched from the API, and for each pokémon (url) its details are fetched and added one by one to the Provider (useContext) into the "notcought" state.
  - On home screen, pressing the "Catch'em all" button, a random pokémon from "notcought" is selected using splice method and displayed.
  - Clicking the "Catch" button, adds the selected pokémon to the "cought" state in Provider.
  - In Collection, the Search component maps through and shows both the "cought" and "notcought" states when search-input is empty.
  - When you type in search it filters both states.
  - Clicking on "Unlock all" button, sets the "showall" state to true, causing Card component to display card info.
  - Clicking on anycard opens up a Modal component.
  - localStorage is used on Home page RandomCard component, on Unlock All button and on "coughtlist".
  - Clicking restart will do localStorage.clear() and window.location.reload().

## IMPORTANT

- Refreshing the page while having pokémons in "cought" will cause "cought" pokémons to double because localStorage (size limit) doesn't save "notcought" ones.
- Catching all pokémons will cause localStorege.clear().
