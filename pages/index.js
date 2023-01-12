import Others from './components/others.js'
import Interests from './components/interests.js'
import Spotify from './components/spotify'
import Head from 'next/head'
import React, { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    const delta = 6;
    let startX;
    let startY;

    document.addEventListener("mousedown", (e) => {
      startX = e.clientX;
      startY = e.clientY;
    });

    document.addEventListener("mouseup", (e) => {
      let x = e.pageX;
      let y = e.pageY;
      const diffX = Math.abs(x - startX);
      const diffY = Math.abs(y - startY);
      
      if (diffX < delta && diffY < delta) {
        var audio = new Audio('explosion.mp3?' + Math.random());

        var img = document.createElement('img');
        img.className = "gif-player";
        img.style.pointerEvents = "none";
        img.src = 'explosion.gif?' + Math.random();

        var div = document.createElement('div');
        div.appendChild(img);
        div.style.left = (x - 25) + "px";
        div.style.top = (y - 40) + "px";
        div.style.position = "absolute";
        div.style.pointerEvents = "none";
        
        document.body.appendChild(div);
        audio.play();

        setTimeout(() => {
          div.remove();
        }, 1500);
      }
    });
  }, []);

  return (
    <div class="font-mono text-[13px] leading-[1.15] w-[90vw] md:w-full mx-auto">
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
          <a href='Resume.pdf' target="_blank" rel="noreferrer" class="text-[15px] transition ease-in-out underline text-violet-600 hover:text-violet-900 duration-100">
            resume
          </a>
        </div>
      </div>
      <div class="flex flex-col px-12 md:px-0 py-4 md:py-0">
        <Interests />

        <Others />

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
