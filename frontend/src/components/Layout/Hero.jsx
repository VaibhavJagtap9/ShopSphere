import React from 'react'
import heroImg from '../../assets/rabbit-hero.jpeg'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[650px] lg:h-[800px] overflow-hidden">
      {/* Background Image */}
      <img 
        src={heroImg} 
        alt="rabbit hero" 
        className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700 ease-in-out"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex items-center">
        <div className="text-left px-6 md:px-16 lg:px-24 animate-fadeInUp">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight drop-shadow-lg">
            Vacation <br /> Ready
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-200 max-w-xl drop-shadow-md">
            Discover our premium vacation outfits with worldwide fast shipping.
          </p>

          {/* CTA Button */}
          <div className="mt-6">
            <Link 
              to="#"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-medium shadow-md hover:bg-gray-200 hover:scale-105 transition-transform duration-300"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
