import { GraphQLContext } from "../../utils/types";

const resolvers = {
  Query: {
    searchUsers: () => {},
  },
  Mutation: {
    createUsername: (
      _: any,
      args: { username: string },
      context: GraphQLContext
    ) => {
      const { username } = args;
      const { session, prisma } = context;
    },
  },
};

export default resolvers;
