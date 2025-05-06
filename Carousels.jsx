import React, { useRef, useState, useEffect } from 'react';
import './Carousels.css';

const Carousel = ({ wrapperNumber, children, isLocked }) => {
  const wrapperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const animationID = useRef(null);
  const intervalRef = useRef(null); // Uusi viite intervalille
  const gap = 20;

  // Päivittää säiliön leveyden ja kuuntelee ikkunan koon muutoksia
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const container = wrapper.querySelector('.container');
    if (container) {
      setContainerWidth(container.offsetWidth);
    }

    const handleResize = () => {
      const container = wrapper.querySelector('.container');
      if (container) {
        setContainerWidth(container.offsetWidth);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationID.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [children]);

  // Automaattinen siirtyminen seuraavaan diaan, jos ei ole lukittu
  useEffect(() => {
    if (isLocked) {
      // Pysäytetään intervalli, jos lukittu
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    const intervalTime = 5000 + (wrapperNumber - 1) * 1500;
    const slideCount = React.Children.count(children);

    intervalRef.current = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % slideCount;
        goToSlide(nextIndex);
        return nextIndex;
      });
    }, intervalTime);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [children, containerWidth, wrapperNumber, isLocked]);

  const dragStart = (e) => {
    setStartPos(e.type.includes('mouse') ? e.clientX : e.touches[0].clientX);
    setIsDragging(true);
    animationID.current = requestAnimationFrame(animation);
  };

  const drag = (e) => {
    if (!isDragging) return;
    const currentPosition = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    const diff = currentPosition - startPos;
    setCurrentTranslate(prevTranslate + diff);
  };

  const dragEnd = () => {
    setIsDragging(false);
    cancelAnimationFrame(animationID.current);

    const moveBy = currentTranslate - prevTranslate;
    let newIndex = currentIndex;
    if (Math.abs(moveBy) > containerWidth / 3) {
      if (moveBy > 0 && currentIndex > 0) newIndex--;
      else if (moveBy < 0 && currentIndex < React.Children.count(children) - 1) newIndex++;
    }

    goToSlide(newIndex);
  };

  const animation = () => {
    setSlidePosition();
    if (isDragging) requestAnimationFrame(animation);
  };

  const setSlidePosition = () => {
    if (wrapperRef.current) {
      wrapperRef.current.style.transform = `translateX(${currentTranslate}px)`;
    }
  };

  const goToSlide = (index) => {
    const offset = -(containerWidth + gap) * index;
    setCurrentIndex(index);
    setPrevTranslate(offset);
    setCurrentTranslate(offset);

    if (wrapperRef.current) {
      wrapperRef.current.style.transition = 'transform 0.3s ease-out';
      wrapperRef.current.style.transform = `translateX(${offset}px)`;
    }
  };

  return (
    <div className={`wrapper wrapper-${wrapperNumber}`}>
      <div className="front-boxes">
        <div
          className={`containers-wrapper containers-wrapper-${wrapperNumber}`}
          ref={wrapperRef}
          onMouseDown={dragStart}
          onMouseMove={drag}
          onMouseUp={dragEnd}
          onMouseLeave={dragEnd}
          onTouchStart={dragStart}
          onTouchMove={drag}
          onTouchEnd={dragEnd}
          onContextMenu={(e) => e.preventDefault()}
        >
          {React.Children.map(children, (child, index) => (
            <div className="container" key={index}>
              {child}
            </div>
          ))}
        </div>

        <div className={`carousel-dots carousel-dots-${wrapperNumber}`}>
          {React.Children.map(children, (_, index) => (
            <div
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;



