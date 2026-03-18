// app/api/spotify/route.ts  — but we're using pages/api
import type { NextApiRequest, NextApiResponse } from 'next';
import { getTopTracks } from '../../src/lib/spotify';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const tracks = await getTopTracks();
    res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=7200');
    res.status(200).json(tracks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tracks' });
  }
}
