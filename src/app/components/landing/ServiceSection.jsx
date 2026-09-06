'use client';
import { Button } from "../Buttons";
import Link from "next/link";
import Clients from "./Clients";
import Placements from "./Placements";
import { useState } from "react";



const services = [
    {
        title: "Consulting",
        description:
            "Our consulting practice provides pro-bono, data-driven solutions tailored to the unique needs of non-profits and social enterprises. From volunteer management and funding diversification to program redesign and impact measurement, our teams work closely with clients to translate complex challenges into actionable strategies. Every project delivers practical recommendations supported by rigorous analysis, strengthening organizational capacity and creating lasting social value.",
        background: "/photos/consulting-bg.jpg",
        link: "/services/",
    },
    {
        title: "Research",
        description:
            "Launched in 2024, our research initiative leverages project experience and data expertise to generate sector-wide insights. Through reports and analyses, we equip Montreal’s non-profit community with the tools to track, evaluate, and amplify their impact.",
        background: "/photos/research-bg.jpg",
        link: "/services/",
    },
    {
        title: "Community Service",
        description:
            "Beyond consulting, we actively contribute to the city’s social innovation ecosystem by volunteering our time, sharing resources, and co-creating data solutions that drive collective progress.",
        background: "/photos/community-bg.png",
        link: "/services/",
    },
    {
        title: "Training",
        description:
            "We partner with leading firms such as McKinsey, KPMG, Deloitte, and Accenture to bring exclusive workshops and training sessions led by industry professionals. These experiences equip our members with the skills to tackle real-world problems, deliver data-driven insights, and grow as collaborative teammates and future leaders.",
        background: "/photos/training-bg.jpg",
        link: "/services/",
    },
    {
        title: "Events",
        description:
            "Every year, NORD Consulting hosts conferences that bring students together with industry leaders. Notable initiatives include Being Black in Consulting, fostering dialogue on diversity and inclusion, and creating meaningful networking opportunities for students with top consulting firms.",
        background: "/photos/event-bg.png",
        link: "/services/",
    },
];
export default function ServicesSection() {
    const [selected, setSelected] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section id="services" className="py-20 ">
            <div className=" mb-20 bg-brand-purple-light h-full">
                <div className="md:flex-row flex flex-col">
                    <div className="text-left flex flex-col text-black md:w-1/2 w-full p-10">
                        <h2 className="font-bold mb-6 ">
                            Our Services
                        </h2>
                        <p className="mb-6">We empowering non-profits and social innovators through data-driven consulting, actionable research, community engagement, expert training, and industry-leading events.</p>

                        {/* Left: Dropdown / List of choices */}
                        <div className="relative w-2/3">
                            <div className={`flex w-full justify-between border border-gray-300 rounded-2xl px-5 py-2 cursor-pointer ${selected ? "bg-brand-purple text-white" : "text-gray-500"}`}
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <span>{selected ? selected.title : "Select a service..."}</span>
                                {/* Arrow */}
                                <span
                                    className={`ml-2 transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"
                                        }`}
                                >
                                    →
                                </span>
                            </div>

                            {isOpen && (
                                <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-300 rounded-xl shadow-lg z-10">
                                    {services.map((service) => (
                                        <div
                                            key={service.title}
                                            className={`m-2 px-4 py-2 rounded-2xl cursor-pointer transition-all duration-300 ${selected?.title === service.title ? "bg-brand-purple text-white" : " hover:bg-gray-100"
                                                }`}
                                            onClick={() => {
                                                setSelected(service);
                                                setIsOpen(false);
                                            }}
                                        >
                                            {service.title}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>


                        <Link href={"/services"} className="w-fit flex justify-start mt-10">
                            <Button
                                variant="secondary" className="px-6 py-3"
                            >
                                See how we specialize →
                            </Button>
                        </Link>
                    </div>
                    {/* Right: Description of selected choice */}
                    <div
                        className={`${selected ? "p-10 sm:px-20" : "p-0"} w-full md:w-2/3 min-h-[50vh] flex flex-col justify-end rounded-xl overflow-hidden`}
                        style={{
                            backgroundImage: selected ? `url(${selected.background})` : "none",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundColor: selected ? "transparent" : "none", // fallback bg when nothing selected
                        }}
                    >

                        {selected ? (

                            <div className="bg-white/70 p-10 rounded-xl h-fit flex flex-col text-black backdrop-blur-xs">
                                <div>
                                    <p className="text-2xl font-medium mb-4">{selected.title}</p>
                                    <p className="mb-6">{selected.description}</p>
                                </div>
                                <Link href={selected.link} className="w-full flex justify-end">
                                    <Button variant="primary" className="px-6 py-3">
                                        View More →
                                    </Button>
                                </Link>
                            </div>
                        ) : (

                            /*     <div className="h-full w-full rounded-xl mb-4 flex items-center justify-center">
                            <div className="flex items-center w-1/2">
                                <img src="/icons/nord-full-updated-purple.png" alt="NORD Consulting" className="w-full h-auto object-contain" />
                            </div>
                            </div> */
                            <img src="/photos/sample.png" className="h-full w-full object-cover" />

                        )}
                    </div>
                </div>
            </div>




            <Clients />
            <Placements />

        </section>
    );
}