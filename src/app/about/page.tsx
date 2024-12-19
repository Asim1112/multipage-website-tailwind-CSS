import React from 'react'

const page = () => {
  return (
    <section className="about h-screen flex items-center justify-start bg-cover bg-center text-white px-10" style={{ backgroundImage: "url('/pic-about.jpg')"}}>
        <div className="bg-black bg-opacity-60 p-8 rounded-md max-w-lg">
            <h2 className="text-2xl font-bold mb-4" data-aos='fade-up'>About Us</h2>
            <p>At Urban Rover, our vision is to redefine the SUV experience by offering vehicles that seamlessly blend style, comfort, and performance. We aim to empower adventurers and urban explorers alike, ensuring every journey is an unforgettable one. We pride ourselves on delivering only the highest quality SUVs, meticulously inspected to meet the highest standards of safety, durability, and luxury. Every vehicle at Urban Rover reflects our promise of excellence. Our SUVs are engineered to excel in every terrain, offering unmatched performance for city commutes, off-road adventures, and everything in between. Urban Rover is your gateway to power, precision, and reliability.</p>
                
        </div>
    </section>
  )
}

export default page
