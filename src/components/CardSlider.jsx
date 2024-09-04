import React, { useRef, useState } from 'react';
import Card from "./Card";
import styled from 'styled-components';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

export default function CardSlider({ data, title }) {
  const [showControls, setShowControls] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);
  const listRef = useRef();

  const handleDirection = (direction) => {
    const distance = 230; // Width of one card plus margin
    if (direction === "left" && sliderPosition > 0) {
      setSliderPosition(sliderPosition - distance);
    } else if (direction === "right" && sliderPosition < (data.length - 6) * distance) {
      setSliderPosition(sliderPosition + distance);
    }
    listRef.current.style.transform = `translateX(-${sliderPosition}px)`;
  };

  return (
    <Container
      className='flex column'
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <h1>{title}</h1>
      <div className="wrapper">
        <div
          className={`slider-action left ${!showControls ? "none" : ""} flex j-center a-center`}
        >
          <AiOutlineLeft onClick={() => handleDirection("left")} />
        </div>
        <div className='flex slider' ref={listRef}>
          {data.map((movie, index) => (
            <Card movieData={movie} index={index} key={movie.id} />
          ))}
        </div>
        <div
          className={`slider-action right ${!showControls ? "none" : ""} flex j-center a-center`}
        >
          <AiOutlineRight onClick={() => handleDirection("right")} />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin: 2rem 0;
  h1 {
    color: white;
    margin-bottom: 1rem;
  }
  .wrapper {
    position: relative;
    .slider {
      display: flex;
      overflow: hidden;
      gap: 1rem;
      padding: 1rem 0;
      transition: transform 0.3s ease-in-out;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    .slider-action {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 10;
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      cursor: pointer;
      &.left {
        left: 10px;
      }
      &.right {
        right: 10px;
      }
      &.none {
        display: none;
      }
      svg {
        font-size: 2rem;
        color: white;
      }
    }
  }
`;
