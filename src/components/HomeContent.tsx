"use client"

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeContent = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });

    },[]);
    return (
        <section className="hero h-screen flex items-center bg-cover bg-center" style={{ backgroundImage: "url(pic3.jpg)"}}>
            <div className="pl-0 md:pl-16 text-white text-center">
                <h1 className="text-6xl font-bold drop-shadow-md" data-aos="fade-up">Welcome to Urban Rover</h1>
                <p className="text-2xl mt-4">Conquer the Urban Jungle, Explore Beyond</p>
                <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-orange-700 rounded-md font-bold">Shop Now</button>

            </div>
        </section>
    )
}

export default HomeContent;