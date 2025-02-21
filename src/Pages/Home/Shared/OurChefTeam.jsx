import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const OurChefTeam = () => {
    const[chef,setChef] = useState([]);

    useEffect(() => {
        fetch('/ourChef.json')
        .then(res => res.json())
        .then(result => {
            setChef(result)
        })
    },[])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true, dots: true }
          },
          {
            breakpoint: 600,
            settings: { slidesToShow: 1, slidesToScroll: 1 }
          }
        ]
      };
    return (
        <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left Section - Slider */}
        <div className="w-full md:w-1/2 animate-fadeInLeft">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center md:text-left">Our Chefs</h2>
          <Slider {...settings}>
            {chef.map(chef => (
              <div key={chef.chef_id} className="px-3">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <img 
                    src={chef.chef_image} 
                    alt={chef.name} 
                    className="w-full h-56 object-cover" 
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-800">{chef.name}</h3>
                    <p className="mt-2 text-gray-600"><span className="font-medium">Specialty:</span> {chef.specialty}</p>
                    <p className="mt-1 text-gray-600"><span className="font-medium">Experience:</span> {chef.experience}</p>
                    <p className="mt-1 text-gray-600"><span className="font-medium">Restaurant:</span> {chef.restaurant}</p>
                    <p className="mt-1 text-gray-600"><span className="font-medium">Signature Dish:</span> {chef.signature_dish}</p>
                    <p className="mt-1 text-gray-600"><span className="font-medium">Country:</span> {chef.chef_country}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Right Section - Static Image */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8 animate-fadeInRight">
          <img 
            src="https://via.placeholder.com/600x400?text=Our+Chefs" 
            alt="Our Chefs" 
            className="w-full rounded-lg shadow-2xl object-cover" 
          />
        </div>
      </div>
    </section>
    );
};

export default OurChefTeam;