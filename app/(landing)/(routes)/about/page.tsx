import AboutSection from '@/components/pages/AboutSection'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "About",
  description: "Discover Naufal RF's journey as a student at IPB University. Learn about his passion for web development, academic pursuits in Computer Engineering, and commitment to creating innovative digital solutions.",
};



const AboutPage = () => {
  return (
    <AboutSection hidden={false} />
  )
}

export default AboutPage