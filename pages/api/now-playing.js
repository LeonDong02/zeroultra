const {
    SPOTIFY_CLIENT_ID: client_id,
    SPOTIFY_CLIENT_SECRET: client_secret,
    SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const getAccessToken = async () => {
    try {
        const response = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                Authorization: `Basic ${Buffer.from(
                    `${client_id}:${client_secret}`
                ).toString("base64")}`,
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                grant_type: "refresh_token",
                refresh_token,
            }),
        });

        console.log("Env vars: ", client_id, client_secret, refresh_token);
        console.log("Access token resp: ", response);

        return await response.json();
    } catch (e) {
        console.error(e);
    }
};

export const currentlyPlayingSong = async () => {
    const { access_token } = await getAccessToken();
    console.log("Token: ", access_token);

    try {
        const response = await fetch(
            "https://api.spotify.com/v1/me/player/currently-playing",
            {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            }
        );

        return await response.json();
    } catch (e) {
        console.error(e);
    }
};

export default async function handler(req, res) {
    let song;
    try {
        song = await currentlyPlayingSong();
        console.log("Song: ", song);

        if (!song.item || !song.is_playing) {
            return new Error();
        }
    } catch {
        return res.status(200).json({ isPlaying: false });
    }

    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;

    return res.status(200).json({
        album,
        albumImageUrl,
        artist,
        isPlaying,
        songUrl,
        title,
    });
}