import { Task } from "../models";


export const TaskSchema = `
  type Task {
    _id: ID!
    name: String!
    description: String!
    status: Boolean!
    dueDate: String!
    user: User
    group: Group
    createdAt: String!
  }
`

export const TaskOperation = `
  input TaskInput {
    userId: ID!
    groupId: ID
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
    getTasksByGroupID(groupId: ID!): [Task]
  }
`;

export const TaskResolvers = {
  Query: {
    getTaskByID: async (_, { id }) => {
      return await Task.findById(id);
    },
    getTasksByUserID: async (_, { userId }) => {
      return await Task.find({ user: userId });
    },
    getTasksByGroupID: async (_, { groupId }) => {
      return await Task.find({ group: groupId });
    },
  },
  Mutation: {
    createTask: async (parent: unknown, args) => {
      const { userId, groupId, name, description, status, dueDate } = args.task;
      return Task.create({
        name,
        description,
        status,
        dueDate,
        user: userId,
        group: groupId,
      });
    },
    updateTask: async (parent: unknown, args) => {
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
    },
    deleteTask: async (parent: unknown, args) => {
      const { id } = args;
      const taskToDelete = await Task.findById(id);
      if (!taskToDelete) {
        throw new Error("Task not found");
      }
      await taskToDelete.remove();
      return taskToDelete;
    }
  }
}