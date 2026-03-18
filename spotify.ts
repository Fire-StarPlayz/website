// lib/spotify.ts
// Spotify Client Credentials flow to fetch top tracks from a public playlist
// Uses the "Get User's Top Items" via Client Credentials won't work for user data,
// so we use a public playlist approach OR you can use Authorization Code flow.
// For simplicity, this uses client credentials to fetch a hardcoded playlist of your favorites.
// To show YOUR top tracks: set SPOTIFY_PLAYLIST_ID to a public playlist you own.

const client_id = process.env.SPOTIFY_CLIENT_ID!;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET!;

async function getAccessToken(): Promise<string> {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization:
        'Basic ' +
        Buffer.from(`${client_id}:${client_secret}`).toString('base64'),
    },
    body: 'grant_type=client_credentials',
    next: { revalidate: 3600 },
  });

  const data = await response.json();
  return data.access_token;
}

export interface SpotifyTrack {
  id: string;
  name: string;
  artist: string;
  album: string;
  albumArt: string;
  url: string;
  previewUrl: string | null;
}

// Fetches tracks from a public Spotify playlist (set SPOTIFY_PLAYLIST_ID in env)
export async function getTopTracks(): Promise<SpotifyTrack[]> {
  try {
    const token = await getAccessToken();
    const playlistId = process.env.SPOTIFY_PLAYLIST_ID;

    if (!playlistId) {
      return getFallbackTracks();
    }

    const response = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=5&fields=items(track(id,name,artists,album(name,images),external_urls,preview_url))`,
      {
        headers: { Authorization: `Bearer ${token}` },
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) return getFallbackTracks();

    const data = await response.json();
    return data.items.slice(0, 5).map((item: any) => ({
      id: item.track.id,
      name: item.track.name,
      artist: item.track.artists.map((a: any) => a.name).join(', '),
      album: item.track.album.name,
      albumArt: item.track.album.images[0]?.url || '',
      url: item.track.external_urls.spotify,
      previewUrl: item.track.preview_url,
    }));
  } catch {
    return getFallbackTracks();
  }
}

function getFallbackTracks(): SpotifyTrack[] {
  return [
    {
      id: '1',
      name: 'Set SPOTIFY_PLAYLIST_ID in .env',
      artist: 'Add your favorite playlist ID',
      album: 'See README for setup',
      albumArt: '',
      url: 'https://spotify.com',
      previewUrl: null,
    },
  ];
}
