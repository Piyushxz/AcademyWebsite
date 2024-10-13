import React, { useEffect, useState } from 'react';

const CarouselOne = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        'https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1707310905%2Fc_1_aorh14.webp&w=640&q=75',
        'https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1707310904%2Fc_2_ix0igr.webp&w=640&q=75',
        'https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1707310904%2Fc_3_qurxw1.webp&w=640&q=75',
        'https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1707310905%2Fc_4_olon7a.webp&w=640&q=75',
    ];

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(goToNextSlide, 5000); 
        return () => clearInterval(interval); 
    }, []);

    return (
        <div id="indicators-carousel" className="relative w-full flex flex-col items-center ">
            {/* Image Carousel */}
            <div className="relative h-56 md:h-96 overflow-hidden w-full flex justify-center items-center">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        className={`absolute transition-opacity duration-700 ease-in-out ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        alt={`Slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Slider indicators (Dots) - Now under the image */}
            <div className="flex space-x-3 mt-4">
                {images.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
                        aria-current={currentIndex === index ? 'true' : 'false'}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default CarouselOne;
