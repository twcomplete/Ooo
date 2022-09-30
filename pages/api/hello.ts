// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiResponse } from 'next'

type Data = {
  data: string,
}

export default function handler(
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ data: 'Hana Lee' })
}
