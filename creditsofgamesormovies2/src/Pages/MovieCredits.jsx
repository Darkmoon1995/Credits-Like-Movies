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
                <h1 className="text-4xl mb-8">A Life Movie</h1>
                <h2 className="text-4xl mb-8">How to Not Live</h2>

                <h3 className="text-2xl mb-4">Cast</h3>
                <p className="mb-2">Myself as MainCharacter </p>
                <p className="mb-2">my Mother and Father as Important Character </p>
                <p className="mb-8">My Brother as The Friend</p>

                <h3 className="text-2xl mb-4">Crew</h3>
                <p className="mb-2">Directed by: God</p>
                <p className="mb-2">Written by: Lucifer / Satan</p>
                <p className="mb-2">Produced by: My boardem</p>
                <p className="mb-8">Cinematography by: --- </p>

                <h3 className="text-2xl mb-4">Music</h3>
                <p className="mb-2">Composed by: World</p>
                <p className="mb-8">Performed by: RandomArtist</p>

                <h3 className="text-2xl mb-4"> PowerStats</h3>
                <p className="mb-2">Strength : Avarege</p>
                <p className="mb-2">intelligence : -8 to 10</p>
                <p className="mb-8">Special Powers : 0</p>

                <h3 className="text-2xl mb-4"> FriendStats</h3>
                <p className="mb-2">GF (partners) : -1</p>
                <p className="mb-2">Friends : 3</p>
                <p className="mb-8">BestFriends : 1</p>

                <h3 className="text-2xl mb-4"> Items</h3>
                <p className="mb-2">Money Earned : 1,000,000 $ </p>
                <p className="mb-2">Money Spent : 1,004,000 $ </p>
                <p className="mb-8">Days Playes : 31,119 </p>


                <h3 className="text-2xl mb-4">Special Thanks</h3>
                <p className="mb-2">To my need of friends</p>
                <p className="mb-2">All our amazing supporters</p>
                <p className="mb-16">And You, who read this.</p>

                <p className="text-sm mb-32">:D 2007 - 2XXX God. All rights reserved.</p>
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
