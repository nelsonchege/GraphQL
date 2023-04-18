import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { json } from "body-parser";
import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import http from "http";
// import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/typeDefs";
import { GraphQLContext } from "./utils/types";

async function main() {
  dotenv.config();
  const app = express();
  const httpServer = http.createServer(app);

  const schema = makeExecutableSchema({ typeDefs, resolvers });

  const server = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  const corsOptions = {
    origin: process.env.BASE_URL,
    credentials: true,
  };

  app.use(
    "/graphql",
    cors<cors.CorsRequest>(corsOptions),
    json(),
    expressMiddleware(server, {
      context: async ({ req }): Promise<GraphQLContext> => {
        console.log("here");
        // const session = await getSession({ req });
        return {
          session: {
            user: {
              name: "Nelson Chege",
              email: "nelson3chege@gmail.com",
              image:
                "https://lh3.googleusercontent.com/a/AGNmyxbfWdz2wcLezgyW86hsSLnRoqTO4U6rkQ9zbgya=s96-c",
            },
            expires: "2023-05-18T19:47:21.895Z",
          },
        };
      },
    })
  );

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:4000/graphql`);
}

main().catch((e) => {
  console.log(e);
});
