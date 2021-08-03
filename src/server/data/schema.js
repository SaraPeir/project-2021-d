const { buildSchema } = require("graphql")

export default buildSchema(`

  type Task {
    _id: ID!
    task: String!
    isDone: Boolean!
    body: String!
  }

  input TaskInput {
    task: String!
    isDone: Boolean!
    body: String!
  }

  input TaskInputToEdit {
    id: ID!
    task: String!
    isDone: Boolean!
    body: String!
  }

  type Query {
    tasks: [Task!]
  }

  type Mutation {
    createTask(task:TaskInput): Task
    editTask(task:TaskInputToEdit): Task
    deleteTask(id: ID): Task
  }

  schema {
    query: Query
    mutation: Mutation
  }
`)

