## Table of Contents

- [Table of Contents](#table-of-contents)
- [Abstract](#abstract)
- [Illustration](#illustration)
- [Technologies Used](#technologies-used)
- [Context and Features](#context-and-features)
- [Future Features](#future-features)
- [Application Set-Up](#application-set-up)
- [Contributor LinkedIn and GitHub](#contributor-linkedin-and-github)
- [Project Specs](#project-specs)
- [Deployed Link](#deplyed-link)

## Abstract

The _Rancid Tomatillos_ application was designed to display movies, display movie details of an individual movie, and has built in search capability to locate a specific movie and corresponding movie details. Building this application allowed my partner and I to build upon our current knowledge of: 

  - React fundamentals
  - Testing React components and asynchronous JS with Cypress utilizing user stories / acceptance criteria
  - Creating an easy to use and understand dashboard with clear UI/UX
  - React Router
  - Correctly utilzing Async / Await with network requests to retrieve data
  - Search capability with a controlled form
  - Error handling and accessibility features
  - Project board on GitHub

## Illustrations

![](https://vimeo.com/731164427/cfcc652adf)

## Technologies Used

- React
- React Router
- CSS
- HTML
- Network Requests/API
- JavaScript
- Cypress testing
- Normalize.css
- Webpack
- Deployment on Heroku

## Context and Features

The goals for this project were to:
  
   - Gain competency with React fundamentals.
   - Work with an API to receive data.
   - Solidify the code review process.
   - Learn how to test React components and asynchronous JS with Cypress.
   - Practice refactoring.
   - Create a multi-page UX using Router

This application was created using Webpack, which is a modular bundler used to group HTML, CSS, and JavaScript files into more efficient files for a browser to read.

This application utilizes NPM packages including `normalize.css`, `react-router-dom@5.3.0`, and `-D cypress`. The `normalize.css` package allows the application to render more consistently on different browsers without bugs, preserves useful defaults, normalizes styles for a wide range of elements, and improves usability with subtle modifications. The `react-router-dom@5.3.0` package allows for declarative routing for React web applications. The `-D cypress` package allows for JavaScript-based front-end testing through an end-to-end testing framework.

React Router is a library that allowed us to make our single page React application mimic the behavior of a multipage app. It provided the ability to use browser history, allowing users to navigate with forward / back buttons and bookmark links to specific views of the app. Most modern sites use some form of routing. React Router exposes this functionality through a series of components. We got some practice with refactoring in order to implement React Router properly within our application.

End-to-end testing was utilized in the development process for this application. Testing with Cypress aims to address the pain points developers of QA engineers face while testing and application. Cypress is a more developer-friendly tool that uses a unique DOM manipulation teachnique and operates directly in the browser, making asynchronous testing simple and convenient. All user flows, views, happy & sad paths, async functionality, and components were successfully tested.

The application fetches data from a web API with Async / Await and displays data for movies. 

A controlled form was utilized to allow a user to search for a movie from the nav bar. React makes it easy to manipulate data using forms. Form input values can be set to state values and then updated via React events.  

Accesibility & Error Handling was implemented within the application and form. The application scored a 100% accessibility rating in a _Lighthouse Accessibility Audit_, is fully tabable, and can be used with a screen reader. 

Finally, this application was deployed on Heroku. The Heroku platform uses Git as the primary means for deploying applications. When you create an application on Heroku, it associates a new Git remote, typically named heroku, with the local Git repository for your application. As a result, deploying code is just the familiar git push, but to the heroku remote instead. Deployment then, is about moving your application from your local system to Heroku - and Heroku provides several ways in which apps can be deployed.

## Future Features

Some future features that could be added to this application are:

- Creating a login page for a user so that they can favorite movies, delete movies, submit user movie ratings, delete user movie ratings.
- Add functionality for displaying a movies trailer.

## Application Set-Up

1. Set up a new React application by running the following command in your terminal 'npx create-react-app NAMEOFYOURAPP`.

2. `Cd` into the directory.

3. Run `npm start` in the terminal to see the application.

4. Got to GitHub and click on the + icon to create a new Repo.

5. Copy the commands for pushing an existing repo from GitHub and paste into the terminal.

4. Run `npm install` in your terminal to install project dependencies.

8. Run `npm start` in the terminal to run the local API server.

9. When finished with the application, be sure to type `Control + C` to stop running the API and this application. 

## Contributor LinkedIn

[David Daw: LinkedIn](https://www.linkedin.com/in/david-daw-04aa36237/) 

[Rachel Allen: LinkedIn](https://www.linkedin.com/in/rachel-lynn-allen/)  
 
## Contributor GitHub

[David Daw: GitHub](https://github.com/davidhdaw) 

[Rachel Allen: GitHub](https://github.com/Rallen13) 

## Project Specs

The specs for this application can be found 
[HERE](https://frontend.turing.edu/projects/module-3/rancid-tomatillos-v3.html) 

## Deployed Link

The deployed link for this application can be found 
[HERE](https://powerful-basin-82276.herokuapp.com/) 
