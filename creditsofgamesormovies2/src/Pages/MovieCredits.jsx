'use client'

import React, { useState, useEffect, useRef } from 'react'
import { RefreshCw } from 'lucide-react'

export default function MovieCredits() {
    const [key, setKey] = useState(0)
    const creditsRef = useRef(null)

    useEffect(() => {
        const credits = creditsRef.current
        if (credits) {
            const totalHeight = credits.scrollHeight
            const animationDuration = totalHeight * 0.05 // Adjust speed here

            credits.style.animationDuration = `${animationDuration}s`
            credits.classList.add('scrolling')
        }
    }, [key])

    const handleReload = () => {
        setKey(prevKey => prevKey + 1)
    }

    return (
        <div className="h-screen w-full bg-black overflow-hidden relative">
            <button
                onClick={handleReload}
                className="absolute top-4 right-4 z-10 border border-white rounded-full p-2 hover:bg-gray-700 transition-colors"
                aria-label="Reload Credits"
            >
                <RefreshCw className="h-4 w-4 text-white" />
            </button>
            <div
                key={key}
                ref={creditsRef}
                className="text-white font-mono text-center absolute bottom-0 left-0 right-0 transform translate-y-full"
            >
                <h2 className="text-4xl mb-8">Movie Title</h2>

                <h3 className="text-2xl mb-4">Cast</h3>
                <p className="mb-2">John Doe as Character 1</p>
                <p className="mb-2">Jane Smith as Character 2</p>
                <p className="mb-8">Bob Johnson as Character 3</p>

                <h3 className="text-2xl mb-4">Crew</h3>
                <p className="mb-2">Directed by: Alice Williams</p>
                <p className="mb-2">Written by: Charlie Brown</p>
                <p className="mb-2">Produced by: David Miller</p>
                <p className="mb-8">Cinematography by: Eva Davis</p>

                <h3 className="text-2xl mb-4">Music</h3>
                <p className="mb-2">Composed by: Frank Wilson</p>
                <p className="mb-8">Performed by: The Movie Orchestra</p>

                <h3 className="text-2xl mb-4">Special Thanks</h3>
                <p className="mb-2">The City of New York</p>
                <p className="mb-2">All our amazing supporters</p>
                <p className="mb-16">And You, for watching!</p>

                <p className="text-sm mb-32">© 2023 Movie Production Company. All rights reserved.</p>
            </div>
            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateY(100%);
                    }
                    100% {
                        transform: translateY(-100%);
                    }
                }
                .scrolling {
                    animation: scroll linear forwards;
                }
            `}</style>
        </div>
    )
}
