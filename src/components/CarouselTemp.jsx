import React, { useEffect, useState } from 'react';

const CarouselTemp = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        { 
            img: "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_600,f_auto,q_auto/v1727953163/oebyukgkusnrgafhi6kh.png?_upload_ref=ic_img_tool",
            title: "Allen Online Programs NEET(UG) 2024 Results",
            description: "24 Students have scored 700+"
        },
        {
            img: "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_600,f_auto,q_auto/v1727953193/hbdu8gunuoob1rwhfnyy.png?_upload_ref=ic_img_tool",
            title: "Allen Online Programs JEE 2024 Results",
            description: "14 Students have made it to top 500 AIR"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); 

        return () => clearInterval(interval); 
    }, [images.length]);

    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="font-montserrat font-semibold text-5xl text-white">Our remarkable results in 2024</h1>
            <div id="indicators-carousel" className="relative w-full flex flex-row justify-center rounded-lg max-w-screen-lg mx-auto ">
                <div className="relative overflow-hidden w-1/2 rounded-2xl mt-20 bg-white">
                    {/* Dynamic Image Display */}
                    <img
                        src={images[currentIndex].img}
                        className="object-cover max-h-full"
                        alt={`Slide ${currentIndex + 1}`}
                    />
                </div>

                <div className='w-1/2 rounded-2xl mt-20 flex items-center p-6'>
                    <div className='flex flex-col'>
                        {/* Dynamic Title and Description */}
                        <h1 className='text-2xl font-montserrat font-bold text-white'>{images[currentIndex].title}</h1>
                        <h2 className='text-base text-gray-400 font-montserrat font-normal mt-4'>{images[currentIndex].description}</h2>
                    </div>
                </div>
            </div>

            {/* Slider indicators (Dots) */}
            <div className="flex space-x-2 mt-4">
                {images.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-4 h-4 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
                        aria-current={currentIndex === index ? 'true' : 'false'}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default CarouselTemp;
