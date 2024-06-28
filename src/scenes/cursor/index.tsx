import React, { useEffect, useRef } from 'react'
import {gsap} from "gsap"

type Props = {}

const CustomCursor = (props: Props) => {
    const cursorRef = useRef<HTMLDivElement>(null)
    const followersRef = useRef<HTMLDivElement>(null)

    const moveCursor = (e:MouseEvent): void => {
        gsap.to(cursorRef.current, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.2,
        })
        gsap.to(followersRef.current, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.9,
        })
    }

    useEffect(() => {
        gsap.set(cursorRef, {
            xPercent: 100,
            yPercent: 100
        })
        gsap.set(followersRef, {
            xPercent: -20,
            yPercent: -20
        })
        
        window.addEventListener("mousemove", moveCursor)
    }, [])

    return (
        <div>
            <div ref={cursorRef} className='cursor'></div>
            <div ref={followersRef} className='followers-cursor'></div>
        </div>
    )
}

export default CustomCursor