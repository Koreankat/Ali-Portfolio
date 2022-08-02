import React, { useEffect, useRef } from "react"
import TagCloud from "TagCloud"
import "./about.scss"
import AOS from "aos"
import "aos/dist/aos.css"

AOS.init()
console.log(AOS.init())
function About() {
  const Tags = [
    "Javascript",
    "HTML",
    "CSS",
    "SASS",
    "React JS",
    "XD",
    "Figma",
    "Linux",
    "JSON",
    "git",
    "Vscode",
  ]

  const IsTagCloudLoaded = useRef(false)

  useEffect(() => {
    if (IsTagCloudLoaded.current) return

    TagCloud(".content", Tags, {
      radius: 350,
      maxSpeed: "fast",
      initSpeed: "fast",
      direction: 135,
      keep: true,
    })

    IsTagCloudLoaded.current = true
  }, [])
  return (
    <div className='About' id='About'>
      <div
        className='left'
        data-aos='fade-right'
        data-aos-offset='200'
        data-aos-delay='50'
        data-aos-duration='1000'
        data-aos-easing='ease'
        data-aos-mirror='false'
        data-aos-once='true'
      >
        <div className='heading'>
          <h1>ABOUT</h1>
        </div>
        <div className='para'>
          <p>
            I am a self taught Front-end developer located in Morocco, i've
            graduated from Hangzhou Dianzi University in computer science and
            engineering major,
          </p>
          <br></br>
          <p>
            Love automating daily boring tasks using Javascript, Space
            enthusiast , and gamer (league of legends) specially.
          </p>
          <br></br>
          <p>
            <a href='#Contact'>Contact me</a>
          </p>
        </div>
      </div>
      <div className='right'>
        <span className='content'></span>
      </div>
    </div>
  )
}

export default About
