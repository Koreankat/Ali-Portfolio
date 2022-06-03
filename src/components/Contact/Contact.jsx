/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useRef } from "react"
import "./contact.scss"
import AOS from "aos"
import "aos/dist/aos.css"
import emailjs from "emailjs-com"
import { NotificationContainer, NotificationManager } from "react-notifications"
import "react-notifications/lib/notifications.css"

AOS.init()

function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_k5douhi",
        "template_xgoeijp",
        form.current,
        "4AFUO7Ua2XiLUj_hH"
      )
      .then(
        (result) => {
          console.log(result.text)
          NotificationManager.success(
            "Thank you for contacting me",
            "Message sent!"
          )
        },
        (error) => {
          console.log(error.text)
          NotificationManager.error(
            "Please try again later",
            "Message could not be sent!"
          )
        }
      )
    e.target.reset()
  }

  return (
    <div className='Contact' id='Contact'>
      <h1 className='section-header'>Contact</h1>
      <div className='contact-form'>
        <form
          role='form'
          onSubmit={sendEmail}
          ref={form}
          data-aos='fade-up'
          data-aos-offset='200'
          data-aos-delay='50'
          data-aos-duration='900'
          data-aos-easing='ease'
          data-aos-mirror='false'
          data-aos-once='true'
        >
          <div className='row-1'>
            <input
              type='text'
              autoComplete='off'
              id='user_name'
              name='user_name'
              placeholder='Name'
              spellCheck='false'
              required
            ></input>

            <input
              type='email'
              autoComplete='off'
              id='user_email'
              name='user_email'
              placeholder='Email'
              spellCheck='false'
              required
            ></input>
          </div>

          <input
            type='text'
            autoComplete='off'
            id='from_name'
            name='from_name'
            placeholder='Subject'
            spellCheck='false'
          ></input>
          <br></br>

          <textarea
            id='message'
            autoComplete='off'
            name='message'
            placeholder='Message'
            spellCheck='false'
          ></textarea>
          <br></br>
          <div className='form-button'>
            <button type='submit' value='Submit' class='slide'>
              Send Message!
            </button>
          </div>
        </form>
      </div>
      <NotificationContainer />
    </div>
  )
}

export default Contact
