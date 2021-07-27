const { buildSchema } = require("graphql")

export default buildSchema(`

  type Task {
    _id: ID!
    task: String!
    isDone: Boolean!
  }

  input TaskInput {
    task: String!
    isDone: Boolean!
  }

  type Query {
    tasks: [Task!]
  }

  type Mutation {
    createTask(task:TaskInput): Task
    editTask(id: ID): Task
    deleteTask(id: ID): Task
  }

  schema {
    query: Query
    mutation: Mutation
  }
`)

