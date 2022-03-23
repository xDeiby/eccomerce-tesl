import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../database";
import { IProduct } from "../../../interfaces";
import { Product } from "../../../models";

type Data = IProduct[] | { msg: string };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return searchProduct(req, res);
    default:
      return res.status(400).end();
  }
}
const searchProduct = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  let { query = "" } = req.query;

  if (!query.length) {
    return res.status(400).json({ msg: "Especificar query de búsqueda" });
  }

  query = query.toString().toLowerCase();

  db.connect();
  const results = await Product.find({
    $text: { $search: query },
  })
    .select("title images price inStock slug -_id")
    .lean();
  db.disconnect();

  return res.status(200).json(results);
};
