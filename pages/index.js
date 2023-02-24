import Others from './components/others.js'
import Interests from './components/interests.js'
import Spotify from './components/spotify'
import Construction from './components/construction'
import Head from 'next/head'
import Script from 'next/script'
import React, { useEffect, useState } from 'react';

export default function Home() {

  const [stargaze, setStargaze] = React.useState(false);
  const [played, setPlayed] = React.useState(false);

  useEffect(() => {

    var body = document.body,
    html = document.documentElement;

    // // MARK: EXPLOSION

    // const delta = 6;
    // let startX;
    // let startY;

    // document.addEventListener("mousedown", (e) => {
    //   startX = e.clientX;
    //   startY = e.clientY;
    // });

    // document.addEventListener("mouseup", (e) => {
    //   let x = e.pageX;
    //   let y = e.pageY;
    //   const diffX = Math.abs(x - startX);
    //   const diffY = Math.abs(y - startY);

    //   var elem = document.elementFromPoint(x, y);
      
    //   if (diffX < delta && diffY < delta && elem.nodeName != "A" && e.button === 0 && screen.width >= 768) {
    //     var audio = new Audio('explosion.mp3?' + Math.random());
    //     audio.volume = 0.03;

    //     var img = document.createElement('img');
    //     img.className = "gif-player";
    //     img.style.pointerEvents = "none";
    //     img.src = 'explosion.gif?' + Math.random();

    //     var div = document.createElement('div');
    //     div.appendChild(img);
    //     div.style.left = (x - 25) + "px";
    //     div.style.top = (y - 36) + "px";
    //     div.style.position = "absolute";
    //     div.style.pointerEvents = "none";
        
    //     document.body.appendChild(div);
    //     audio.play();

    //     setTimeout(() => {
    //       div.remove();
    //     }, 1500);
    //   }
    // });

    // MARK: STARS

    function getStarIcon() {
      const chance = Math.random();
      const starDistribution = [
        [0.05, '✦'],
        [0.2, '✷'],
        [1, '⋆']
      ];
      
      return starDistribution.find(dist => chance < dist[0])[1];
    }
    
    function getColor() {
      const chance = Math.random();
      const colorDistribution = [
        [0.2, '#fce7a1'],
        [0.4, '#f7c45e'],
        [1, '#fdda68'],
      ];
      
      return colorDistribution.find(dist => chance < dist[0])[1];
    }
    
    function createStar() {
      const star = document.createElement('p');
      star.innerHTML = getStarIcon();
      if (star.innerHTML == "⋆") {
        star.className += 'star1';
      } else if (star.innerHTML == "✷") {
        star.className += 'star2';
      } else {
        star.className += 'star3';
      }
      star.style.top = `${getRandomInt(0, window.innerHeight - 50)}px`;
      if (screen.width < 768) {
        star.style.top = `${getRandomInt(0, Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight ))}px`;
      }
      star.style.left = `${getRandomInt(0, window.innerWidth - 15)}px`;
      star.style.color = getColor();
      star.style['animation-delay'] = `${Math.max(((getRandomInt(0, 75) + getRandomInt(0, 75)) / 10) - 1.85, 1.85 + (getRandomInt(0, 100) / 100))}s`;
      star.style['animation-duration'] = `${(getRandomInt(0, 400) / 100) + 16}s`;
      star.style.zIndex = -1;
      document.body.appendChild(star);
    }
    
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    
    let starCount = 120;
    if (screen.width >= 768) {
      starCount = 150;
    }
    for (let i = 0; i < starCount; i++) {
      createStar();
    }

    // MARK: METEORS

    let permutation = [4,2,7,1,0,3,6,5];

    function createMeteor(i) {
      const meteor = document.createElement('div');
      meteor.className += 'meteor';
      meteor.style.top = `${getRandomInt(50, 250)}px`;
      meteor.style.left = `${getRandomInt(9, 19) + (getRandomInt(permutation[i], permutation[i] + 1) * 10)}%`;
      meteor.style['animation-duration'] = `${(getRandomInt(0, 60) / 10) + 7.5}s`;
      meteor.style.zIndex = -1;
      document.body.appendChild(meteor);
    }

    function timeout(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function renderMeteors (c) {
      await timeout(3000);
      const meteorCount = c;
      for (let i = 0; i < meteorCount; i++) {
        createMeteor(i);
        await timeout(getRandomInt(0, 1000) + getRandomInt(0, 1000));
      }
    }

    if (screen.width >= 768) {
      renderMeteors(8);
    }

  }, []);

  // MARK: MUSIC

  function playSounds() {
    if (!played) {
      var music = new Audio('SwedenC418.mp3');
      var crickets = new Audio('crickets.mp3');
      music.volume = 0.01;
      music.loop = true;
      crickets.volume = 0.015;
      crickets.loop = true;
      music.play();
      crickets.play();
      setPlayed(true);
    }
  }

  return (
    <div class="font-mono text-[13px] leading-[1.5] md:leading-[1.15] w-[100vw] md:w-full mx-auto">
      <Head>
        <title>{stargaze ? "starry night" : "leon dong"}</title>
        <meta name="title" content="leon dong"></meta>
        <meta name="description" content="super cool computer science student B)"></meta>

        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://www.leondong.com/"></meta>
        <meta property="og:title" content="leon dong"></meta>
        <meta property="og:description" content="super cool computer science student B)"></meta>
        <meta property="og:image" content="https://www.leondong.com/pfp.jpg"></meta>

        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:url" content="https://www.leondong.com/"></meta>
        <meta property="twitter:title" content="leon dong"></meta>
        <meta property="twitter:description" content="super cool computer science student B)"></meta>
        <meta property="twitter:image" content="https://www.leondong.com/pfp.jpg"></meta>
      </Head>
      <div class="realbody blurryback">
        { !stargaze ? (
          <button class="stargazebutton1" onClick={() => {setStargaze(true); playSounds();}}>[<span class="transition ease-in-out underline text-violet-500 hover:text-violet-700 duration-100 highlight">stargaze?</span>]</button>
        ) : (
          <button class="stargazebutton2" onClick={() => setStargaze(false)}>[<span class="transition ease-in-out underline text-violet-500 hover:text-violet-700 duration-100 highlight">go back</span>]</button>
        )}
        <div class={stargaze ? "fadeout1 flex flex-col md:flex-row h-100 md:h-48 mt-12 md:mt-0 mb-2.5" : "fadein1 flex flex-col md:flex-row h-100 md:h-48 mt-12 md:mt-0 mb-2.5"}>
          {/* <script src='./coolstuff/sparkle.js' async></script>
          <script src="https://webneko.net/n20171213.js" async></script> */}
          <div class="basis-full md:basis-1/4">
            <img src={'pfp.jpg'} alt="Profile Picture" class="px-12 md:px-0" />
          </div>
          <div class="basis-full md:basis-3/4 px-12 md:pl-8">
            <div class="text-3xl font-bold my-1.5 md:my-2.5"><span class="highlight">leon dong</span></div>
            <div>
              <span class="highlight">
                i&apos;m a 3rd year computer science student with a minor in combinatorics and optimization @&nbsp;
                <a href='https://uwaterloo.ca/' target="_blank" rel="noreferrer" class="transition ease-in-out underline text-violet-500 hover:text-violet-700 duration-100">uwaterloo</a>
                ,&nbsp;seeking fall 2023 internships
              </span>
            </div>
            <br></br>
            <div>
              <span class="highlight">
                incoming mobile eng intern @ <a href='https://www.linkedin.com' target="_blank" rel="noreferrer" class="transition ease-in-out underline text-violet-500 hover:text-violet-700 duration-100">linkedin</a> and previously, mobile eng intern @ <a href='https://www.ecobee.com/' target="_blank" rel="noreferrer" class="transition ease-in-out underline text-violet-500 hover:text-violet-700 duration-100">ecobee</a>, <a href='https://steeresg.com/' target="_blank" rel="noreferrer" class="transition ease-in-out underline text-violet-500 hover:text-violet-700 duration-100">facedrive</a>
              </span>
            </div>
            <br></br>
            <span class="highlight">
              <a href='Resume.pdf' target="_blank" rel="noreferrer" class="text-[15px] transition ease-in-out underline text-violet-500 hover:text-violet-700 duration-100">
                resume
              </a>
            </span>
          </div>
        </div>
        <div class="flex flex-col px-12 md:px-0 py-4 md:py-0">
          <Interests stargaze={stargaze} />

          <Others stargaze={stargaze} />
      
          <p class={stargaze ? "fadeout4 text-clip overflow-hidden mb-2.5 seperator" : "fadein4 text-clip overflow-hidden mb-2.5 seperator"}>
          ...........................................................................................................................................................................
          </p>

          <Spotify stargaze={stargaze} />
          {/* <br></br>
          <div>Website very WIP</div>
          <br></br>
          <div>Built with blood, sweat, and Monster™ Zero Ultra</div> */}
          <Construction stargaze={stargaze} />
        </div>
      </div>
    </div>
  )
}
