# Pokédex

- How it works:

  - Click on "Catch 'em all" button to start catching pokemons.
  - In Collection page, you can see all the cought pokemons displayed, while not cought ones are hidden.
  - Using the serchbar, you can filter based on name.
  - Click on show all to see all the pokemons.

- Behind the scene:
  - On load, the pokemon list is fetched from the API, and for each pokemon (url) its details are fetched and added one by one to the Provider (useContext) into the "notcought" state.
  - On home screen, pressing the "Catch'em all" button, a random pokemon from "notcought" is selected using splice method and displayed.
  - Clicking the "Catch" button, adds the selected pokemon to the "cought" state in Provider.
  - In Collection, the Search component maps through and shows both the "cought" and "notcought" states when search-input is empty
  - When you type in search it filters both states.
  - Clicking on "show all" button, sets the "notcought" class to "cought"
  - Clicking on anycard opens up a Modal component
