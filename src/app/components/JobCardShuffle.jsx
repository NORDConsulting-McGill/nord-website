"use client"
import React, { useState, useEffect } from "react";
import { Button } from "./Buttons"; // adjust path
import JobCard from "./JobCard"; // the reusable JobCard we made

const JobCardShuffle = () => {
    const cards = [
        {
            img: <img
                src="/icons/nord-full-updated-purple.png"
                alt="NORD Consulting"
                className="w-full h-full object-contain"
            />,
            title: "Junior Consultant (10-15)",
            children: <Button variant="primary">Apply now</Button>,
        },
        {
            img: <img
                src="/icons/nord-full-updated-purple.png"
                alt="NORD Consulting"
                className="w-full h-full object-contain"
            />,
            title: "Junior Analysts (2-3)",
            children: <Button variant="primary">Apply now</Button>,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % cards.length);
        }, 3000); // change every 3s

        return () => clearInterval(interval);
    }, [cards.length]);

    return (
        <div className="relative w-full flex justify-center h-[400px]">
            {cards.map((card, index) => {
                // Check if this is the current visible card
                const isActive = index === currentIndex;
                return (
                    <div
                        key={index}
                        className={`absolute transition-opacity duration-1000 ease-in-out ${isActive ? "opacity-100 z-20" : "opacity-0 z-10"
                            }`}
                    >
                        <JobCard img={card.img} title={card.title}>
                            {card.children}
                        </JobCard>
                    </div>
                );
            })}
        </div>
    );
};

export default JobCardShuffle;