import { Task } from "../models";
import { isAuthorized } from "../conf/middleware";
import { pipeResolvers } from "graphql-resolvers";

export const TaskSchema = `
  type Task {
    _id: ID!
    name: String!
    description: String!
    status: Boolean!
    dueDate: String!
    user: User
    category: Category
    createdAt: String!
  }
`

export const TaskOperation = `
  input TaskInput {
    userId: ID!
    categoryId: ID
    name: String!
    description: String!
    status: Boolean
    dueDate: String
  }

  type Mutation {
    createTask(task: TaskInput): Task
    updateTask(id: ID!, task: TaskInput): Task
    deleteTask(id: ID!): Task
  }

  type Query {
    getTaskByID(id: ID!): Task
    getTasksByUserID(userId: ID!): [Task]
    getTasksByCategoryID(categoryId: ID!): [Task]
  }
`;

export const TaskResolvers = {
  Query: {
    getTaskByID: pipeResolvers(isAuthorized, async (_, { id }) => {
      return await Task.findById(id);
    }),
    getTasksByUserID: pipeResolvers(isAuthorized, async (_, { userId }) => {
      return await Task.find({ user: userId });
    }),
    getTasksByCategoryID: pipeResolvers(isAuthorized, async (_, { categoryId }) => {
      return await Task.find({ category: categoryId });
    }),
  },
  Mutation: {
    createTask: pipeResolvers(isAuthorized, async (parent: unknown, args) => {
      const { userId, categoryId, name, description, status, dueDate } = args.task;
      return Task.create({
        name,
        description,
        status,
        dueDate,
        user: userId,
        category: categoryId,
      });
    }),
    updateTask: pipeResolvers(isAuthorized, async (parent: unknown, args) => {
      const { id, task } = args;
      const { name, description, status, dueDate } = task;
      const taskToUpdate = await Task.findById(id);
      if (!taskToUpdate) {
        throw new Error("Task not found");
      }
      if (name) {
        taskToUpdate.name = name;
      }
      if (description) {
        taskToUpdate.description = description;
      }
      if (status) {
        taskToUpdate.status = status;
      }
      if (dueDate) {
        taskToUpdate.dueDate = dueDate;
      }
      await taskToUpdate.save();
      return taskToUpdate;
    }),
    deleteTask: pipeResolvers(isAuthorized, async (parent: unknown, args) => {
      const { id } = args;
      const taskToDelete = await Task.findById(id);
      if (!taskToDelete) {
        throw new Error("Task not found");
      }
      await taskToDelete.remove();
      return taskToDelete;
    }),
  }
}
