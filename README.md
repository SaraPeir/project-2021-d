# project-2021-d
### react-express-webpack-graphql SSR boilerplate with Loadable Components and graphql

### Server Side Rendering.

Code splitting was done with Loadable Components for SSR: https://loadable-components.com/docs/server-side-rendering/

### Database
To get database, I used Atlas (https://www.mongodb.com/)
Cluster0
- Add a connection IP address: Add your connection IP address

- Create a Database User with user and password

- Choose a connection method:connect your application
Do not use MongoClient from `mongodb`, due to connection problems. Use `connect` or `createConnection` from `mongoose` with async/await: https://github.com/Automattic/mongoose/issues/9732#issuecomment-750007251

- To access to MongoDB and avoid the "Could not connect to any servers in your MongoDB Atlas cluster (whitelist)” error, follow these instructions:
https://stackoverflow.com/questions/62859081/mongodb-could-not-connect-to-any-servers-in-your-mongodb-atlas-cluster-whitel

### Reference: 
https://www.ibrahima-ndaw.com/blog/graphql-api-express-mongodb/

### Examples of query: 
http://localhost:3000/graphql?query=query%20%7B%0A%20%20tasks%20%7B%0A%20%20%20%20_id%0A%20%20%20%20isDone%0A%20%20%20%20task%0A%20%20%7D%0A%7D

### Examples of mutations:
1. editTask: http://localhost:3000/graphql?query=mutation%20%7B%0A%20%20editTask(id%3A%20%2260f82a4a3e01634df4aa859f%22)%20%7B%0A%20%20%20%20isDone%0A%20%20%20%20task%0A%20%20%7D%0A%7D

2. createTask: http://localhost:3000/graphql?query=mutation%20%7B%0A%20%20createTask(task%3A%20%7B%0A%20%20%20%20isDone%3A%20true%0A%20%20%20%20task%3A%20%22Added%20Webpack%22%0A%20%20%7D)%20%7B%0A%20%20%20%20task%0A%20%20%20%20isDone%0A%20%20%7D%0A%7D

3. deleteTask: http://localhost:3000/graphql?query=mutation%20%7B%0A%20%20deleteTask(id%3A%20%2260f82cb2228e752ed414e112%22)%20%7B%0A%20%20%20%20isDone%0A%20%20%20%20task%0A%20%20%7D%0A%7D