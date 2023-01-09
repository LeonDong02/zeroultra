import Links from './components/links.js'
import Spotify from './components/spotify'
import Head from 'next/head'

export default function Home() {
  return (
    <div class="font-sans text-[15px] leading-[1.15] w-[80vw] md:w-full mx-auto">
      <Head>
        <title>Zero Ultra</title>
      </Head>
      <div class="flex flex-col md:flex-row h-100 md:h-48 mt-20 md:mt-28 mb-4">
        <div class="basis-1/4 px-12 md:px-0">
          <img src={'pfp.png'} alt="Profile Picture" />
        </div>
        <div class="basis-3/4 px-12">
          <div class="text-3xl font-bold my-1.5 md:my-3">Leon Dong</div>
          <p>
            I&apos;m a 3rd year computer science student with a minor in combinatorics and optimization @ UWaterloo.
          </p>
          <br></br>
          <p>
            Previously, I was a mobile eng intern @ Ecobee, Facedrive and I&apos;m an incoming mobile eng intern @ LinkedIn.
          </p>
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
