import Links from './components/links.js'
import Spotify from './components/spotify'
import Head from 'next/head'

export default function Home() {
  return (
    <div class="font-sans text-[15px] leading-[1.15]">
      <Head>
        <title>Zero Ultra</title>
      </Head>
      <div class="flex flex-row h-48 mt-28 mb-4">
        <div class="basis-1/4">
          <img src={'pfp.png'} alt="Profile Picture" />
        </div>
        <div class="basis-3/4 px-12">
          <div class="text-3xl font-bold my-3.5">Leon Dong</div>
          <p>
            I&apos;m a 3rd year computer science student with a minor in combinatorics and optimization @ UWaterloo.
          </p>
          <br></br>
          <p>
            Previously, I interned as a mobile eng @ Ecobee, Facedrive and I&apos;m an incoming mobile eng intern @ LinkedIn.
          </p>
          <br></br>
          <a href='Resume.pdf' target="_blank" rel="noreferrer" class="transition ease-in-out underline hover:text-stone-400 duration-100">
            Resume
          </a>
        </div>
      </div>
      <Links />
      <Spotify />
      <br></br>
      <p>Website very WIP</p>
      <br></br>
      <p>Built with blood, sweat, and Monster™ Zero Ultra</p>
    </div>
  )
}
