import React from "react";

import { Carousel } from "antd";

import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";

export default function HeroHome() {
  return (
    <section
      className="relative bg-black"
      style={{
        backgroundImage: "url('/seattle-4.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-32 md:pb-28">
          {/* Section header */}
          <div className="text-center pb-2 md:pb-2">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 text-slate-200 md:h1 h2">
              <img
                src="/raivn-logo.png"
                className="w-20 md:w-28 inline-block align-middle -mt-5 mr-2 mix-blend-screen"
              />
              UW RAIVN Lab
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="md:text-xl text-slate-400 mb-8 text-lg"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                The computer vision and reasoning lab in the Allen School at the
                University of Washington, led by Ali Farhadi and Ranjay Krishna.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              ></div>
            </div>
          </div>

          {/* Hero image */}
          <div className="text-center">
            <Carousel autoplay>
            <div>
                <img
                  src="/raivn-group3.jpg"
                  className="md:w-9/12 mx-auto rounded-md w-11/12"
                />
              </div>
              <div>
                <img
                  src="/raivn-group4.jpg"
                  className="md:w-9/12 mx-auto rounded-md w-11/12"
                />
              </div>
              <div>
                <img
                  src="/dec.jpg"
                  className="md:w-9/12 mx-auto rounded-md w-11/12"
                />
              </div>
              <div>
                <img
                  src="/ranjay-students.jpg"
                  className="md:w-9/12 mx-auto rounded-md w-11/12"
                />
              </div>
              <div>
                <img
                  src="/gates_center.jpg"
                  className="md:w-9/12 mx-auto rounded-md w-11/12"
                />
              </div>
              <div>
                <img
                  src="/cvpr2019.jpg"
                  className="md:w-9/12 mx-auto rounded-md w-11/12"
                />
              </div>
              <div>
                <img
                  src="/bill-gates.jpg"
                  className="md:w-9/12 mx-auto rounded-md w-11/12"
                />
              </div>
            </Carousel>
            <div className="text-blue-200 text-3xl md:-mb-16 mt-8 text-center">
              <a href="https://twitter.com/RAIVNLab" target="_blank">
                <AiOutlineTwitter
                  style={{
                    display: "inline-block",
                    verticalAlign: "middle",
                    marginRight: "10px",
                    marginLeft: "10px",
                  }}
                />
              </a>
              <a href="https://github.com/RAIVNLab" target="_blank">
                <AiOutlineGithub
                  style={{
                    display: "inline-block",
                    verticalAlign: "middle",
                    marginRight: "10px",
                    marginLeft: "10px",
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
