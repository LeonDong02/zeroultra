import useSWR from "swr";

const fetcher = url => fetch(url).then(res => res.json())

export default function NowPlaying() {
  const { data } = useSWR("/api/now-playing", fetcher);

  return (
    <div>
      <div>
        {data?.songUrl && data?.isPlaying ? (
          <a href={data.songUrl} target="_blank" rel="noopener noreferrer">
            {data.title + " - " + data?.artist}
          </a>
        ) : (
          <a href="https://open.spotify.com/user/22offyqbuyz7qehcrv7sssa4y?si=6a8ebdaecab045e3" target="_blank" rel="noopener noreferrer">
            Not currently listening
          </a>
        )}
      </div>
    </div>
  );
}