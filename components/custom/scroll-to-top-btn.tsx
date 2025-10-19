'use client'

import { ChevronUp } from 'lucide-react'
import React, { useState, useEffect } from 'react'

const ScrollToTopBtn = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0)
    const [showButton, setShowButton] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop =
                document.documentElement.scrollTop || document.body.scrollTop
            const scrollHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight
            const percentage = (scrollTop / scrollHeight) * 100

            setScrollPercentage(percentage)

            if (scrollTop > 200) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    const circleLength = 2 * Math.PI * 45
    const offset = circleLength - (scrollPercentage / 100) * circleLength

    return (
        <button
            id="back-to-top"
            className={`group fixed bottom-24 right-6 z-30 flex size-14 items-center justify-center rounded-full border border-white bg-white text-secondary opacity-0 shadow-lg transition-opacity duration-300 sm:bottom-28 ${showButton ? 'visible opacity-100' : 'invisible opacity-0'}`}
            onClick={scrollToTop}
        >
            <ChevronUp className='size-6' />
            <div
                id="progress-bar"
                className="absolute left-0 top-0 flex h-full w-full items-center justify-center"
            >
                <svg
                    className="h-full w-full text-secondary"
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                >
                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="#ddd"
                        strokeWidth="10"
                        fill="none"
                    />
                    <circle
                        id="progress-circle"
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="none"
                        strokeDasharray="283"
                        strokeDashoffset={offset}
                    />
                </svg>
            </div>
        </button>
    )
}

export default ScrollToTopBtn
