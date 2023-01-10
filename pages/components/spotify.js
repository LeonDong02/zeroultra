import useSWR from "swr";
import { useEffect } from "react";
import { animate } from "motion";

const fetcher = url => fetch(url).then(res => res.json())

function AnimatedBars() {
    useEffect(() => {
        animate(
            "#bar1",
            {
            transform: [
                "scaleY(1.0) translateY(0rem)",
                "scaleY(1.5) translateY(-0.082rem)",
                "scaleY(1.0) translateY(0rem)",
            ],
            },
            {
            duration: 1.0,
            repeat: Infinity,
            easing: ["ease-in-out"],
            }
        );
        animate(
            "#bar2",
            {
            transform: [
                "scaleY(1.0) translateY(0rem)",
                "scaleY(3) translateY(-0.083rem)",
                "scaleY(1.0) translateY(0rem)",
            ],
            },
            {
            delay: 0.2,
            duration: 1.5,
            repeat: Infinity,
            easing: ["ease-in-out"],
            }
        );
        animate(
            "#bar3",
            {
            transform: [
                "scaleY(1.0)  translateY(0rem)",
                "scaleY(0.5) translateY(0.37rem)",
                "scaleY(1.0)  translateY(0rem)",
            ],
            },
            {
            delay: 0.3,
            duration: 1.5,
            repeat: Infinity,
            easing: ["ease-in-out"],
            }
        );
    }, []);
    
    return (
        <div className="w-auto flex items-end overflow-hidden">
            <span
            id="bar1"
            className="w-1 mr-[3px] h-2 bg-gray-300 dark:bg-gray-500 opacity-75"
            />
            <span
            id="bar2"
            className="w-1 mr-[3px] h-1 bg-gray-300 dark:bg-gray-500"
            />
            <span
            id="bar3"
            className="w-1 h-3 bg-gray-300 dark:bg-gray-500 opacity-80"
            />
        </div>
    );
}

export default function NowPlaying() {
  const { data } = useSWR("/api/now-playing", fetcher);

  return (
    <div>
        <div>
            <nobr>
                {data?.songUrl && data?.isPlaying ? (
                    <div>
                        <p class="truncate">
                            Now playing:
                            <br></br>
                            <a href={data.songUrl} target="_blank" rel="noopener noreferrer" class="underline">
                                {data.title + " - " + data?.artist}
                            </a>
                        </p>
                    </div>
                ) : (
                    <div>
                        <p class="truncate">
                            Now playing:
                            <br></br>
                            <a href="https://open.spotify.com/user/22offyqbuyz7qehcrv7sssa4y?si=6a8ebdaecab045e3" target="_blank" rel="noopener noreferrer" class="transition ease-in-out underline hover:text-stone-400 duration-100">
                                Not currently listening
                            </a>
                        </p>
                    </div>
                )}
            </nobr>
        </div>
    </div>
  );
}