import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeBeforeLogin.css"; // Import the custom CSS file
import P1 from "../../assets/images/P-1.png"; // Import the local images
import P2 from "../../assets/images/P-2.jpg";
import P3 from "../../assets/images/P-3.jpeg";
import P4 from "../../assets/images/P-4.jpg";
import P5 from "../../assets/images/P-5.jpg";
import C1 from "../../assets/images/C-1.png";
import C2 from "../../assets/images/C-2.png";
import C3 from "../../assets/images/C-3.png";

import TestimonialCarousel from "./TestimonialCarousel";
import Footer from "./Footer";
import NavBeforeLog from "../NavBeforeLog/NavBeforeLog";




const HomeBeforeLogin = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1200, // 1.2 seconds
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div> 
        <NavBeforeLog />
      </div>
      
      <div id="slider-container" className="slider-container">
        <Slider {...settings}>
          <div className="slide">
            <img src={P1} alt="Slide 1" />
            <div className="slide-text">
              <p className="heading">Joboard</p>
              <p className="subtext">
                Partner to Boost Student Employability and Close the Skills Gap
              </p>
              <button className="learn-more-btn">Learn More</button>
            </div>
          </div>
          <div className="slide">
            <img src={P2} alt="Slide 2" />
            <div className="slide-text">
              <p className="heading">Applicant Tracking System</p>
              <p className="subtext">
                An automated cloud-based platform for talent acquisition process
              </p>
              <button className="learn-more-btn">Learn More</button>
            </div>
          </div>
          <div className="slide">
            <img src={P3} alt="Slide 3" />
            <div className="slide-text">
              <p className="subtext">
                We are now officially a Certified B Corporation!
              </p>
              <button className="learn-more-btn">Learn More</button>
            </div>
          </div>
          <div className="slide">
            <img src={P4} alt="Slide 4" />
            <div className="slide-text-last">
              <p className="subtext">
                Choose your ideal work setting: Remote or Onsite.
              </p>
              <button className="learn-more-btn">Learn More</button>
            </div>
          </div>
          <div className="slide">
            <img src={P5} alt="Slide 5" />
            <div className="slide-text-last">
              <p className="subtext">Search Job easily</p>
              <button className="learn-more-btn">Learn More</button>
            </div>
          </div>
        </Slider>
      </div>

      <div className="container-2">
        <div>
          <p className="heading-2">
            Our Products Boost Learning And Assessment Outcomes!
          </p>
          <p className="subtext-2">
            Subscribe to Joboard and be up-to-speed with the New-Age approach.
          </p>
        </div>
        <div class="card-container">
          <div class="card">
            <img src={C1} alt="Card-1" />
            <div class="small-card">
              <p class="subtext-2">Al-Proctored Assessment Platform</p>
            </div>
          </div>
          <div class="card">
            <img src={C2} alt="Card-2" />
            <div class="small-card">
              <p class="subtext-2">Virtual Entrance Exam</p>
            </div>
          </div>
          <div class="card">
            <img src={C3} alt="Card-3" />
            <div class="small-card">
              <p class="subtext-2">Coding Proficiency Analyzer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-3">
        <p className="text-1"> Get ahead with Joboard</p>
        <p className="text-2">
          We're serving up trusted insights and anonymous conversation, so
          you'll have the goods you need to succeed.
        </p>
        <div className="container-3-items">
          <div className="items">
            <svg
              fill="#000000"
              height="125px"
              width="125px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 263.976 263.976"
              xml:space="preserve"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <path d="M149.763,36.21c3.01-3.811,4.871-8.616,4.871-13.837C154.634,10.036,144.628,0,132.291,0s-22.358,10.036-22.358,22.373 c0,5.222,1.597,10.026,4.605,13.837c-9.211,5.839-15.55,16.117-15.55,27.807v27.22c0,4.143,3.785,7.739,7.928,7.739h50.811 c4.143,0,7.262-3.597,7.262-7.739v-27.22C164.988,52.327,158.976,42.048,149.763,36.21z"></path>{" "}
                  <path d="M81.988,124.539v-27.22c0-11.689-5.754-21.969-14.967-27.807c3.01-3.811,5-8.616,5-13.837 c0-12.337-9.942-22.373-22.279-22.373S27.416,43.339,27.416,55.676c0,5.222,1.855,10.026,4.863,13.837 c-9.212,5.839-15.292,16.117-15.292,27.807v27.22c0,4.143,3.301,7.437,7.443,7.437h50.811 C79.384,131.976,81.988,128.682,81.988,124.539z"></path>{" "}
                  <path d="M232.034,69.513c3.008-3.811,5.006-8.616,5.006-13.837c0-12.337-9.939-22.373-22.276-22.373 c-12.337,0-22.325,10.036-22.325,22.373c0,5.222,1.843,10.026,4.852,13.837c-9.212,5.839-15.304,16.117-15.304,27.807v27.22 c0,4.143,3.326,7.437,7.469,7.437h50.811c4.143,0,6.721-3.294,6.721-7.437v-27.22C246.988,85.63,241.245,75.351,232.034,69.513z"></path>{" "}
                  <path d="M149.763,201.464c3.01-3.811,4.871-8.615,4.871-13.836c0-12.337-10.006-22.373-22.343-22.373s-22.358,10.036-22.358,22.373 c0,5.221,1.597,10.026,4.605,13.837c-9.211,5.839-15.55,16.117-15.55,27.807v27.22c0,4.143,3.785,7.484,7.928,7.484h50.811 c4.143,0,7.262-3.342,7.262-7.484v-27.22C164.988,217.581,158.976,207.304,149.763,201.464z M132.321,180.255 c4.065,0,7.373,3.308,7.373,7.373c0,4.066-3.308,7.373-7.373,7.373s-7.373-3.308-7.373-7.373 C124.948,183.563,128.255,180.255,132.321,180.255z M149.988,248.976h-36v-19.704c0-9.874,8.127-17.906,18.001-17.906 c9.872,0,17.999,8.032,17.999,17.906V248.976z"></path>{" "}
                  <path d="M138.988,138.555v-24.854c0-4.143-3.357-7.5-7.5-7.5c-4.143,0-7.5,3.357-7.5,7.5v24.854c0,4.143,3.357,7.5,7.5,7.5 C135.63,146.055,138.988,142.697,138.988,138.555z"></path>{" "}
                  <path d="M59.331,140.177c-3.009-2.847-7.753-2.718-10.604,0.289c-2.848,3.008-2.718,7.755,0.289,10.604l37.709,35.707 c1.451,1.373,3.305,2.054,5.156,2.054c1.987,0,3.972-0.786,5.447-2.343c2.848-3.008,2.718-7.755-0.289-10.604L59.331,140.177z"></path>{" "}
                  <path d="M205.241,140.071l-37.606,35.789c-3.001,2.855-3.118,7.603-0.263,10.603c1.474,1.55,3.452,2.33,5.434,2.33 c1.857,0,3.718-0.686,5.169-2.067l37.606-35.789c3.001-2.855,3.118-7.602,0.263-10.602 C212.989,137.332,208.241,137.217,205.241,140.071z"></path>{" "}
                </g>{" "}
              </g>
            </svg>
            <div>Join your work community</div>
          </div>

          <div className="items">
            <svg
              width="124px"
              height="124px"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="Layer_2" data-name="Layer 2">
                  {" "}
                  <g id="Icons">
                    {" "}
                    <g>
                      {" "}
                      <rect width="48" height="48" fill="none"></rect>{" "}
                      <path d="M29,27H13a2,2,0,0,1,0-4H29a2,2,0,0,1,0,4ZM13,31a2,2,0,0,0,0,4h8a2,2,0,0,0,0-4Zm24-5a2,2,0,0,0-2,2V42H7V8H17a2,2,0,0,0,0-4H5A2,2,0,0,0,3,6V44a2,2,0,0,0,2,2H37a2,2,0,0,0,2-2V28A2,2,0,0,0,37,26Zm7.4-.6a1.9,1.9,0,0,1-2.8,0l-5.1-5.1h0A10.4,10.4,0,0,1,31,22a10.1,10.1,0,0,1-7.1-3H13a2,2,0,0,1,0-4h8.5a9.9,9.9,0,0,1-.5-3,10,10,0,0,1,20,0,10.4,10.4,0,0,1-1.6,5.5h-.1l5.1,5.1A1.9,1.9,0,0,1,44.4,25.4ZM27.5,15a.9.9,0,0,1,1-1h4V13h-3a2,2,0,0,1-2-2V10a2,2,0,0,1,2-2H30V6.1a6,6,0,0,0,0,11.8V16H28.5A.9.9,0,0,1,27.5,15ZM37,12a6,6,0,0,0-5-5.9V8h1.5a.9.9,0,0,1,1,1,.9.9,0,0,1-1,1h-4v1h3a2,2,0,0,1,2,2v1a2,2,0,0,1-2,2H32v1.9l1.6-.5.6-.3a.1.1,0,0,1,.1-.1l.7-.5a.1.1,0,0,1,.1-.1l.6-.6h0l.5-.8h0l.2-.4A5.5,5.5,0,0,0,37,12Z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
            <div>Find and apply to jobs</div>
          </div>

          <div className="items">
            <svg
              width="115px"
              height="115px"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill="#000000"
                  fill-rule="evenodd"
                  d="M8,0 C8.51283143,0 8.93550653,0.386039974 8.9932722,0.883378828 L9,1 L11,1 L11,2 L13,2 C13.51285,2 13.9355092,2.38604429 13.9932725,2.88337975 L14,3 L14,15 C14,15.51285 13.613973,15.9355092 13.1166239,15.9932725 L13,16 L3,16 C2.48716857,16 2.06449347,15.613973 2.0067278,15.1166239 L2,15 L2,3 C2,2.48716857 2.38604429,2.06449347 2.88337975,2.0067278 L3,2 L5,2 L5,1 L7,1 C7,0.447715 7.44772,0 8,0 Z M5,4 L4,4 L4,14 L12,14 L12,4 L11,4 L11,5 L5,5 L5,4 Z M10.5352,7.29289 C10.9258,7.68342 10.9258,8.31658 10.5352,8.70711 L7.70711,11.5352 C7.31658,11.9258 6.68342,11.9258 6.29289,11.5352 L5.29289,10.5352 C4.90237,10.1447 4.90237,9.51154 5.29289,9.12102 C5.68342,8.73049 6.31658,8.73049 6.70711,9.12102 L7,9.41391 L9.12102,7.29289 C9.51154,6.90237 10.1447,6.90237 10.5352,7.29289 Z M8,2 C7.44772,2 7,2.44772 7,3 C7,3.55228 7.44772,4 8,4 C8.55228,4 9,3.55228 9,3 C9,2.44772 8.55228,2 8,2 Z"
                ></path>{" "}
              </g>
            </svg>

            <div>Search company reviews</div>
          </div>

          <div className="items">
            <svg
              width="151px"
              height="151px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M8.5 9.99984H15.5M8.5 6.5H15.5M14 18.0002L8.5 13.5002L10 13.5C14.4447 13.5 14.4447 6.5 10 6.5M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
            <div>Compare salaries</div>
          </div>
        </div>
      </div>

      <div id="Categories" className="container-4 justify-items-center">

        <p className="text-1">Popular Categories</p>

        <div class="grid grid-cols-6 gap-4 justify-items-center items-center">


          <a class="Categories flex h-15 max-w-[182px] items-center gap-1 rounded-lg p-1">
            <div class="flex size-10 items-center justify-center rounded bg-decorative-surface-02">
              <svg fill="#652407" viewBox="0 0 24 24" class="size-10">
                <path fill-rule="evenodd" d="M12.02 3.78h-.07l-.13.03-7.4 1.64a7.51 7.51 0 0 0-.57.15.25.25 0 0 0-.08.1l-.01.1-.01.48V7.4a8.34 8.34 0 0 0 .03.72c.02.04.06.08.1.1l.12.02.6.01h14.8a8.34 8.34 0 0 0 .72-.03.25.25 0 0 0 .1-.1l.02-.12.01-.6V6.28a7.57 7.57 0 0 0-.02-.58.25.25 0 0 0-.08-.1l-.1-.03-.47-.12-7.4-1.64-.13-.03h-.03Zm8.13 1.82Zm.08.1Zm-.11 2.52Zm-.37 1.53c.13 0 .26 0 .37-.02.21-.01.44-.05.67-.17.33-.17.6-.44.77-.77.12-.23.16-.46.17-.67.02-.2.02-.44.02-.7V6.27l-.01-.57a1.75 1.75 0 0 0-1.25-1.56 8.26 8.26 0 0 0-.56-.14l-7.42-1.64-.03-.01c-.1-.02-.21-.05-.33-.06h-.3c-.12.01-.23.04-.33.06h-.03L4.09 4h-.02l-.56.14a1.6 1.6 0 0 0-.53.25 1.75 1.75 0 0 0-.72 1.31l-.01.57v1.17c0 .25 0 .49.02.69.01.21.05.44.17.67.17.33.44.6.77.77.23.12.46.16.67.17l.37.02v6.5c-.13 0-.26 0-.37.02-.21.01-.44.05-.67.17-.33.17-.6.44-.77.77-.12.23-.16.46-.17.67-.02.2-.02.44-.02.7v.85c0 .25 0 .49.02.69.01.21.05.44.17.67.17.33.44.6.77.77.23.12.46.16.67.17.2.02.44.02.7.02h14.85c.25 0 .49 0 .69-.02.21-.01.44-.05.67-.17.33-.17.6-.44.77-.77.12-.23.16-.46.17-.67.02-.2.02-.44.02-.7v-.85c0-.25 0-.49-.02-.69a1.77 1.77 0 0 0-.17-.67c-.17-.33-.44-.6-.77-.77a1.77 1.77 0 0 0-.67-.17l-.37-.02v-6.5Zm-1.5 0h-3v6.5h3v-6.5Zm-13.65 8a8.3 8.3 0 0 0-.72.03.25.25 0 0 0-.1.1l-.02.12-.01.6v.8a8.34 8.34 0 0 0 .03.72c.02.04.06.08.1.1l.12.02.6.01h14.8a8.37 8.37 0 0 0 .72-.03.25.25 0 0 0 .1-.1l.02-.12.01-.6v-.8a8.37 8.37 0 0 0-.03-.72.25.25 0 0 0-.1-.1l-.12-.02a8.3 8.3 0 0 0-.6-.01H4.6Zm15.62.13Zm0 2.24Zm-16.34.1Zm-.1-.1Zm0-2.24Zm.1-.1Zm1.87-1.53h3v-6.5h-3v6.5Zm4.5-6.5v6.5h3.5v-6.5h-3.5ZM3.88 8.22Zm-.1-.1Zm0-2.42Zm.07-.1Z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <div class="w-[130px] text-l">Banking</div>
          </a>


          <a class="Categories flex h-15 max-w-[182px] items-center gap-1 rounded-lg p-1">
            <div class="flex size-10 items-center justify-center rounded bg-decorative-surface-02">
              <svg viewBox="0 0 24 24" fill="#652407" class="size-6">
                <path fill-rule="evenodd" d="m11.94 3.02-.09.05-.37.29L4.7 8.63c-.5.38-.62.49-.7.6-.1.13-.16.26-.2.41-.04.14-.05.3-.05.92v7.24c0 .57 0 .96.02 1.25.03.29.07.43.12.52.12.23.3.42.54.54.1.05.23.1.52.12.3.02.68.02 1.25.02h2.05v-6.68c0-.25 0-.49.02-.69.01-.21.05-.44.17-.67.17-.33.44-.6.77-.77.23-.12.46-.16.67-.17.2-.02.44-.02.7-.02h2.85c.25 0 .49 0 .69.02.21.01.44.05.67.17.33.17.6.44.77.77.12.23.16.46.17.67.02.2.02.44.02.7v6.67h2.05c.57 0 .96 0 1.25-.02.29-.03.43-.07.52-.12.23-.12.42-.3.54-.54.05-.1.1-.23.12-.52.02-.3.02-.68.02-1.25v-7.24c0-.61 0-.78-.05-.92a1 1 0 0 0-.2-.4 3.85 3.85 0 0 0-.7-.6l-6.78-5.28a7.47 7.47 0 0 0-.46-.34.25.25 0 0 0-.12 0Zm.12 0ZM8.24 20.48Zm3.7-17.46Zm-.4-1.44c.3-.08.62-.08.92 0a2.7 2.7 0 0 1 .98.6l6.79 5.27.06.05c.39.3.7.54.92.84.2.27.35.57.44.9.1.36.1.75.1 1.24v7.35c0 .53 0 .98-.03 1.34a2.68 2.68 0 0 1-2.55 2.55c-.36.03-.8.03-1.34.03h-2.05l-.37-.01a1.25 1.25 0 0 1-1.15-1.15l-.01-.37V13.6a8.3 8.3 0 0 0-.03-.72.25.25 0 0 0-.1-.1l-.12-.02a8.3 8.3 0 0 0-.6-.01h-2.8a8.3 8.3 0 0 0-.72.03.25.25 0 0 0-.1.1l-.02.12-.01.6v6.99c-.02.13-.05.3-.14.48a1.25 1.25 0 0 1-1.02.67l-.37.01H6.17c-.53 0-.98 0-1.34-.03a2.8 2.8 0 0 1-1.08-.27 2.75 2.75 0 0 1-1.2-1.2 2.8 2.8 0 0 1-.27-1.08c-.03-.36-.03-.8-.03-1.34v-7.35c0-.5 0-.88.1-1.24.1-.33.24-.63.44-.9.23-.3.53-.54.92-.84l.07-.05 6.78-5.28.07-.05c.27-.22.57-.45.91-.54Zm-1.76 11.3Zm.1-.1Zm4.24 0Zm.1.1Z"
                  clip-rule="evenodd"></path>
              </svg>
            </div>
            <div class="w-[130px] truncate text-l">Work From Home</div>
          </a>


          <a class="Categories flex h-15 max-w-[182px] items-center gap-1 rounded-lg p-1">
            <div class="flex size-10 items-center justify-center rounded bg-decorative-surface-02">
              <svg fill="#652407" viewBox="0 0 24 24" class="size-6">
                <path fill-rule="evenodd"
                  d="M9.5 3.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5ZM4.75 7a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0ZM14.8 3c.16-.37.6-.56.98-.4a4.75 4.75 0 0 1 0 8.8.75.75 0 1 1-.56-1.39 3.25 3.25 0 0 0 0-6.02.75.75 0 0 1-.42-.98ZM7.97 14.26h3.06c.9 0 1.63 0 2.21.04.6.04 1.1.13 1.58.32a4.75 4.75 0 0 1 2.57 2.57c.2.48.28.98.32 1.58.04.58.04 1.3.04 2.21V21a.75.75 0 0 1-1.5 0c0-.94 0-1.61-.04-2.14-.03-.52-.1-.84-.2-1.1A3.25 3.25 0 0 0 14.23 16a3.22 3.22 0 0 0-1.1-.21c-.53-.04-1.2-.04-2.14-.04H8c-.94 0-1.61 0-2.14.04-.52.03-.84.1-1.1.2-.8.34-1.43.97-1.76 1.77-.11.26-.18.58-.21 1.1-.04.53-.04 1.2-.04 2.14a.75.75 0 0 1-1.5 0v-.03c0-.9 0-1.63.04-2.21.04-.6.13-1.1.32-1.58a4.75 4.75 0 0 1 2.57-2.57c.48-.2.98-.28 1.58-.32.58-.04 1.3-.04 2.21-.04Zm10.3.69c.1-.4.52-.64.92-.54a4.75 4.75 0 0 1 3.56 4.6v2a.75.75 0 0 1-1.5 0v-2a3.25 3.25 0 0 0-2.44-3.15.75.75 0 0 1-.54-.91Z"
                  clip-rule="evenodd"></path>
              </svg>
            </div>
            <div class="w-[130px] truncate text-l">HR</div>
          </a>


          <a class="Categories flex h-15 max-w-[182px] items-center gap-1 rounded-lg p-1">
            <div class="flex size-10 items-center justify-center rounded bg-decorative-surface-02">
              <svg viewBox="0 0 24 24" fill="#652407" class="size-6">
                <path d="M11.88 2.25a220.06 220.06 0 0 0 .24 0c.81 0 1.37 0 1.85.13a3.75 3.75 0 0 1 2.78 3.87h2.08c.53 0 .98 0 1.34.03a2.68 2.68 0 0 1 2.55 2.55c.03.36.03.8.03 1.34v7.66c0 .53 0 .98-.03 1.34a2.68 2.68 0 0 1-2.55 2.55c-.36.03-.8.03-1.34.03H5.17c-.53 0-.98 0-1.34-.03a2.8 2.8 0 0 1-1.08-.27 2.75 2.75 0 0 1-1.2-1.2 2.8 2.8 0 0 1-.27-1.08c-.03-.36-.03-.8-.03-1.34v-7.66c0-.53 0-.98.03-1.34a2.68 2.68 0 0 1 2.55-2.55c.36-.03.8-.03 1.34-.03h2.08a3.75 3.75 0 0 1 2.78-3.87 7.5 7.5 0 0 1 1.85-.13Zm-4.63 5.5H5.2c-.57 0-.96 0-1.25.02-.29.03-.43.07-.52.12-.23.12-.42.3-.54.54-.05.1-.1.23-.12.52-.02.3-.02.68-.02 1.25v7.6c0 .57 0 .96.02 1.25.03.29.07.43.12.52.12.23.3.42.54.54.1.05.23.1.52.12.3.02.68.02 1.25.02h2.05V7.75Zm1.5 12.5h6.5V7.75h-6.5v12.5Zm8 0h2.05c.57 0 .96 0 1.25-.02.29-.03.43-.07.52-.12.23-.12.42-.3.54-.54.05-.1.1-.23.12-.52.02-.3.02-.68.02-1.25v-7.6c0-.57 0-.96-.02-1.25a1.36 1.36 0 0 0-.12-.52 1.25 1.25 0 0 0-.54-.54c-.1-.05-.23-.1-.52-.12-.3-.02-.68-.02-1.25-.02h-2.05v12.5Zm-1.5-14a3.47 3.47 0 0 0-.08-.83 2.25 2.25 0 0 0-1.59-1.6A7.1 7.1 0 0 0 12 3.76c-.98 0-1.32 0-1.58.08a2.25 2.25 0 0 0-1.67 2.42h6.5Z"></path>
              </svg>
            </div>
            <div class="w-[130px] truncate text-l">Sales</div>
          </a>


          <a class="Categories flex h-15 max-w-[182px] items-center gap-1 rounded-lg p-1">
            <div class="flex size-10 items-center justify-center rounded bg-decorative-surface-02">
              <svg fill="#652407" viewBox="0 0 24 24" class="size-6">
                <path fill-rule="evenodd"
                  d="M7.77 2.25h8.46c.81 0 1.47 0 2 .04.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47.04.53.04 1.19.04 2v8.46c0 .82 0 1.47-.04 2a3.84 3.84 0 0 1-.37 1.47c-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37-.53.04-1.18.04-2 .04H7.77c-.81 0-1.47 0-2-.04a3.84 3.84 0 0 1-1.47-.37 3.75 3.75 0 0 1-1.64-1.64 3.85 3.85 0 0 1-.37-1.47c-.04-.53-.04-1.19-.04-2V7.77c0-.81 0-1.47.04-2 .05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37.53-.04 1.19-.04 2-.04ZM5.89 3.79c-.45.04-.71.1-.91.2-.42.22-.77.57-.98.99-.1.2-.17.46-.21.91-.04.46-.04 1.06-.04 1.91v8.4c0 .85 0 1.45.04 1.9.04.46.1.72.2.92.22.42.57.77.99.98.2.1.46.17.91.21.46.04 1.06.04 1.91.04h8.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2.42-.22.77-.57.98-.99.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91V7.8c0-.85 0-1.45-.04-1.9a2.4 2.4 0 0 0-.2-.92 2.25 2.25 0 0 0-.99-.98 2.4 2.4 0 0 0-.91-.21c-.46-.04-1.06-.04-1.91-.04H7.8c-.85 0-1.45 0-1.9.04ZM8.5 5.75c.41 0 .75.34.75.75v1.25h1.25a.75.75 0 0 1 0 1.5H9.25v1.25a.75.75 0 0 1-1.5 0V9.25H6.5a.75.75 0 0 1 0-1.5h1.25V6.5c0-.41.34-.75.75-.75Zm8.47.22a.75.75 0 1 1 1.06 1.06l-11 11a.75.75 0 0 1-1.06-1.06l11-11Zm-4.22 9.53c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z"
                  clip-rule="evenodd"></path>
              </svg>
            </div>
            <div class="w-[130px] truncate text-l">Accounting</div>
          </a>


          <a class="Categories flex h-15 max-w-[182px] items-center gap-1 rounded-lg p-1">
            <div class="flex size-10 items-center justify-center rounded bg-decorative-surface-02">
              <svg viewBox="0 0 24 24" fill="#652407" class="size-6">
                <path d="M11.88 2.25a220.06 220.06 0 0 0 .24 0c.81 0 1.37 0 1.85.13a3.75 3.75 0 0 1 2.78 3.87h2.08c.53 0 .98 0 1.34.03a2.68 2.68 0 0 1 2.55 2.55c.03.36.03.8.03 1.34v7.66c0 .53 0 .98-.03 1.34a2.68 2.68 0 0 1-2.55 2.55c-.36.03-.8.03-1.34.03H5.17c-.53 0-.98 0-1.34-.03a2.8 2.8 0 0 1-1.08-.27 2.75 2.75 0 0 1-1.2-1.2 2.8 2.8 0 0 1-.27-1.08c-.03-.36-.03-.8-.03-1.34v-7.66c0-.53 0-.98.03-1.34a2.68 2.68 0 0 1 2.55-2.55c.36-.03.8-.03 1.34-.03h2.08a3.75 3.75 0 0 1 2.78-3.87 7.5 7.5 0 0 1 1.85-.13Zm-4.63 5.5H5.2c-.57 0-.96 0-1.25.02-.29.03-.43.07-.52.12-.23.12-.42.3-.54.54-.05.1-.1.23-.12.52-.02.3-.02.68-.02 1.25v7.6c0 .57 0 .96.02 1.25.03.29.07.43.12.52.12.23.3.42.54.54.1.05.23.1.52.12.3.02.68.02 1.25.02h2.05V7.75Zm1.5 12.5h6.5V7.75h-6.5v12.5Zm8 0h2.05c.57 0 .96 0 1.25-.02.29-.03.43-.07.52-.12.23-.12.42-.3.54-.54.05-.1.1-.23.12-.52.02-.3.02-.68.02-1.25v-7.6c0-.57 0-.96-.02-1.25a1.36 1.36 0 0 0-.12-.52 1.25 1.25 0 0 0-.54-.54c-.1-.05-.23-.1-.52-.12-.3-.02-.68-.02-1.25-.02h-2.05v12.5Zm-1.5-14a3.47 3.47 0 0 0-.08-.83 2.25 2.25 0 0 0-1.59-1.6A7.1 7.1 0 0 0 12 3.76c-.98 0-1.32 0-1.58.08a2.25 2.25 0 0 0-1.67 2.42h6.5Z"></path>
              </svg>
            </div>
            <div class="w-[130px] truncate text-l">Customer Support</div>
          </a>


          <a class="Categories flex h-15 max-w-[182px] items-center gap-1 rounded-lg p-1">
            <div class="flex size-10 items-center justify-center rounded bg-decorative-surface-02">
              <svg fill="#652407" viewBox="0 0 24 24" class="size-6">
                <path fill-rule="evenodd"
                  d="M8 1.25c.41 0 .75.34.75.75v1.25h6.5V2a.75.75 0 0 1 1.5 0v1.25c.58 0 1.07.01 1.48.04.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47.04.53.04 1.19.04 2v3.73a.75.75 0 0 1-1.5 0v-1.75H3.75v6.45c0 .85 0 1.45.04 1.9.04.46.1.72.2.92.22.42.57.77.99.98.2.1.46.17.91.21.46.04 1.06.04 1.91.04H12a.75.75 0 0 1 0 1.5H7.77c-.81 0-1.47 0-2-.04a3.84 3.84 0 0 1-1.47-.37 3.75 3.75 0 0 1-1.64-1.64 3.85 3.85 0 0 1-.37-1.47c-.04-.53-.04-1.19-.04-2V8.77c0-.81 0-1.47.04-2 .05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37.41-.03.9-.04 1.48-.04V2c0-.41.34-.75.75-.75Zm-.75 3.5c-.57 0-1 0-1.36.04-.45.04-.71.1-.91.2-.42.22-.77.57-.98.99-.1.2-.17.46-.21.91-.04.46-.04 1.06-.04 1.91v.45h16.5V8.8c0-.85 0-1.45-.04-1.9a2.4 2.4 0 0 0-.2-.92 2.25 2.25 0 0 0-.99-.98 2.4 2.4 0 0 0-.91-.21c-.36-.03-.79-.04-1.36-.04V6a.75.75 0 0 1-1.5 0V4.75h-6.5V6a.75.75 0 0 1-1.5 0V4.75Zm14.28 11.22c.3.3.3.77 0 1.06l-4.5 4.5c-.3.3-.77.3-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47 3.97-3.97c.3-.3.77-.3 1.06 0Z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <div class="w-[130px] truncate text-l">Event Management</div>
          </a>


          <a class="Categories flex h-15 max-w-[182px] items-center gap-1 rounded-lg p-1">
            <div class="flex size-10 items-center justify-center rounded bg-decorative-surface-02">
              <svg fill="#652407" viewBox="0 0 24 24" class="size-6">
                <path
                  fill-rule="evenodd"
                  d="M3.03 9.75a9.27 9.27 0 0 0 0 4.5h4.42a16.05 16.05 0 0 1-.2-2.27c.02-.75.08-1.5.2-2.23H3.03Zm.51-1.5h4.23a15.9 15.9 0 0 1 2.53-5.34 9.26 9.26 0 0 0-6.76 5.34ZM12 3.15a14.55 14.55 0 0 0-2.67 5.1h5.34A14.55 14.55 0 0 0 12 3.15Zm3.02 6.6H8.98c-.14.74-.21 1.5-.23 2.25.02.76.1 1.51.23 2.25h6.04c.14-.74.21-1.5.23-2.25-.02-.76-.1-1.51-.23-2.25Zm1.53 4.5h4.42a9.27 9.27 0 0 0 0-4.5h-4.42a16.04 16.04 0 0 1 .2 2.27c-.02.75-.08 1.5-.2 2.23Zm-1.88 1.5H9.33a14.55 14.55 0 0 0 2.67 5.1 14.55 14.55 0 0 0 2.67-5.1Zm-4.37 5.34a16.05 16.05 0 0 1-2.53-5.34H3.54a9.26 9.26 0 0 0 6.76 5.34Zm3.4 0a16.05 16.05 0 0 0 2.53-5.34h4.23a9.26 9.26 0 0 1-6.76 5.34Zm6.76-12.84a9.26 9.26 0 0 0-6.76-5.34 16.05 16.05 0 0 1 2.53 5.34h4.23ZM1.25 12a10.75 10.75 0 1 1 21.5 0 10.75 10.75 0 0 1-21.5 0Z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <div class="w-[130px] truncate text-l">IT</div>
          </a>


          <a class="Categories flex h-15 max-w-[182px] items-center gap-1 rounded-lg p-1">
            <div class="flex size-10 items-center justify-center rounded bg-decorative-surface-02">
              <svg fill="#652407" viewBox="0 0 24 24" class="size-6">
                <path
                  fill-rule="evenodd"
                  d="M14.16 2.27c.4.09.66.49.57.9l-4 18a.75.75 0 1 1-1.46-.33l4-18c.09-.4.49-.66.9-.57Zm-6.63 4.2c.3.3.3.77 0 1.06L3.06 12l4.47 4.47a.75.75 0 0 1-1.06 1.06l-5-5a.75.75 0 0 1 0-1.06l5-5c.3-.3.77-.3 1.06 0Zm8.94 0c.3-.3.77-.3 1.06 0l5 5c.3.3.3.77 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06L20.94 12l-4.47-4.47a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <div class="w-[130px] truncate text-l">SQL</div>
          </a>


          <a class="Categories flex h-15 max-w-[182px] items-center gap-1 rounded-lg p-1">
            <div class="flex size-10 items-center justify-center rounded bg-decorative-surface-02">
              <svg fill="#652407" viewBox="0 0 24 24" class="size-6">
                <path
                  fill-rule="evenodd"
                  d="M14.16 2.27c.4.09.66.49.57.9l-4 18a.75.75 0 1 1-1.46-.33l4-18c.09-.4.49-.66.9-.57Zm-6.63 4.2c.3.3.3.77 0 1.06L3.06 12l4.47 4.47a.75.75 0 0 1-1.06 1.06l-5-5a.75.75 0 0 1 0-1.06l5-5c.3-.3.77-.3 1.06 0Zm8.94 0c.3-.3.77-.3 1.06 0l5 5c.3.3.3.77 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06L20.94 12l-4.47-4.47a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" ></path>
              </svg>
            </div>
            <div class="w-[130px] truncate text-l">Oracle</div>
          </a>


          <a class="Categories flex h-15 max-w-[182px] items-center gap-1 rounded-lg p-1">
            <div class="flex size-10 items-center justify-center rounded bg-decorative-surface-02">
              <svg fill="#652407" viewBox="0 0 24 24" class="size-6">
                <path
                  fill-rule="evenodd"
                  d="M12 2.75a9.25 9.25 0 0 0 0 18.5c1.24 0 2.25-1 2.25-2.25v-.56c0-.4 0-.68.03-.93.22-1.68 1.55-3 3.23-3.23.25-.03.52-.03.93-.03H19c1.24 0 2.25-1 2.25-2.25 0-5.1-4.14-9.25-9.25-9.25ZM1.25 12a10.75 10.75 0 0 1 21.5 0A3.75 3.75 0 0 1 19 15.75h-.5c-.49 0-.66 0-.8.02-1 .13-1.8.93-1.93 1.94-.02.13-.02.3-.02.79v.5A3.75 3.75 0 0 1 12 22.75 10.75 10.75 0 0 1 1.25 12ZM10 6.75a.25.25 0 1 0 0 .5.25.25 0 0 0 0-.5ZM8.25 7a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0Zm7.75.75a.25.25 0 1 0 0 .5.25.25 0 0 0 0-.5ZM14.25 8a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0ZM7 11.75a.25.25 0 1 0 0 .5.25.25 0 0 0 0-.5ZM5.25 12a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="w-[130px] truncate text-l">Graphic Design</div>
          </a>


          <a class="Categories flex h-15 max-w-[182px] items-center gap-1 rounded-lg p-1">
            <div class="flex size-10 items-center justify-center rounded bg-decorative-surface-02">
              <svg viewBox="0 0 24 24" fill="#652407" class="size-6">
                <path d="M11.88 2.25a220.06 220.06 0 0 0 .24 0c.81 0 1.37 0 1.85.13a3.75 3.75 0 0 1 2.78 3.87h2.08c.53 0 .98 0 1.34.03a2.68 2.68 0 0 1 2.55 2.55c.03.36.03.8.03 1.34v7.66c0 .53 0 .98-.03 1.34a2.68 2.68 0 0 1-2.55 2.55c-.36.03-.8.03-1.34.03H5.17c-.53 0-.98 0-1.34-.03a2.8 2.8 0 0 1-1.08-.27 2.75 2.75 0 0 1-1.2-1.2 2.8 2.8 0 0 1-.27-1.08c-.03-.36-.03-.8-.03-1.34v-7.66c0-.53 0-.98.03-1.34a2.68 2.68 0 0 1 2.55-2.55c.36-.03.8-.03 1.34-.03h2.08a3.75 3.75 0 0 1 2.78-3.87 7.5 7.5 0 0 1 1.85-.13Zm-4.63 5.5H5.2c-.57 0-.96 0-1.25.02-.29.03-.43.07-.52.12-.23.12-.42.3-.54.54-.05.1-.1.23-.12.52-.02.3-.02.68-.02 1.25v7.6c0 .57 0 .96.02 1.25.03.29.07.43.12.52.12.23.3.42.54.54.1.05.23.1.52.12.3.02.68.02 1.25.02h2.05V7.75Zm1.5 12.5h6.5V7.75h-6.5v12.5Zm8 0h2.05c.57 0 .96 0 1.25-.02.29-.03.43-.07.52-.12.23-.12.42-.3.54-.54.05-.1.1-.23.12-.52.02-.3.02-.68.02-1.25v-7.6c0-.57 0-.96-.02-1.25a1.36 1.36 0 0 0-.12-.52 1.25 1.25 0 0 0-.54-.54c-.1-.05-.23-.1-.52-.12-.3-.02-.68-.02-1.25-.02h-2.05v12.5Zm-1.5-14a3.47 3.47 0 0 0-.08-.83 2.25 2.25 0 0 0-1.59-1.6A7.1 7.1 0 0 0 12 3.76c-.98 0-1.32 0-1.58.08a2.25 2.25 0 0 0-1.67 2.42h6.5Z"></path>
              </svg>
            </div>
            <div class="w-[130px] truncate text-l">Digital Marketing</div>
          </a>

        </div>


      </div>


      <div className="container-5 mt-50 mb-10">
        <p className="text-1 flex flex-col">
          <span>Trusted by</span>
          <span>leading brands and startups</span>
        </p>

        <div className=" flex flex-row justify-center gap-4">

          <div className="company-card">
            <div className="flex flex-col gap-2">
              <img data-v-d646c338="" alt="Perfectserve Logo" src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload//q_auto/general/logobar/perfectserve.svg" height="30" class="company-logo" />

              <p className="font-bold text-left pt-6">“If we didn't have Joboard…the quality of talent wouldn't be as easy to measure, and we wouldn't have the incredible support we get from the Upwork team.”</p>
              <p className="text-left">Jessica Khawaja, VP of People Operations</p>
              <p className="pt-10">Results</p>
              <hr></hr>
              <p className="text-left">4.0</p>
              <p className="text-left">★★★★</p>
              <p className="text-left">11 days<br></br>
                to post a job, hire, classify, and onboard selected talent<br></br>
                Nearly Doubled the support hours for a project</p>
            </div>
          </div>
          <div className="company-card">
            <div className="flex flex-col gap-2">
              <img data-v-d646c338="" alt="Microsoft Logo" src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload//general/logobar/colored/microsoft-lg-light.svg" height="30" class="company-logo"></img>
              <p className="font-bold text-left pt-6">“One of the advantages of utilizing freelancers is finding talent with different skills quickly as our needs change.”</p>
              <p className="text-left">John Doe, Microsoft</p>
              <p className="pt-10">Results</p>
              <hr></hr>
              <p className="text-left">5.0</p>
              <p className="text-left">★★★★★</p>
              <p className="text-left">50% Faster launch of projects
                <br></br>10,000 projects completed
              </p>
            </div>
          </div>
          <div className="company-card">
            <div className="flex flex-col gap-2">
              <img data-v-d646c338="" alt="Amazon Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png" height="30" class="company-logo"></img>
              <p className="font-bold text-left pt-4">"We have been using Workwise for the past 3 years and it has been a great experience."</p>
              <p className="text-left">Jack Donald, Amazon</p>
              <p className="pt-12">Results</p>
              <hr></hr>
              <p className="text-left">5.0</p>
              <p className="text-left">★★★★★</p>
              <p className="text-left">09 days<br></br>
                very simple and easy to post a job and hire<br></br>
                Nearly Doubled the support hours for a project</p>
            </div>
          </div>

        </div>

      </div>

      <div id="Testimonial" className="Testimonial">
        <p className="text-1">Clients Testimonials</p>
        <p className="text-2">A few reviews from clients who trust Joboard</p>
      <TestimonialCarousel />
      </div>

      <div id="Footer" className="Footer">
        <Footer />
      </div>

    </>
  );
};

export default HomeBeforeLogin;
