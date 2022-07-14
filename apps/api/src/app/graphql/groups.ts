import { Group } from "../models";


export const GroupSchema = `
  type Group {
    _id: ID!
    name: String!
    description: String!
    owner: User!
    members: [User]
    createdAt: String!
  }
`

export const GroupOperation = `
  input GroupInput {
    name: String!
    description: String!
    owner: ID!
  }

  type Mutation {
    createGroup(group: GroupInput): Group
    updateGroup(id: ID!, group: GroupInput): Group
    deleteGroup(id: ID!): Group
    addMember(id: ID!, user: ID!): Group
    removeMember(id: ID!, user: ID!): Group
  }

  type Query {
    getGroupByID(id: ID!): Group
    getGroupsByOwnerID(ownerId: ID!): [Group]
    getGroupsByUserID(userId: ID!): [Group]
  }
`;

export const GroupResolvers = {
  Query: {
    getGroupByID: async (_, { id }) => {
      return await Group.findById(id);
    },
    getGroupsByOwnerID: async (_, { ownerId }) => {
      return await Group.find({ owner: ownerId });
    },
    getGroupsByUserID: async (_, { userId }) => {
      return await Group.find({ members: userId });
    },
  },
  Mutation: {
    createGroup: async (parent: unknown, args) => {
      const { name, description, owner } = args.group;
      return Group.create({
        name,
        description,
        owner,
      });
    },
    updateGroup: async (parent: unknown, args) => {
      const { id, group } = args;
      const { name, description } = group;
      const groupToUpdate = await Group.findById(id);
      if (!groupToUpdate) {
        throw new Error("Group not found");
      }
      groupToUpdate.name = name;
      groupToUpdate.description = description;
      return groupToUpdate.save();
    },
    deleteGroup: async (parent: unknown, args) => {
      const { id } = args;
      const groupToDelete = await Group.findById(id);
      if (!groupToDelete) {
        throw new Error("Group not found");
      }
      return groupToDelete.remove();
    },
    addMember: async (parent: unknown, args) => {
      const { id, user } = args;
      const groupToUpdate = await Group.findById(id);
      if (!groupToUpdate) {
        throw new Error("Group not found");
      }
      groupToUpdate.members.push(user);
      return groupToUpdate.save();
    },
    removeMember: async (parent: unknown, args) => {
      const { id, user } = args;
      Group.findById(id, (err, group) => {
        if (err) {
          throw new Error("Group not found");
        }
        group.members.pull(user);
        group.save();
      });
    },
  }
}