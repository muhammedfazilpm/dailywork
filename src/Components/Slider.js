import React, { useState, useEffect } from 'react';

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "https://imgs.search.brave.com/SOaP2kXTXhGzPvyPVqhUatbDdgAjNgrhdSeWFUvGOtU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzM5LzY2Lzg4/LzM2MF9GXzYzOTY2/ODg0OV80Mm5WRzRo/a1NLd2xaekhkaU9G/Njh1dFhYOXpiOWZn/NC5qcGc",
    "https://imgs.search.brave.com/5Z9UqPR4wve1FYAeh29rMbVRPg6coIPgDrcU8bQfBp0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzI3LzMzLzA2/LzM2MF9GXzYyNzMz/MDYwNF9Xekh2QmVM/TjRwWDRmYXRvQ3Bh/OVBieHVpRnRWN0l6/di5qcGc",
    "https://imgs.search.brave.com/8iJ6u23fTJzQE9pfqiP-xFL0b6YOs23J31YZJIS0gRg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9v/Y2N1cGF0aW9ucy1j/YXJlZXItZW1wbG95/bWVudC1yZWNydWl0/bWVudC1wb3NpdGlv/bi1jb25jZXB0XzUz/ODc2LTY0OTYyLmpw/Zz9zaXplPTYyNiZl/eHQ9anBn",
    "https://imgs.search.brave.com/1j9Bbq97qGdW75E062ffVP7Vs3DoCKUW8GE_mnPOZr4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zMS1l/Y3Auc2lnbnMuY29t/LzIxODIvU21hbGxC/dXNpbmVzc0hpcmlu/Zy0xLmpwZw"
  ];

  const nextSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds

    return () => clearInterval(slideInterval); // Clear interval on component unmount
  }, [currentSlide]);

  // Add your fixed height and width here
  const imageStyle = {
    height: '500px', // Set fixed height
    width: '100%', // Set width to 100% to make it responsive
    objectFit: 'cover' // Cover the container without stretching
  };

  return (
    <div>
      <div className="carousel w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item min-h-20 w-full ${index === currentSlide ? 'block' : 'hidden'}`}
          >
            <img src={slide} style={imageStyle} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
       
      </div>
      <div  className='row'>
      
      </div>
    </div>
  );
}

export default Slider;
