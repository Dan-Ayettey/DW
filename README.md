# DW-api-briefly
 DW  api
 
 # DW Group  Fetch Product and Images
 
 This is a simple Nodejs project created as  test project for a backend-developer.
 To run this project you need to set up environment. 
 ### Installation
   - Running Nodejs environment, preferably version 6.13.4 (use Any IDE of your choice)
   - first clone the repo from Github
 
 ```sh
  git clone https://github.com/Dan-Ayettey/DW.git
  cd DW
  npm i 
  run project by typing nodemon at the CMD  point to the project directory.
  run project by typing nodemon at the CMD point to the project directory: nodemon
  test project by typing jest: jest
  Swagger is run on this link http://localhost:3000/swagger/
  Remember to start the server before doing any test
  AWS S3 config is needed in S3.ts file
 ```
 if everything run successfully you should receive a message saying that the project is running on the port 3000 by defaut;
 
 ```sh
 Nodejs development server started: <http://127.0.0.1:3000> or listening on port 3000.
 Swagger is run on this link http://localhost:3000/swagger/
 ``` 
 ##### Request URL 
   http://localhost:3000/api/v1/merges |
   http://localhost:3000/api/v1/uploadfiles |
   http://localhost:3000/api/v1/createbuckets/ |
   http://localhost:3000/api/v1/products/{id}
   http://localhost:3000/swagger/
     
 ### Development
 Platform: I decided to work with Nodejs, since I have a lot of experience with Express and Auth  protocols
 **Target: create REST API service that connects to upstream data sources to retrieve and combine
                           data.**
                           You need AWS S3 to store file needed to be configurations: AWS S3 {       
                            secretAccessKey: SECRET,
                            accessKeyId: ID
                            } located in s3.ts   
 

  
  ####### Links to modules and middle-wares
 
 
 
    [download-express]: <https://www.npmjs.com/package/express>
     [download-express]: <https://www.npmjs.com/package/http>
      [download-express]: <https://www.npmjs.com/package/morgan>
       [download-express]: <https://www.npmjs.com/package/express-cache-middleware'>
       [download-express]: <https://www.npmjs.com/package/body-parser'>
       [download-express]: <https://www.npmjs.com/package/nodemon'>
        [download-express]: <https://www.npmjs.com/package/node-schedule'>
       "supertest": "^6.1.3",
        "swagger-ui-express": "^4.1.6",
   
   

