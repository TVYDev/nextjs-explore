import type { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";

import { sessionIronOptions } from "@/configs/session";

const destroySession = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    req.session.destroy();
  }
  res.send({});
};

export default withIronSessionApiRoute(destroySession, sessionIronOptions);
