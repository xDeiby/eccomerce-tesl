import { NextApiRequest, NextApiResponse } from "next";
import { db, initialData } from "../../database";
import { Product } from "../../models";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ msg: string }>
) {
  if (process.env.NODE_ENV === "production")
    return res.status(401).json({ msg: "Servicio no disponible" });

  try {
    await db.connect();
    await Product.deleteMany();
    await Product.insertMany(initialData.products);
    await db.disconnect();

    res.status(200).json({ msg: "Semilla inicial cargada" });
  } catch (error) {
    await db.disconnect();
    console.error(error);

    res.status(500).end();
  }
}
