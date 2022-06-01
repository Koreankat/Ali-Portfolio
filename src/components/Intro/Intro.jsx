import "./intro.scss"
import { init } from "ityped"
import React, { useEffect, useRef } from "react"
import Socials from "../Socials/Socials"

function Intro() {
  const textRef = useRef()

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Self Taught", "Geek", "Tech Enthusiast"],
    })
  }, [])

  return (
    <div className='intro' id='Intro'>
      <div className='heading'>
        <div className='popout'>
          <h1>A L I</h1>
          <h1>J A A F A R I</h1>
        </div>
        <span ref={textRef}></span>
      </div>
      <link rel='preconnect' href='https://fonts.gstatic.com'></link>
      <link
        href='https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@700&display=swap'
        rel='stylesheet'
      ></link>
      <link
        href='https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
        rel='stylesheet'
      ></link>
      <Socials />
      <div className='scroll'>
        <p>Scroll down</p>
        <i class='arrow down'></i>
      </div>
    </div>
  )
}

export default Intro
