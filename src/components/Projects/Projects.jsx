import React from "react"
import "./projects.scss"
import AOS from "aos"
import "aos/dist/aos.css"
import Work from "../Work/Work"

AOS.init()

function Projects() {
  return (
    <div className='Projects' id='Projects'>
      <div className='heading'>
        <h1>PROJECTS</h1>
      </div>
      <div
        className='row-1'
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-delay='50'
        data-aos-duration='1000'
        data-aos-easing='ease'
        data-aos-mirror='false'
        data-aos-once='true'
      >
        <Work
          heading={"Vortex"}
          para={"A beginner friendly crypto trading platform"}
          language={"ReactJs"}
          github_url={"https://github.com/Koreankat/vortex"}
          site_url={"https://vortex-two.vercel.app/"}
          color='#e4cb58'
        />
        <Work
          heading={"Space Travel"}
          para={
            "Beautifully designed space traveling website from FrontendMentor"
          }
          language={"ReactJs"}
          github_url={"https://github.com/Koreankat/Space-Tourism-React"}
          site_url={"https://space-tourism-react-zeta.vercel.app/technology"}
          color='#e4cb58'
        />

        <Work
          heading={"Tic Tac Toe game"}
          para={"Intermediate Tic Tac Toe game challenge from FrontendMentor"}
          language={"React.js"}
          github_url={"https://github.com/Koreankat/Tic-Tac-Toe"}
          site_url={"https://tic-tac-toe-seven-coral.vercel.app/"}
          color='#e4cb58'
        />
      </div>
      <div
        className='row-2'
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-delay='50'
        data-aos-duration='1000'
        data-aos-easing='ease'
        data-aos-mirror='false'
        data-aos-once='true'
      >
        <Work
          heading={"Huddle Landing Page"}
          para={"Huddle landing page with alternating feature blocks "}
          language={"HTML, Tailwindcss"}
          github_url={"https://github.com/Koreankat/huddle-landing-page-2"}
          site_url={"https://huddle-landing-page-2-ecru.vercel.app/"}
          color='#58d8e4'
        />
        <Work
          heading={"Static chat app"}
          para={"This is a demo static 'live chat' "}
          language={"HTML, Tailwindcss"}
          github_url={"https://github.com/Koreankat/static-chat-app"}
          site_url={"https://static-chat-app-mu.vercel.app/"}
          color='#58d8e4'
        />
        <Work
          heading={"SpaceX"}
          para={"A website that shows spaceX evolution since day 1"}
          language={"ReactJs"}
          github_url={"https://github.com/Koreankat/spaceX"}
          site_url={"space-x-blush.vercel.app"}
          color='#58d8e4'
        />
      </div>
      <div
        className='row-2'
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-delay='50'
        data-aos-duration='1000'
        data-aos-easing='ease'
        data-aos-mirror='false'
        data-aos-once='true'
      >
        {" "}
        <Work
          heading={"Clipboard landing page"}
          para={
            "A clipboard that allows you to track and organize everything you copy"
          }
          language={"Html, TailwindCss"}
          github_url={"https://github.com/Koreankat/Clipboard-landing-page"}
          site_url={"https://clipboard-landing-page-rouge.vercel.app/"}
          color='#02f547'
        />
        <Work
          heading={"LOL champions"}
          para={
            "This simple website is my first javascript project, it's a website that displays league of legends champion's informations"
          }
          language={"Vanilla JS"}
          github_url={"https://github.com/Koreankat/lolchampions"}
          site_url={"https://lolchampions.vercel.app/"}
          color='#02f547'
        />
      </div>
    </div>
  )
}

export default Projects
