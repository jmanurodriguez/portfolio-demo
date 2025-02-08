import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar botón cuando se scrollea hacia abajo
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Función para scrollear suavemente hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-xl z-50 group"
          aria-label="Volver arriba"
        >
          <FaArrowUp className="text-xl group-hover:animate-bounce" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
