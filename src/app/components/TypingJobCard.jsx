// JobCardWithTyping.jsx
import React, { useState, useEffect } from "react";
import { Button } from "./Buttons";
import JobCard from "./JobCard";

const titles = ["Junior Consultant (10-15)", "Junior Analysts (2-3)"];
const typingSpeed = 100; // ms per character
const deletingSpeed = 50; // ms per character
const pauseTime = 1500; // ms to wait after typing

const JobCardWithTyping = ({ applyUrl }) => {
    const [titleIndex, setTitleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentTitle = titles[titleIndex];
        let timeout;

        if (!isDeleting && displayText.length < currentTitle.length) {
            timeout = setTimeout(() => {
                setDisplayText(currentTitle.slice(0, displayText.length + 1));
            }, typingSpeed);
        } else if (!isDeleting && displayText.length === currentTitle.length) {
            timeout = setTimeout(() => setIsDeleting(true), pauseTime);
        } else if (isDeleting && displayText.length > 0) {
            timeout = setTimeout(() => {
                setDisplayText(currentTitle.slice(0, displayText.length - 1));
            }, deletingSpeed);
        } else if (isDeleting && displayText.length === 0) {
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % titles.length);
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, titleIndex]);

    return (
        <JobCard
            img={
                <img
                    src="/icons/nord-full-updated-purple.png"
                    alt="NORD Consulting"
                    className="w-full h-full object-contain"
                />
            }
            title={
                <span className="inline-block">
                    {displayText}
                    <span className="typing-bar ml-1">&nbsp;</span>
                </span>
            }
        >
            <Button
                variant="primary"
                onClick={() => window.open(applyUrl, '_blank', 'noopener,noreferrer')}
            >
                Apply now
            </Button>
            {/* Tailwind CSS doesn't have a built-in blinking cursor, so add custom style */}
            <style jsx>{`
        .typing-bar {
          display: inline-block;
          width: 3px;
          background-color: #884998;
          animation: blink 1s step-start infinite;
        }
        @keyframes blink {
          0%, 50%, 100% {
            opacity: 1;
          }
          25%, 75% {
            opacity: 0;
          }
        }
      `}</style>
        </JobCard>
    );
};

export default JobCardWithTyping;