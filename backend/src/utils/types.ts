import { PrismaClient } from "@prisma/client";
import { ISODateString } from "next-auth";
// import { Session } from "next-auth";

export interface User {
  id: string;
  username: string;
  image: string;
}
export interface Session {
  user: User;
  expires: ISODateString;
}
export interface GraphQLContext {
  session: Session | any;
  prisma: PrismaClient;
}

export interface CreateUsernameResponse {
  success?: boolean;
  error?: string;
}
