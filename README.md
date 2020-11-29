# Url_shotener
 Url Shortener is a basic project to make a short URL's like bitly to make it easier for it to distribute it to te end user for easier navigaton. It can be used in any Node codebase which has nosql database. It uses shortid package which generate its own short urls. but if you want you can make your own shorturls.

##Technologies used: Node,express, Mongo DB, EJS.

### For using it in your system:
    1. Clone it in your system.
    2. Install Node, Mongodb from their respective websites.
    3. run 
    ```
    npm install express mongoose ejs shortid
    ``` 
    or simply 
    ```
    npm install
    ```
    4. Your are good to go :)


### Basic file structure

├───models               #Contains the modals for the mongoose 
└───views                #Contains ejs files for the frontend rendering 


###    Basic endpoints:
        1. / redirect to the main homepage.
        2. /:shortid redirects to the full url if found else to returns 404 status.
        
