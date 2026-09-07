'use client';
import React from 'react';
import { Button } from '../components/Buttons';
import JobCardWithTyping from '../components/TypingJobCard';
import Image from 'next/image';
import ParallaxContainer from '../components/ParallaxBox';
import { FadeInBlur } from '../components/animations/FadeInBlur';

// Fall 2026 recruitment round
const APPLICATION_URL = 'https://forms.cloud.microsoft/r/hLkutNDnfj';

const openApplication = () =>
    window.open(APPLICATION_URL, '_blank', 'noopener,noreferrer');

const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

const Page = () => {
    return (
        <div>
            {/* Hero Section with Parallax */}
            <ParallaxContainer
                backgroundSrc="/photos/team.png"
                className="h-[70vh] justify-start flex items-center pt-16 bg-white"
                speed={0.5} // adjust parallax speed if needed
                // Washed-out full-bleed photo: the whole team stays visible while the
                // purple type reads cleanly on top.
                overlayClassName="bg-gradient-to-b from-white/88 via-white/82 to-brand-purple-light/80"
                wipeOnHover
            >
                <div className="container px-20 relative z-10 text-left">
                    <div className="max-w-2xl">
                        <FadeInBlur className='-translate-y-20'>
                            <h1 className="font-bold mb-6 text-brand-purple">
                                Are you the bright minds we are seeking?
                            </h1>
                        </FadeInBlur>
                        <div className="flex flex-col sm:flex-row gap-4 justify-start mt-6">
                            <Button variant="purple" onClick={openApplication}>
                                Apply now →
                            </Button>
                        </div>
                    </div>
                </div>
            </ParallaxContainer>

            {/* Info Section */}
            <div className="p-10 bg-white">
                <div className="flex flex-col sm:flex-row">
                    <div className="flex flex-col text-left sm:w-2/3 w-full p-10 gap-5">
                        <h2 className="text-4xl lg:text-5xl font-bold text-brand-navy">
                            Join Us
                        </h2>
                        <p className="text-gray-700">
                            Formerly known as the McGill Social Business Network
                            (MSBN), NORD Consulting is McGill’s premier pro-bono
                            consulting practice. For over 10 years, we’ve partnered
                            with 50+ non-profits to deliver data-driven solutions
                            and empower purpose-driven organizations to maximize
                            their impact in the Montreal community.
                        </p>

                        <p className="text-gray-700">
                            At NORD, we believe in learning by doing — tackling
                            real-world challenges with innovation, professionalism,
                            and impact. As a member, you’ll gain hands-on consulting
                            experience, professional training, and the chance to make
                            a meaningful difference.
                        </p>
                        <p className='text-brand-purple-dark font-bold'>🗓️ Deadline: September 22nd, 11:59 PM ET
                        </p>


                        <Button
                            variant="solid"
                            className="border border-gray-200 shadow-sm"
                            onClick={() =>
                                window.open('https://www.instagram.com/nord.mcgill/', '_blank')
                            }
                        >
                            <div className="flex gap-2">
                                <img src="/icons/ins.svg" className="w-5 h-5 object-contain" />@nord.mcgill
                            </div>
                            →
                        </Button>
                    </div>
                    <div className="w-full sm:w-1/3 flex items-center justify-center px-4 pb-6 sm:p-10">
                        <JobCardWithTyping applyUrl={APPLICATION_URL} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;