import type { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";

import { sessionIronOptions } from "@/configs/session";

const storeSession = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    req.session.user = { ...req.body };
    await req.session.save();
  }

  res.send({});
};

export default withIronSessionApiRoute(storeSession, sessionIronOptions);
