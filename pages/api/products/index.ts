import type { NextApiRequest, NextApiResponse } from "next";
import { constants, db } from "../../../database";
import { IProduct } from "../../../interfaces";
import { Product } from "../../../models";

type Data = IProduct[] | { msg: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getProducts(req, res);
    default:
      return res.status(400).json({ msg: "Metodo no disponible" });
  }
}

const getProducts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { gender = "all" } = req.query;

  let filters = {} as any;

  if (constants.SHOP_CONSTANTS.validGenres.includes(gender as string)) {
    filters.gender = gender;
  }

  db.connect();
  const products = await Product.find(filters)
    .select("title images price inStock -_id")
    .lean();
  db.disconnect();

  return res.status(200).json(products);
};
