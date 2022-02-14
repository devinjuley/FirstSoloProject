## Summary
Somewhere New is an Airbnb clone with slight html/CSS alterations.  Users can sign up/login and post listings to the website.  Registered users can also delete/edit their own listings and view others listings.  Registered users can also leave reviews on listings.

## Overall Structure
The app has two features: Listings with full CRUD functionality, Reviews with Create and Read functionality.
### List of Features
  * Create an account
  * Login and logout
  * Login as a demo user
  * Create a listing
  * Edit a listing
  * Delete a listing
  * Leave a review on a listing
  * Search all spots by clicking "I'm Flexible"
  * Search Oakland, San Jose, San Francisco, and Berkeley
  * Search for spots by city name, using the search bar

## Backend
All backend routes were designed in Express.  This app uses a Sequelize database.

## Frontend
All frontend routes and components were designed in React.  All styling for the app was done with vanilla CSS.

### Dependencies
    * bcryptjs
    * cookie-parser
    * cors
    * csurf
    * dotenv
    * express
    * express-async-handler
    * express-validator
    * faker
    * helmet
    * jsonwebtoken
    * morgan
    * per-env
    * pg
    * react-router-dom
    * sequelize
    * sequelize-cli

## Somewhere New Pages
### Home Page
When a user first visits the site they hit the homepage, as shown below.  Un-registered users can see the full site, but they cannot create listings, edit listings, delete listings, or leave reviews.  Using either the search bar(searching by city), the "I'm flexible" button(to see all listings), or using "explore nearby" to search the four listed locations.  Un-registered users can sign up in the top right of the navbar or click the link further down the page.  Registered users can login from the navbar in the top right.  Once you are logged in, the navbar changes from displaying "log in" and "sign up", to "create a listing".

![GitHub Logo](https://i.imgur.com/pI3j1jI.png)

### Create a Listing
Logged in users can create a listing by filling out the various fields on the "create a listing" page.  Once the listing is created, the user will be redirected to the listing itself, to view.
![GitHub Logo](https://i.imgur.com/Kl7r77b.png)

### "I'm flexible", Search by State, and "Explore nearby"
Clicking "I'm flexible" shows all listings on the site.  Clicking Oakland, San Francisco, San Jose, or Berkeley will show spots from each of those locations.  Using the search bar, you can also search by state.  Each one of these options will populate listings to the page, shown below.
![GitHub Logo](https://i.imgur.com/2ouhqZ6.png)

### Single Spot Page
Each Spot displayed the the list can be clicked on, which will lead to a page with details about the listing.  At the bottom of the page you can also view and post reviews.

![GitHub Logo](https://i.imgur.com/XOBpPBT.png)

## Leave a Review Modal
Logged in users can choose to leave reviews for listings by clicking the "Leave a review button".  These reviews will populate on the listing page.
![GitHub Logo](https://i.imgur.com/t58Klgq.png)