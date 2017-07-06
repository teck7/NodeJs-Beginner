# NodeJs-Beginner
This is a simple Nodejs application with basic GET and POST request routings. In this exercise, the routings are for posting 
Vehicle details that has 3 attributes namely Make, Model and Color. The routes generated are for vehicles(POST / GET); 
vehicle/_id (GET); vehicle/make (GET); vehicle/model (GET) and vehicle/color (GET).

The dependencies added are Express/Mongoose/body-parser/nodemon. Each of these dependencies played an important role in ensuring the 
functions of this application work in a correct manner. Express is for generating backend routes using NodeJs as the backend engine.
The Mongoose is integrated so that it could talk to MongoDB. The body-parser ensures that the Json format could be achieved for 
displaying the data. The nodemon is for convinience and efficiency which used to detect any file changes and restart the server 
whenever is neccessary.
