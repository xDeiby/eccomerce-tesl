import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  msg: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  return res
    .status(400)
    .json({ msg: "Se debe especificar el query de búsqueda" });
}
