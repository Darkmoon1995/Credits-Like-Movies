'use client'

import React, { useState } from 'react'
import { PlusCircle, MinusCircle } from "lucide-react"

const attributes = [
    { name: "Strength", value: 10, max: 20 },
    { name: "Dexterity", value: 10, max: 20 },
    { name: "Constitution", value: 10, max: 20 },
    { name: "Intelligence", value: 10, max: 20 },
    { name: "Wisdom", value: 10, max: 20 },
    { name: "Charisma", value: 10, max: 20 },
]

const characterInfo = [
    { name: "Level", value: 1, max: 20 },
    { name: "Experience points", value: 0, max: 300 },
    { name: "Alignment", value: "Neutral", options: ["Lawful Good", "Neutral Good", "Chaotic Good", "Lawful Neutral", "Neutral", "Chaotic Neutral", "Lawful Evil", "Neutral Evil", "Chaotic Evil"] },
    { name: "Race", value: "Human", options: ["Human", "Elf", "Dwarf", "Halfling", "Gnome"] },
    { name: "Class", value: "Fighter", options: ["Fighter", "Wizard", "Rogue", "Cleric", "Paladin"] },
    { name: "Background", value: "Soldier", options: ["Soldier", "Acolyte", "Criminal", "Noble", "Sage"] },
    { name: "Armor Class", value: 16, max: 30 },
    { name: "Initiative", value: 2, max: 10 },
    { name: "Speed", value: 30, max: 50 },
    { name: "Hit Point Maximum", value: 12, max: 100 },
    { name: "Current Hit Points", value: 12, max: 100 },
    { name: "Temporary Hit Points", value: 0, max: 50 },
]

export default function GameRPGCharacterSheet() {
    const [charAttributes, setCharAttributes] = useState(attributes)
    const [charInfo, setCharInfo] = useState(characterInfo)
    const [attributePoints, setAttributePoints] = useState(5)

    const handleAttributeChange = (index, change) => {
        if (
            attributePoints - change >= 0 &&
            charAttributes[index].value + change >= 1 &&
            charAttributes[index].value + change <= charAttributes[index].max
        ) {
            setCharAttributes(prev => prev.map((attr, i) =>
                i === index ? { ...attr, value: attr.value + change } : attr
            ))
            setAttributePoints(prev => prev - change)
        }
    }

    const handleInfoChange = (index, newValue) => {
        setCharInfo(prev => prev.map((info, i) =>
            i === index ? { ...info, value: newValue } : info
        ))
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-amber-100 p-4">
            <div className="w-full max-w-4xl bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center p-8 rounded-lg shadow-2xl border-8 border-amber-900/50 flex">
                {/* Left Page */}
                <div className="w-1/2 pr-4 border-r-2 border-amber-900/30">
                    <h2 className="text-2xl font-bold mb-4 text-amber-900">Attributes</h2>
                    <div className="mb-4 text-amber-900">Attribute Points: {attributePoints}</div>
                    <div className="h-[600px] overflow-y-scroll mr-4"> {/* Scrollable area */}
                        {charAttributes.map((attr, index) => (
                            <div key={attr.name} className="mb-4">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-amber-900 font-bold">{attr.name}</span>
                                    <div className="flex items-center">
                                        <button
                                            className="h-8 w-8 rounded-full border border-amber-300 bg-white hover:bg-amber-100 disabled:opacity-50"
                                            onClick={() => handleAttributeChange(index, -1)}
                                            disabled={attr.value <= 1 || attributePoints >= 5}
                                        >
                                            <MinusCircle className="h-4 w-4" />
                                        </button>
                                        <span className="mx-2 text-amber-900 font-bold">{attr.value}</span>
                                        <button
                                            className="h-8 w-8 rounded-full border border-amber-300 bg-white hover:bg-amber-100 disabled:opacity-50"
                                            onClick={() => handleAttributeChange(index, 1)}
                                            disabled={attr.value >= attr.max || attributePoints <= 0}
                                        >
                                            <PlusCircle className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                                <div className="h-2 bg-amber-200">
                                    <div
                                        className="h-full bg-amber-600"
                                        style={{ width: `${(attr.value / attr.max) * 100}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Page */}
                <div className="w-1/2 pl-4">
                    <h2 className="text-2xl font-bold mb-4 text-amber-900">Character Info</h2>
                    <div className="h-[600px] overflow-y-scroll ml-4"> {/* Scrollable area */}
                        {charInfo.map((info, index) => (
                            <div key={info.name} className="mb-4">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-amber-900 font-bold">{info.name}</span>
                                    {info.options ? (
                                        <select
                                            value={info.value}
                                            onChange={(e) => handleInfoChange(index, e.target.value)}
                                            className="bg-amber-50 border border-amber-300 text-amber-900 rounded-md p-1"
                                        >
                                            {info.options.map(option => (
                                                <option key={option} value={option}>{option}</option>
                                            ))}
                                        </select>
                                    ) : (
                                        <span className="text-amber-900 font-bold">{info.value}</span>
                                    )}
                                </div>
                                {typeof info.value === 'number' && (
                                    <input
                                        type="range"
                                        value={info.value}
                                        min={0}
                                        max={info.max}
                                        step={1}
                                        className="w-full bg-amber-200"
                                        onChange={(e) => handleInfoChange(index, parseInt(e.target.value))}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
