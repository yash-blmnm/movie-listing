# Movie Listing App

  Displays list of movies with the poster and name in a Grid View.
  
  It is a mobile browser first application.
  
## Database

The mock data can be found in this [repository](https://github.com/yash-blmnm/moviesList).

It has a `db.json` file that holds all the mock data for this application.

This repository is deployed in Heroku.

The link used to retrieve data is [https://afternoon-castle-41801.herokuapp.com/content](https://afternoon-castle-41801.herokuapp.com/content)

## Libraries Used

**Tailwind CSS** for UI Components(Styling)

**React Hook Form** for Search Bar form.

**React Infinite Scroll Component** for mplementing Infinite Scroll.

**React Lazyload** for lazyloading images.

## Shortcomings

Yet to implement **React Window** for displaying/loading only the posters in the current viewport of users for performance optimization.

## Installation in Local

### `yarn` 
Run this command to install all the dependencies
### `yarn start`
Run command to start the application locally
### `yarn build`
Builds the application for production in the build folder.
### `yarn deploy`
Deploys the application to the page mentioned as ***homepage*** in the `package.json` file.
You can find the deployed version [here](https://yash-blmnm.github.io/movie-listing).


