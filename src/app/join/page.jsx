'use client';
import React from 'react';
import { PrimaryButton, Button } from '../components/Buttons';
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
                className="h-[70vh] justify-start flex items-center pt-16 bg-brand-purple-dark"
                speed={0.5} // adjust parallax speed if needed
                // Desktop: photo sits to the right of a solid purple panel, so nothing
                // is hidden behind the copy. Mobile: full-bleed photo + scrim instead.
                backgroundClassName="lg:left-[62%] xl:left-[50%] 2xl:left-[45%]"
                overlayClassName="bg-gradient-to-b from-brand-purple-dark/75 to-brand-purple-dark/45 lg:hidden"
            >
                <div className="container px-20 relative z-10 text-left">
                    {/* Capped so the copy stays inside the solid panel and never
                        runs over the photo. */}
                    <div className="max-w-lg">
                        <FadeInBlur className='-translate-y-20'>
                            <h1 className="font-bold mb-6 text-white">
                                Are you the bright minds we are seeking?
                            </h1>
                        </FadeInBlur>
                        <div className="flex flex-col sm:flex-row gap-4 justify-start mt-6">
                            <PrimaryButton onClick={openApplication}>
                                Apply now →
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </ParallaxContainer>

            {/* Info Section */}
            <div className="p-10 bg-brand-purple">
                <div className="flex flex-col sm:flex-row">
                    <div className="flex flex-col text-left sm:w-2/3 w-full p-10 gap-5">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white">
                            Join Us
                        </h2>
                        <p className="text-white">
                            Formerly known as the McGill Social Business Network
                            (MSBN), NORD Consulting is McGill’s premier pro-bono
                            consulting practice. For over 10 years, we’ve partnered
                            with 50+ non-profits to deliver data-driven solutions
                            and empower purpose-driven organizations to maximize
                            their impact in the Montreal community.
                        </p>

                        <p className="text-white">
                            At NORD, we believe in learning by doing — tackling
                            real-world challenges with innovation, professionalism,
                            and impact. As a member, you’ll gain hands-on consulting
                            experience, professional training, and the chance to make
                            a meaningful difference.
                        </p>
                        <p className='text-white font-bold'>🗓️ Deadline: September 19th, 11:59 PM
                        </p>


                        <Button
                            variant="solid"
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