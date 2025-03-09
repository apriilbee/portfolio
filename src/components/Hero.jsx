'use client'
import Image from 'next/image'
import HeroImage from "./sub/HeroImage"
import { heroIcons } from '@/assets'

import { useMotionValue, useTransform, motion, useSpring } from 'framer-motion'
import { useState } from 'react'
import { ReactTyped } from 'react-typed';
 
const Hero = () => {
    const [windowOffset, setWindowOffset] = useState({innerWidth: 0,innerHeight: 0})
    const [mouseMove, setMouseMove] = useState(false)
    const [buttonHover, setButtonHover] = useState(false)
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const handleMouseMove = (e) => {
        const {clientX, clientY} = e
        x.set(clientX)
        y.set(clientY)
    }

    const handleMouseEnter = () => {
        setWindowOffset({innerWidth: window.innerWidth, innerHeight: window.innerHeight}) 
        setMouseMove(true)
    }

    const {innerWidth, innerHeight} = windowOffset
    const xSpring = useSpring(x,{stiffness:100, damping: 10})
    const ySpring = useSpring(y,{stiffness:100, damping: 10})
    const rotateY = useTransform(xSpring, [0, innerWidth], [-30, 30])
    const rotateX = useTransform(ySpring, [0, innerHeight], [10, -50])

    return (
        <div id="home" className="h-screen grid place-items-center" onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter}>
            <div>
                <div className='flex flex-col items-center justify-center gap-y-3 font-light capitalize'>
                    <motion.div 
                        className='flex items-center justify-center' 
                        style={{
                            rotateX: mouseMove ? rotateX: 0, 
                            rotateY: mouseMove ? rotateY : 0, 
                            transition: '0.1s'
                        }}>
                        <HeroImage />
                        <motion.span 
                            className='absolute text-3l font-semibold text-white' 
                            initial={{scale:0}} 
                            animate={{
                                opacity: buttonHover ? 0: 1, 
                                scale: buttonHover? 2:0, 
                                y: buttonHover ? -20 : 0
                            }}
                            transition={{opacity: {delay:0.4}}}> 
                            Hi
                        </motion.span>
                    </motion.div>
                </div>
                <ReactTyped className='text-center text-6xl font-bold tracking-wider text-yellow-500' 
                   strings={[
                    "<span class='text-gray-500 font-semibold'>hi, </span> <span class='text-yellow-500 font-semibold'>april dae</span> <span class='text-gray-500 font-semibold'>here.</span>"
                   ]}
                   typeSpeed={100} backSpeed={50} backDelay={500} startDelay={500} loop={false}
                />
                <p className='mt-2 text-center text-4xl tracking-wider text-gray-400'>i like software development,</p>
                <p className='mt-2 text-center text-2xl tracking-wider text-gray-200'>i think.</p>
                <div className='mt-8 flex justify-center gap-x-10 text-3xl text-yellow-600 sm:text-2xl'>
                    {heroIcons.map((icon, i) => (
                        <a href='#' key={i} className='hover:bg-red-400 hover:text-white transition-colors rounded-lg'>
                            {icon}
                        </a>
                    ))}
                </div>
                <a 
                    href="#" 
                    className='mx-auto mt-7 block w-max rounded-lg bg-red-300 px-3 py-1 font-light capitalize 
                        tracking-wider text-white hover:bg-red-500 transition-colors' 
                    onMouseEnter={() => setButtonHover(true)}
                    onMouseLeave={() => setButtonHover(false)}
                >
                    Talk to Me
                </a>
            </div>
        </div>
    )
}

export default Hero