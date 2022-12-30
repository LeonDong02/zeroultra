import Links from './components/links.js'
import Spotify from './components/spotify'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <div class="about-body">
        <img src={'pfp.png'} alt="Profile Picture" class="about-img" />
        <div class="about-txt">
          <h1>Leon Dong</h1>
          <p>I&apos;m a 3rd year computer science student @ UWaterloo.</p>
          <p>Previously, I interned as a mobile eng @ Ecobee, Facedrive and I&apos;m an incoming mobile eng intern @ LinkedIn.</p> 
          <a href='Resume.pdf' target="_blank" rel="noreferrer">
              <u>Resume</u>
          </a>
        </div>
      </div>
      <Links />
      <Spotify />
    </div>
  )
}
