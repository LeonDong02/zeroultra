import Links from './components/links.js'
import Spotify from './components/spotify'
import Head from 'next/head'

export default function Home() {
  return (
    <div class="font-mono text-[14px] leading-[1.15] w-[90vw] md:w-full mx-auto">
      <Head>
        <title>Zero Ultra</title>
      </Head>
      <div class="flex flex-col md:flex-row h-100 md:h-48 mt-16 md:mt-28 mb-2.5">
        <div class="basis-full md:basis-1/4 px-12 md:px-0">
          <img src={'pfp.png'} alt="Profile Picture" />
        </div>
        <div class="basis-full md:basis-3/4 px-12 md:pl-8">
          <div class="text-3xl font-bold my-1.5 md:my-2.5">leon dong</div>
          <div>
            i&apos;m a 3rd year computer science student with a minor in combinatorics and optimization @&nbsp;
            <a href='https://uwaterloo.ca/' target="_blank" rel="noreferrer" class="transition ease-in-out underline text-violet-600 hover:text-violet-900 duration-100">uwaterloo</a>.
          </div>
          <br></br>
          <div>
            i&apos;m an incoming mobile eng intern @ <a href='https://www.linkedin.com' target="_blank" rel="noreferrer" class="transition ease-in-out underline text-violet-600 hover:text-violet-900 duration-100">linkedin</a> and previously, i was a mobile eng intern @ <a href='https://www.ecobee.com/' target="_blank" rel="noreferrer" class="transition ease-in-out underline text-violet-600 hover:text-violet-900 duration-100">ecobee</a>, <a href='https://steeresg.com/' target="_blank" rel="noreferrer" class="transition ease-in-out underline text-violet-600 hover:text-violet-900 duration-100">facedrive</a>.
          </div>
          <br></br>
          <a href='Resume.pdf' target="_blank" rel="noreferrer" class="text-[16px] transition ease-in-out underline text-violet-600 hover:text-violet-900 duration-100">
            resume
          </a>
        </div>
      </div>
      <div class="flex flex-col px-12 md:px-0 py-4 md:py-0">
        {/* <Links /> */}

        <div class="text-xl font-bold">
          other cool stuff
        </div>
        <div class="flex flex-col md:flex-row">
          <div class="basis-1/2">
            <ul>
              <li class="mb-1">
                projects <br></br>[
                <a href='https://github.com/LeonDong02' target="_blank" rel="noreferrer" class="transition ease-in-out underline text-violet-600 hover:text-violet-900 duration-100">
                  github
                </a>
                /
                <a href='https://devpost.com/LeonDong' target="_blank" rel="noreferrer" class="transition ease-in-out underline text-violet-600 hover:text-violet-900 duration-100">
                  devpost
                </a>
                ]
              </li>
              <li class="mb-1">
                competitive programming <br></br>[
                <a href='https://codeforces.com/profile/p1geon' target="_blank" rel="noreferrer" class="transition ease-in-out underline text-violet-600 hover:text-violet-900 duration-100">
                  cf
                </a>
                /
                <a href='https://dmoj.ca/user/p1geon' target="_blank" rel="noreferrer" class="transition ease-in-out underline text-violet-600 hover:text-violet-900 duration-100">
                  dmoj
                </a>
                ]
              </li>
            </ul>
          </div>
          <div class="basis-1/2">
            <ul>
              <li class="mb-1">
                music <br></br>[
                <a href='https://open.spotify.com/user/22offyqbuyz7qehcrv7sssa4y?si=273a075fb0a049b3' target="_blank" rel="noreferrer" class="transition ease-in-out underline text-violet-600 hover:text-violet-900 duration-100">
                  spotify
                </a>
                /
                <a href='https://www.last.fm/user/p1geon_' target="_blank" rel="noreferrer" class="transition ease-in-out underline text-violet-600 hover:text-violet-900 duration-100">
                  lastfm
                </a>
                ]
              </li>
              <li class="mb-1">
                valorant <br></br>[
                <a href='https://www.youtube.com/watch?v=zf37WxQCW68' target="_blank" rel="noreferrer" class="transition ease-in-out underline text-violet-600 hover:text-violet-900 duration-100">
                  montage
                </a>
                /
                <a href='https://www.youtube.com/@wetpeeker' target="_blank" rel="noreferrer" class="transition ease-in-out underline text-violet-600 hover:text-violet-900 duration-100">
                  channel
                </a>
                /
                <a href='https://tracker.gg/valorant/profile/riot/mc2van%23na1/overview' target="_blank" rel="noreferrer" class="transition ease-in-out underline text-violet-600 hover:text-violet-900 duration-100">
                  tracker
                </a>
                ]
              </li>
            </ul>
          </div>
        </div>

        <div class="mb-2.5">
          <ul>
            <li>
                contact <br></br>[
                <a href='https://www.linkedin.com/in/leondong02/' target="_blank" rel="noreferrer" class="transition ease-in-out underline text-violet-600 hover:text-violet-900 duration-100">
                  linkedin
                </a>
                /
                <a href='https://twitter.com/wetpeeker' target="_blank" rel="noreferrer" class="transition ease-in-out underline text-violet-600 hover:text-violet-900 duration-100">
                  twitter
                </a>
                /
                <a href='mailto:yiming.dong@uwaterloo.ca' target="_blank" rel="noreferrer" class="transition ease-in-out underline text-violet-600 hover:text-violet-900 duration-100">
                  email
                </a>
                ]
              </li>
          </ul>
        </div>

        <p class="text-clip overflow-hidden mb-2.5">
        ...........................................................................................................................................................................
        </p>

        <Spotify />
        {/* <br></br>
        <div>Website very WIP</div>
        <br></br>
        <div>Built with blood, sweat, and Monster™ Zero Ultra</div> */}
      </div>
    </div>
  )
}
