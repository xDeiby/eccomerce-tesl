import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../database";
import { IProduct } from "../../../interfaces";
import { Product } from "../../../models";

type Data = IProduct | { msg: string };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getProductBySlug(req, res);

    default:
      return res.status(400).json({ msg: "Metodo no disponible" });
  }
}
const getProductBySlug = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { slug } = req.query;

  db.connect();
  const product = await Product.findOne({ slug });
  db.disconnect();

  return product
    ? res.status(200).json(product)
    : res.status(404).json({ msg: `slug ${slug}, no encontrado` });
};
