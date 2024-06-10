export default function Others({stargaze}) {
    return (
        <div class={stargaze ? "fadeout3" : "fadein3"}>
            <div class="text-xl font-bold">
                <span class="highlight">
                    other cool stuff
                </span>
            </div>
            <div class="overflowxscroll">
                <div class="flex flex-col md:flex-row">
                    <div class="basis-1/2">
                        <ul>
                            <li class="mb-1">
                                <span class="highlight">
                                    projects <br></br>[
                                    <a href='https://github.com/LeonDong02' target="_blank" rel="noreferrer" class="transition ease-in-out underline text-violet-600 hover:text-violet-700 duration-100">
                                    github
                                    </a>
                                    /
                                    <a href='https://devpost.com/LeonDong' target="_blank" rel="noreferrer" class="transition ease-in-out underline text-violet-600 hover:text-violet-700 duration-100">
                                    devpost
                                    </a>
                                    ]
                                </span>
                            </li>
                            <li class="mb-1">
                                <span class="highlight">
                                    competitive programming <br></br>[
                                    <a href='https://codeforces.com/profile/p1geon' target="_blank" rel="noreferrer" class="transition ease-in-out underline text-violet-600 hover:text-violet-700 duration-100">
                                    cf
                                    </a>
                                    /
                                    <a href='https://dmoj.ca/user/p1geon' target="_blank" rel="noreferrer" class="transition ease-in-out underline text-violet-600 hover:text-violet-700 duration-100">
                                    dmoj
                                    </a>
                                    ]
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div class="basis-1/2">
                        <ul>
                            <li class="mb-1">
                                <span class="highlight">
                                    music <br></br>[
                                    <a href='https://open.spotify.com/user/22offyqbuyz7qehcrv7sssa4y?si=273a075fb0a049b3' target="_blank" rel="noreferrer" class="transition ease-in-out underline text-violet-600 hover:text-violet-700 duration-100">
                                    spotify
                                    </a>
                                    /
                                    <a href='https://www.last.fm/user/p1geon_' target="_blank" rel="noreferrer" class="transition ease-in-out underline text-violet-600 hover:text-violet-700 duration-100">
                                    lastfm
                                    </a>
                                    ]
                                </span>
                            </li>
                            <li class="mb-1">
                                <span class="highlight">
                                    valorant <br></br>[
                                    <a href='https://www.youtube.com/watch?v=zf37WxQCW68' target="_blank" rel="noreferrer" class="transition ease-in-out underline text-violet-600 hover:text-violet-700 duration-100">
                                    montage
                                    </a>
                                    /
                                    <a href='https://www.youtube.com/@wetpeeker' target="_blank" rel="noreferrer" class="transition ease-in-out underline text-violet-600 hover:text-violet-700 duration-100">
                                    channel
                                    </a>
                                    /
                                    <a href='https://tracker.gg/valorant/profile/riot/dullscythe%23nurtr/overview' target="_blank" rel="noreferrer" class="transition ease-in-out underline text-violet-600 hover:text-violet-700 duration-100">
                                    tracker
                                    </a>
                                    ]
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="mb-2.5">
                    <ul>
                        <li>
                            <span class="highlight">
                                contact <br></br>[
                                <a href='https://www.linkedin.com/in/leondong02/' target="_blank" rel="noreferrer" class="transition ease-in-out underline text-violet-600 hover:text-violet-700 duration-100">
                                linkedin
                                </a>
                                /
                                <a href='https://twitter.com/wetpeeker' target="_blank" rel="noreferrer" class="transition ease-in-out underline text-violet-600 hover:text-violet-700 duration-100">
                                twitter
                                </a>
                                /
                                <a href='mailto:yiming.dong@uwaterloo.ca' target="_blank" rel="noreferrer" class="transition ease-in-out underline text-violet-600 hover:text-violet-700 duration-100">
                                email
                                </a>
                                ]
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
