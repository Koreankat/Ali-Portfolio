import React from "react"
import "./work.scss"
import AOS from "aos"
import "aos/dist/aos.css"

AOS.init()

function Work({ heading, para, language, site_url, github_url, color }) {
  return (
    <div className='Work' style={{ "--color": color }}>
      <div className='strip'></div>
      <h2>{heading}</h2>
      <br></br>
      <p>{para}</p>
      <br></br>
      <p className='Language'>Tech stack: {language}</p>
      <div className='buttons'>
        <a href={site_url}>
          <button className='raise'>View live site</button>
        </a>
        <a href={github_url}>
          <button className='raise'>View it on github</button>
        </a>
      </div>
    </div>
  )
}

export default Work
