import Links from './components/links.js'
import Spotify from './components/spotify'
import Head from 'next/head'

export default function Home() {
  return (
    <div class="font-sans text-[15px] leading-[1.15] w-[90vw] md:w-full mx-auto">
      <Head>
        <title>Zero Ultra</title>
      </Head>
      <div class="flex flex-col md:flex-row h-100 md:h-48 mt-16 md:mt-28 mb-4">
        <div class="basis-full md:basis-1/4 px-12 md:px-0">
          <img src={'pfp.png'} alt="Profile Picture" />
        </div>
        <div class="basis-full md:basis-3/4 px-12">
          <div class="text-3xl font-bold my-1.5 md:my-2.5">Leon Dong</div>
          <div>
            I&apos;m a 3rd year computer science student with a minor in combinatorics and optimization @ UWaterloo.
          </div>
          <br></br>
          <div>
            I&apos;m an incoming mobile eng intern @ LinkedIn and previously, I was a mobile eng intern @ Ecobee, Facedrive.
          </div>
          <br></br>
          <a href='Resume.pdf' target="_blank" rel="noreferrer" class="transition ease-in-out underline hover:text-stone-400 duration-100">
            Resume
          </a>
        </div>
      </div>
      <div class="flex flex-col px-12 md:px-0 py-4 md:py-0">
        <Links />
        <Spotify />
        {/* <br></br>
        <div>Website very WIP</div>
        <br></br>
        <div>Built with blood, sweat, and Monster™ Zero Ultra</div> */}
      </div>
    </div>
  )
}
