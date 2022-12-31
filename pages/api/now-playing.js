// ENV vars
const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } =
    process.env;

const getAccessToken = async () => {
    const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            Authorization: `Basic ${Buffer.from(
                `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
            ).toString("base64")}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token: SPOTIFY_REFRESH_TOKEN ?? "",
        }),
    });

    return await response.json();
};

export const currentlyPlayingSong = async () => {
    const { access_token } = await getAccessToken();

    const response = await await fetch(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        }
    );

    return await response.json();
};

export default async function handler(req, res) {
    let song;
    try {
        song = await currentlyPlayingSong();
    } catch (e) {
        return res
            .status(200)
            .json({ isPlaying: false, error: JSON.stringify(e) });
    }

    if (Object.keys(song.item).length === 0 || !song.is_playing) {
        return res.status(200).json({ isPlaying: false });
    }

    return res.status(200).json({
        album: song.item.album.name,
        albumImageUrl: song.item.album.images[0].url,
        artist: song.item.artists.map((_artist) => _artist.name).join(", "),
        isPlaying: song.is_playing,
        songUrl: song.item.external_urls.spotify,
        title: song.item.name,
    });
}