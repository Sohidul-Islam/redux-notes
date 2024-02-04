1. open your project folders
2. initialize npm 
npm init/ npm init --yes ==> for default initialization3
3. create a new files as js


 1. Entities - 
 (
In an Cake shop Entities are 
Shop - Stores cakes on a shelf.
Shopkeeper - At the front of the store.
Customer - At the store entrance.
 )
 2. Activities - 
(
In an Cake shop Entities are 
Customer - Buy a cake.
Shopkeeper - Remove a cake from the shelf, receipt to keep track.
)


----------------------------------
three core concepts in redux
----------------------------------
1. Store - in cake shop scenerio it was the shop. (Holds the state of your application.)
2. Action - in cake shop scenerio it was the intension to Buy_Cake. (Describes what happened.)
3. Reducer - in cake shop scenerio Shopkeeper perform action. (Ties the store and actions together.)
----------------------------------
1. A store that holds the state of your application.
2. An action that Describes the changes in the state of the application.
3. A Reducer which actually carries out the state transition depending on the action.

----------------------------------
Three principles
----------------------------------

First principle: 
----------------
The state of your whole application is stored in an object tree within a single store.

Second principle: 
----------------
The only way to change the state is to emit an action, an object describing what happened.

Third principle: 
----------------
To specify how the state tree is transformed by actions, you write pure reducers.


Javascript App ---> Action ---> Reducer ---> Redux store --> Javascript App



Middleware
--------------
* Is the suggested way to extend Redux with custom functionality
Provides a third - party extension point between dispatching an action, and the moment it reaches the reducer

* Use Middleware for loggin, crash reporting, performing asynchornous tasks etc./

middleware list:

1. Logger for redux
it logs all the information related to redux in your application
to install the package: npm i --save redux-logger


Asynchornous action:
-----------------------

Synchronous Action
As soon as an action was dispatched, the state was immediately updated
If you dispatch the BUY_CAKE action, the numOfCakes was right away decremented by 1 same with BUY_ICECREAM action is well.

Asynchronous Action
Asynchronous API Calls to fetch data from an end point and use that data in your application


# setup redux with redux

install react application
1. npm i create-react-app
2. npx create-react-app <appname>


install redux and react-redux packages by this command
3. npm i redux react-redux


redux devtool extension chrome
url: https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
documentation: https://github.com/reduxjs/redux-devtools/tree/main/extension#installation


install extension by : npm install --save @redux-devtools/extension