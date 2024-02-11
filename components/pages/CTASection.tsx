import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const CTASection = () => {
  return (
    <section className='py-24 bg-secondary dark:bg-secondary/20'>
        <div className='container mx-auto'>
            <div className='flex flex-col items-center'>
                <h2 className='text-lg font-bold md:text-2xl max-w-xl text-center mb-8'>
                    Any project in mind? Let&apos;s work together and make something great.
                </h2>
                <Link href='/contact'>
                    <Button>Contact Me</Button>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default CTASection