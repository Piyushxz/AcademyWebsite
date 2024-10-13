import React, { useEffect, useState } from 'react';

const CarouselTwo = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1280,f_auto,q_auto/v1727944261/w6oi3seuvlmsggphhpxi.webp?_upload_ref=ic_img_tool",
        "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1024,f_auto,q_auto/v1728295471/gbvvlbtgpsecq57ivwff.png?_upload_ref=ic_img_tool",
        "https://res.cloudinary.com/dpzpn3dkw/image/upload/v1728302450/Homepage_Banner_1_sn5css.webp",
        'https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1280,f_auto,q_auto/v1727944598/wr9qyk4gyqgnntgonfvy.webp?_upload_ref=ic_img_tool',
        'https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1280,f_auto,q_auto/v1727944619/v6cgvy44tde2yjq4yguo.webp?_upload_ref=ic_img_tool'
    ];

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(goToNextSlide, 5000); 
        return () => clearInterval(interval); 
    }, []);

    return (
        <div id="indicators-carousel" className="relative w-full flex flex-col items-center  rounded-lg max-w-screen-lg mx-auto max-h-72">
            {/* Image Carousel */}
            <div className="relative h-56 md:h-96 overflow-hidden w-full rounded-2xl">
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

export default CarouselTwo;
