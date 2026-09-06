"use client"
import Link from "next/link";

// `progress` mirrors the navigation's scroll transition (0 = transparent bar over
// the dark hero, 1 = solid white bar), so the logo swaps white -> purple with it.
export default function BrandIcon({ progress = 1, className = "" }) {

    return (
        <Link href={"/landing"} aria-label="NORD Consulting — home">
            <div className={`relative h-16 w-32 ${className}`}>
                <img
                    src="/icons/nord-full-updated-white.png"
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-contain object-left transition-opacity duration-300"
                    style={{ opacity: 1 - progress }}
                />
                <img
                    src="/icons/nord-full-updated-purple.png"
                    alt="NORD Consulting"
                    className="absolute inset-0 h-full w-full object-contain object-left transition-opacity duration-300"
                    style={{ opacity: progress }}
                />
            </div>
        </Link>
    );
}
