import { PrismaClient } from "@prisma/client";
import { Session } from "next-auth";

export interface GraphQLContext {
  session: Session | any;
  prisma: PrismaClient;
}
