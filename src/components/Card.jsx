import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import video from "../assets/video.mp4";
import { IoPlayCircle } from "react-icons/io5";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BsCheck } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";

function Card({ movieData, isLiked = false }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
        alt="movies"
      />
      {isHovered && (
        <div className="hover">
          <div className="image-video-container">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
              alt="movies"
              onClick={() => navigate("/player")}
            />
            <video
              src={video}
              autoPlay
              loop
              muted
              onClick={() => navigate("/player")}
            />
          </div>
          <div className="info-container flex column">
            <h3 className="name" onClick={() => navigate("/player")}>
              {movieData.name}
            </h3>
            <div className="icons flex j-between">
              <div className="controls flex">
                <IoPlayCircle
                  title="play"
                  onClick={() => navigate("/player")}
                />
                <RiThumbUpFill title="Like" />
                <RiThumbDownFill title="Dislike" />
                {isLiked ? (
                  <BsCheck title="Remove From List" />
                ) : (
                  <AiOutlinePlus title="Add to my list" />
                )}
              </div>
              <div className="info">
                <BiChevronDown title="More Info" />
              </div>
            </div>
            <div className="genres flex">
              <ul className="genres flex">
                {movieData.genres.map((genre) => (
                  <li key={genre}>{genre}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  max-width: 230px;
  width: 230px;
  height: 345px;
  cursor: pointer;
  position: relative;
  margin: 0 0.5rem;

  img {
    border-radius: 0.2rem;
    z-index: 10;
  }

  .hover {
    z-index: 90;
    height: max-content;
    width: 20rem;
    position: absolute;
    top: -18vh;
    left: 0;
    border-radius: 0.3rem;
    box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
    background-color: #181818;
    transition: 0.3s ease-in-out;

    .image-video-container {
      position: relative;
      height: 140px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0.3rem;
        top: 0;
        z-index: 4;
        position: absolute;
      }

      video {
        display: none;
        width: 100%;
        height: 240px;
        object-fit: cover;
        border-radius: 0.3rem;
        top: 0;
        z-index: 5;
        position: absolute;
      }
    }

    &:hover .image-video-container video {
      display: block;
      margin-top: 100px;
    }

    .info-container {
      padding: 1rem;
      gap: 0.5rem;
      color: white;

      .name {
        cursor: pointer;
        margin: 0;
        font-size: 1.2rem;
        font-weight: bold;
      }

      .icons {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .controls {
          display: flex;
          gap: 1rem;

          svg {
            font-size: 1.5rem;
            cursor: pointer;
            transition: 0.3s ease-in-out;

            &:hover {
              color: #b8b8b8;
            }
          }
        }

        .info {
          svg {
            font-size: 1.5rem;
            cursor: pointer;
            transition: 0.3s ease-in-out;

            &:hover {
              color: #b8b8b8;
            }
          }
        }
      }

      .genres {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;

        ul {
          display: flex;
          gap: 0.5rem;
          padding: 0;
          margin: 0;
          list-style-type: none;

          li {
            font-size: 0.9rem;
            color: #b8b8b8;

            &:first-of-type {
              list-style-type: none;
            }
          }
        }
      }
    }
  }
`;

export default Card;
