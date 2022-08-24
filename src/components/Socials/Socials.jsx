import React from "react"
import "./socials.scss"

function Socials() {
  return (
    <div className='social-menu'>
      <li>
        <a href='https://twitter.com/AliJaafari999' target='__blank'>
          <i className='fa fa-twitter'></i>
        </a>
      </li>
      <li>
        <a href='https://github.com/Koreankat' target='__blank'>
          <i className='fa fa-github'></i>
        </a>
      </li>
      <li>
        <a
          href='https://www.linkedin.com/in/ali-jaafari-866926231/'
          target='__blank'
        >
          <i className='fa fa-linkedin'></i>
        </a>
      </li>
    </div>
  )
}

export default Socials
