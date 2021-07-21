# project-2021-d
### react-express-webpack-graphql SSR boilerplate with Loadable Components

Server Side Rendering.

Code splitting was done with Loadable Components for SSR: https://loadable-components.com/docs/server-side-rendering/

Added graphql

To get database, I used Atlas
Cluster0
Add a connection IP address: Add your connection IP address

Create a Database User: 
user: sarapeir 
password: MqDROlzoW6QKeMrr

Choose a connection method:connect your application
Do not use MongoClient from mongodb, due to connection problems. Use connect or createConnection from mongoose con async/await: https://github.com/Automattic/mongoose/issues/9732#issuecomment-750007251

Reference: https://www.ibrahima-ndaw.com/blog/graphql-api-express-mongodb/

Examples of query: http://localhost:3000/graphql?query=query%20%7B%0A%20%20tasks%20%7B%0A%20%20%20%20_id%0A%20%20%20%20isDone%0A%20%20%20%20task%0A%20%20%7D%0A%7D

Examples of mutations:
editTask: http://localhost:3000/graphql?query=mutation%20%7B%0A%20%20editTask(id%3A%20%2260f82a4a3e01634df4aa859f%22)%20%7B%0A%20%20%20%20isDone%0A%20%20%20%20task%0A%20%20%7D%0A%7D

createTask: http://localhost:3000/graphql?query=mutation%20%7B%0A%20%20createTask(task%3A%20%7B%0A%20%20%20%20isDone%3A%20true%0A%20%20%20%20task%3A%20%22Added%20Webpack%22%0A%20%20%7D)%20%7B%0A%20%20%20%20task%0A%20%20%20%20isDone%0A%20%20%7D%0A%7D