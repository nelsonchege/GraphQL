import { CreateUsernameResponse, GraphQLContext } from "../../utils/types";

const resolvers = {
  Query: {
    searchUsers: () => {},
  },
  Mutation: {
    createUsername: async (
      _: any,
      args: { username: string },
      context: GraphQLContext
    ): Promise<CreateUsernameResponse> => {
      const { username } = args;
      const { session, prisma } = context;

      if (!session?.user) {
        return Promise.resolve({ error: "user not authorized" });
      }

      const { id: userId } = session.user;

      try {
        const existingUsername = await prisma.user.findUnique({
          where: {
            username,
          },
        });

        if (existingUsername) {
          return Promise.resolve({
            error: "username already taken try another",
          });
        }

        await prisma.user.update({
          where: {
            id: userId,
          },
          data: {
            username,
          },
        });

        return Promise.resolve({
          success: true,
        });
      } catch (err) {
        return Promise.resolve({ error: "" });
      }
    },
  },
};

export default resolvers;
