import Links from './components/links.js'
import Spotify from './components/spotify'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zero Ultra</title>
      </Head>
      <div class="about-body">
        <img src={'pfp.png'} alt="Profile Picture" class="about-img" />
        <div class="about-txt">
          <h1>Leon Dong</h1>
          <p>I&apos;m a 3rd year computer science student with a minor in combinatorics and optimization @ UWaterloo.</p>
          <p>Previously, I interned as a mobile eng @ Ecobee, Facedrive and I&apos;m an incoming mobile eng intern @ LinkedIn.</p> 
          <a href='Resume.pdf' target="_blank" rel="noreferrer">
              <u>Resume</u>
          </a>
        </div>
      </div>
      <Links />
      <Spotify />
      <p>Website very WIP</p>
      <p>Built with blood, sweat, and Monster™ Zero Ultra</p>
    </div>
  )
}
