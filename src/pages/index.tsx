import React from "react";
import Latex from "react-latex";
import { Button } from "antd";
import { Helmet } from "react-helmet";
import { css } from "@emotion/react";
import color from "~styles/color";

import Header from "~components/header";
import Hero from "~components/hero";

function YouTubeVideo(props: { youtubeId: string }) {
  return (
    <div
      className="video"
      style={{
        position: "relative",
        paddingBottom: "56.25%" /* 16:9 */,
        paddingTop: 25,
        height: 0,
      }}
    >
      <iframe
        allowFullScreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        src={`https://www.youtube.com/embed/${props.youtubeId}`}
        frameBorder="0"
      />
    </div>
  );
}

/**
 * @param {number} a some number.
 * @param {number} b some other number.
 */
export default function Home() {
  return (
    <div>
      <Helmet>
        <title>UW RAIVN Lab</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Helmet>
      <div className="min-w-3xl">
        <Header
          textColor="text-slate-200 !hover:text-slate-200"
          raivnText="text-purple-200"
        />
        <Hero />

        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16 mt-24">
          <h1 className="h2 mb-4">Latest Research</h1>
        </div>
        {/* Articles list */}
        <div className="max-w-sm mx-auto md:max-w-6xl px-5">
          <div className="grid gap-20 md:gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
            {/* 1st article */}
            <article className="flex flex-col h-full" data-aos="zoom-y-out">
              <header>
                <a
                  href="https://objaverse.allenai.org/"
                  className="block mb-6"
                  target="_blank"
                >
                  <figure className="relative h-0 pb-9/16 translate-z-0 rounded">
                    <img
                      className="absolute inset-0 w-full h-full object-cover hover:-translate-y-1 duration-300"
                      src="/objaverse-xl.jpg"
                      width={352}
                      height={198}
                      alt="News 01"
                    />
                  </figure>
                </a>
                <h3 className="text-xl font-bold leading-snug tracking-tight !text-inherit">
                  Objaverse-XL
                </h3>
                <p>
                  We introduce Objaverse-XL, an open dataset of 10+ million 3D
                  objects. With it, we train Zero123-XL, a foundation model for
                  3D, observing incredible 3D generalization abilities.
                </p>
              </header>
            </article>

            {/* 2nd article */}
            <article className="flex flex-col h-full" data-aos="zoom-y-out">
              <header>
                <a
                  href="https://www.datacomp.ai/"
                  className="block mb-6"
                  target="_blank"
                >
                  <figure className="relative h-0 pb-9/16 translate-z-0 rounded">
                    <img
                      className="absolute inset-0 w-full h-full object-cover hover:-translate-y-1 duration-300"
                      src="/datacomp.jpg"
                      width={352}
                      height={198}
                      alt="News 01"
                    />
                  </figure>
                </a>
                <h3 className="text-xl font-bold leading-snug tracking-tight !text-inherit">
                  DataComp
                </h3>
                <p>
                  DataComp is the machine learning benchmark where the models
                  are fixed and the challenge is to find the best possible data!
                </p>
              </header>
            </article>

            {/* 3rd article */}
            <article className="flex flex-col h-full" data-aos="zoom-y-out">
              <header>
                <a
                  href="https://arxiv.org/abs/2306.14610"
                  className="block mb-6"
                  target="_blank"
                >
                  <figure className="relative h-0 pb-9/16 translate-z-0 rounded">
                    <img
                      className="absolute inset-0 w-full h-full object-cover hover:-translate-y-1 duration-300"
                      src="/crepe.jpg"
                      width={352}
                      height={198}
                      alt="News 01"
                    />
                  </figure>
                </a>
                <h3 className="text-xl font-bold leading-snug tracking-tight !text-inherit">
                  SugarCrepe
                </h3>
                <p>
                  Fixing hackable benchmarks for vision-language
                  compositionality by having models choose the correct caption
                  for an image from two options: one that accurately describes
                  the image and another that's very similar but slightly
                  different compositionally.
                </p>
              </header>
            </article>
          </div>
        </div>

        <hr className="my-36" />

        <div className="px-5 md:px-5 max-w-6xl mx-auto">
          {/* Section content */}
          <div className="md:grid md:grid-cols-2 md:gap-6">
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:mt-6"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">UW RAIVN Lab</h3>
                <p className="text-xl text-gray-600">
                  The Reasoning, AI, and VisioN (RAIVN) Lab in the{" "}
                  <a
                    href="https://www.cs.washington.edu/"
                    target="_blank"
                    className="!text-purple-500"
                  >
                    Allen School
                  </a>{" "}
                  at the{" "}
                  <a
                    href="http://www.washington.edu/"
                    target="_blank"
                    className="!text-purple-500"
                  >
                    University of Washington
                  </a>{" "}
                  is directed by Prof. Ali Farhadi and Prof. Ranjay Krishna.
                </p>
                <p className="text-xl text-gray-600">
                  Our research is at the intersection of Computer Vision,
                  Machine Learning, Natural Language Processing and Robotics and
                  is targetted towards helping computers improve their
                  perception and reasoning.
                </p>
                <p className="text-xl text-gray-600">
                  RAIVN Lab's famous research break-throughs include YOLO,
                  XNOR-Net, Visual Genome, AI2-THOR, VCR, BiDAF, Objaverse, DataComp, OpenCLIP, Merlot, Model Soups and Matryoshka Representations/Models among many
                  other amazing projects.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <YouTubeVideo youtubeId="MPU2HistivI" />
              {/* <iframe
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/MPU2HistivI?si=5mgs9O8Q4E8gvlah"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe> */}
            </div>
          </div>

          <hr className="my-32" />

          <div className="max-w-5xl mx-auto text-center pb-12 md:pb-40 mt-24">
            <h1 className="h2 mb-4 !font-medium">Sponsors</h1>
            {/* <p className="text-xl text-gray-600">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.
        </p> */}
            <div className="grid grid-cols-4 gap-x-4 mt-12 gap-y-8">
              <div className="text-center align-middle">
                <img src="/google.png" className="mx-auto w-48" />
              </div>
              <div className="text-center align-middle">
                <img src="/samsung.jpg" className="mx-auto w-48 mt-1" />
              </div>
              <div className="text-center align-middle">
                <img src="/paul-family.png" className="mx-auto mt-2.5" />
              </div>
              <div className="text-center align-middle">
                <img src="/ai2.png" className="w-32 mx-auto" />
              </div>
              <div className="text-center align-middle">
                <img src="/facebook.png" className="mx-auto w-56 mt-4" />
              </div>
              <div className="text-center align-middle">
                <img src="/nsf.png" className="mx-auto w-28 mt-1" />
              </div>
              <div className="text-center align-middle">
                <img src="/darpa.jpg" className="mx-auto w-40 mt-4" />
              </div>
              <div className="text-center align-middle">
                <img src="/nvidia.png" className="w-52 mx-auto mt-9" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
