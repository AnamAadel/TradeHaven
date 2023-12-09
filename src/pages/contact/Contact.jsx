import React from 'react'
import CommonHero from '../shared/CommonHero'
import ContactForm from './components/ContactForm'
function Contact() {
  return (
    <>
      <CommonHero PageName={"Contact"} />
      <ContactForm />

    </>
  )
}

export default Contact