import type { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";

import { IUser } from "@/types/auth";
import { sessionIronOptions } from "@/configs/session";

export interface ISession {
  user?: IUser;
  isLogin: boolean;
}

const getSession = async (
  req: NextApiRequest,
  res: NextApiResponse<ISession>
) => {
  console.log(req.session.user);
  if (req.session.user) {
    res.json({
      ...req.session.user,
      isLogin: true,
    });
  } else {
    res.json({
      isLogin: false,
    });
  }
};

export default withIronSessionApiRoute(getSession, sessionIronOptions);
