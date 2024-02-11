import ContactSection from '@/components/pages/ContactSection';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Contact",
  description: "Connect with Naufal RF, a junior web developer at IPB University, specializing in web development. Reach out to discuss collaboration opportunities, inquire about services, or simply say hello.",
};



const ContactPage = () => {
  return (
    <ContactSection/>
  )
}

export default ContactPage