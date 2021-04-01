# StartNodeJS
Starting a simple Node JS project but with almost anything you need

Its structered with Back-end, Front-end and even Database for API  
  In back-end folder you will have: models, routes, services  
  In front-end folder you will have: public, admin and a library folder  
    & Each folder will contain many more for all usages  
  
How to use?
1. Pull it down
2. Install these (npm install + name below): 
  express
  cors
  express-favicon
  express-session
  pejs
  mongoose
  dotenv
3. To run: Node Index in the directory

** For dbconnecion
1. Go to server.js in backend folder
2. Uncomment the dbConnection.connectToDb();
3. Add your string to .env file
* Don't forget the models (I also have the folder for models in backend folder)