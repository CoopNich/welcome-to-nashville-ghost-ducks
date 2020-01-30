# Welcome to Nashville: README

Users can search for parks, public art collections, restaurants, and concerts in the Nashville area.

***

## Initialization Instructions
1. Install [http-server](https://www.npmjs.com/package/http-server) & json-server
    ```shell session
    $ npm install -g json-server
    ```
    
2. Select 'Clone or Download' in GitHub Repo
    
    ex.
     ```shell session
    $ https://github.com/nss-day-cohort-38/welcome-to-nashville-ghost-ducks.git

     ```
3. Create an api file 'apikeys.js' in the 'scripts' directory
    ```shell session  
    $ cd ../welcome-to-nashville-ghost-ducks/src/scripts
    $ touch apikeys.js
    ```
    1. Find API key for Zomato
        * Visit [Zomato's API](developers.zomato.com/api) to request and obtain an API key
        * copy the API key into apiKeys.js as: const restaurantsAPIKey = "YOUR_KEY_HERE"

    2. Find API key for Ticketmaster
        * You can get this api key by [registering with Ticketmaster](https://developer-acct.ticketmaster.com/user/register)
        * Once you have it copy your key in your apiKeys.js file as: const concertKey = "YOUR_KEY_HERE"

4. cd to src directory in your terminal
5. 
6. hs -o
***
## USING THE APP

### Parks Functionality

To search for parks, select desired feature(s) and then hit enter on your keyboard or click the 'search parks' button. 

If you want to get a list of all parks, just click the 'search parks' button without selecting any specific features.

### Art Functionality

Use partial or exact search queries and either hit the ENTER key or click 'Search' to generate search results based on an artist's last name.

You can generate a full list of public art installations by clicking 'Search' without a search query.

Click 'Save' to add an art installation to your itinerary.

### Restaurant Functionality

To find restaurants in the Nashville area, use the search bar labeled "Search by Cuisine" to find restaurants based on the type of food they serve. 

You may search as broadly as regional categories (Italian, Japanese, etc.) or more specific types of food (Burgers, Ice Cream, etc.).

### Concert Functionality

To find concerts you can attend in Nashvile, use the search bar labeled "Search Concerts by Genre" to find concerts based on the genre of music being played.

Click the save button on any concert you would like to attend and it will be added to your itinerary.

*****



