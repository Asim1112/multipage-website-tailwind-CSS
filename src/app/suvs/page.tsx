import React from 'react'

const page = () => {
    const suvsData = [
        { id: 1, name: "Toyota LandCruiser", price: 185000, description: "A legendary blend of luxury, durability, and off-road capability for every adventure.", image: "/suv8.jpg" },
        { id: 2, name: "Toyota Prado", price: 110000, description: "A perfect balance of elegance, comfort, and rugged performance for any terrain.", image: "/suv5.jpg" },
        { id: 3, name: "Hyundai Palisade", price: 196000, description: "A bold and spacious SUV that combines premium comfort with advanced technology.", image: "/suv4.jpg" },
        { id: 4, name: "GMC Yukon Denali", price: 235000, description: "A pinnacle of luxury, power, and refinement in a full-size SUV.", image: "/suv6.jpg" },
        { id: 5, name: "Ford Escape", price: 268000, description: "A versatile and efficient SUV designed for urban adventures and beyond.", image: "/suv7.jpg" },
        { id: 6, name: "Kia Carnival", price: 198000, description: "A family-friendly MPV that offers spacious comfort, modern features, and impressive performance.", image: "/suv1.jpg" },
    ];


  return (
    <div className="suvs grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10">
        {suvsData.map(suvs => (
            <div key={suvs.id} className="suvs-card bg-white p-5 rounded-md shadow-md text-center">
             <img src={suvs.image} alt={suvs.name} className="w-full rounded-md transition-transform duration-300 transform hover-scale-110" />
             <h3 className="mt-4 text-2xl font-bold">{suvs.name}</h3>    
             <p className="text-gray-500">{suvs.description}</p>
             <div className="price text-blue-500 text-xl font-semibold mt-2">${suvs.price}</div>
             <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">Add to Cart</button>
             </div>
        ))}
    </div>
  )
}

export default page
