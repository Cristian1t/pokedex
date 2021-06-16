# Pokédex - React + styled-components

## Deployed @ https://pokedexreactapp.vercel.app/

- How it works:

  - Click on "Catch 'em all" button to start catching pokémons.
  - In Collection page, you can see all the caught pokémons displayed with pokéball icon, while not caught ones are hidden.
  - Using the serchbar, you can filter based on name.
  - Click on show all to see all the pokémons.
  - Click restart to start from 29 pokémons and 0 caught.
  - You can filter by Caught, Not Caught and All.
  - You can set the number of pokémons. Default is 29.

- Behind the scene:
  - On load, the pokémon list is fetched from the API, and for each pokémon (url) its details are fetched and added one by one to the Provider (useContext) into the "notcaught" state.
  - On home screen, pressing the "Catch'em all" button, a random pokémon from "notcaught" is selected using splice method and displayed.
  - Clicking the "Catch" button, adds the selected pokémon to the "caught" state in Provider.
  - In Collection, the Search component maps through and shows both the "caught" and "notcaught" states when search-input is empty.
  - When you type in search it filters both states.
  - Clicking on "Unlock all" button, sets the "showall" state to true, causing Card component to display card info.
  - Clicking on any card opens up a Modal component.
  - localStorage is used on Home page RandomCard component, on Unlock All button and on "caughtlist".
  - Clicking restart will do localStorage.clear() and window.location.reload().
  - Changing the number of pokémons will change the limit in the fetch for API url, and on localStorage, clear it and refresh page.

## IMPORTANT

- Refreshing the page while having pokémons in "caught" will cause "notcaught" pokémons to double because localStorage (size limit) doesn't save "notcaught" ones.
- Catching all pokémons will cause localStorage.clear().
- localStorage max is 30 captured pokémons.
