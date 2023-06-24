import type { IronSessionOptions } from "iron-session";

import { IUser } from "@/types/auth";

export const sessionIronOptions: IronSessionOptions = {
  cookieName: "nextjs_explore_auth",
  password: process.env.SESSION_IRON_PASSWORD || "SESSION_PWD",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

declare module "iron-session" {
  interface IronSessionData {
    user?: IUser;
  }
}
