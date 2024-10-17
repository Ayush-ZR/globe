import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import React, { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const page1Ref = useRef();
  const globeRef = useRef();
  const textRef = useRef();
  const mailref = useRef();
  const connectref = useRef();

  useGSAP(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: page1Ref.current,
        start: "top 0",
        end: "top -400%",
        scrub: 2,
        // markers: true,
        pin: true,
      },
    });
    tl.to(
      globeRef.current,
      {
        scale: 1,
        duration: 0.8,
      },
      "s"
    )
      .to(
        textRef.current,
        {
          top: "5%",
          scale: 0.4,
          opacity: 0.7,
          duration: 0.8,
        },
        "s"
      )
      .to(".para", {
        opacity: 1,
        stagger: 0.4,
        duration: 1.3,
      })
      .to(".para", {
        opacity: 0,
        stagger: 0.2,
        delay: 1,
        duration: 1.4,
      })
      .to(
        ".soon-text",
        {
          y: 0,
          opacity: 1,
          duration: 1,
        },
        "a"
      );
    tl.to(
      globeRef.current,
      {
        scale: 1.5,
        top: "110%",
        duration: 1.5,
      },
      "a"
    )
      .to(
        "#keepscroll",
        {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
        },
        "a"
      )
      .from(mailref.current, {
        opacity: 0,
        y: 50,
        duration: 2,
      })
      .from(connectref.current, {
        opacity: 0,
        y: 50,
        duration: 2,
      });
  });
  return (
    <div
      ref={page1Ref}
      className="w-full h-screen bg-black p-8 relative overflow-hidden"
    >
      <div
        ref={globeRef}
        className="scale-[.6] w-[90vw] h-[90vw] md:w-[50vw] md:h-[50vw] lg:w-[35vw] lg:h-[35vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
          src="/globe.mp4"
        ></video>
      </div>
      <div
        ref={textRef}
        className="text-white absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="mask">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-center uppercase font-semibold">
            ioftheancient
          </h1>
        </div>
      </div>
      <div className="text-white absolute w-[90vw] sm:w-full z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="wrap-text hidden sm:block overflow-hidden capitalize">
          <h2 className="para text-sm md:text-2xl lg:text-3xl opacity-0 relative whitespace-nowrap text-center">
            Hey, This is <span className="font-bold">Isshaan Jhangiani.</span>
          </h2>
        </div>
        <div className="wrap-text hidden sm:block overflow-hidden capitalize">
          <h2 className="para text-sm md:text-lg lg:text-2xl opacity-0 relative whitespace-nowrap text-center">
            Over the last few years, I have worked with different numeric
            frequencies
          </h2>
        </div>
        <div className="wrap-text hidden sm:block overflow-hidden capitalize">
          <h2 className="para text-sm md:text-lg lg:text-2xl opacity-0 relative whitespace-nowrap text-center">
            in my sessions with sound. Some part of me knew that I had plateaued
          </h2>
        </div>
        <div className="wrap-text hidden sm:block overflow-hidden capitalize">
          <h2 className="para text-sm md:text-lg lg:text-2xl opacity-0 relative whitespace-nowrap text-center">
            and was bumping up against a limit. As I desired to deepen my work,
          </h2>
        </div>
        <div className="wrap-text hidden sm:block overflow-hidden capitalize">
          <h2 className="para text-sm md:text-lg lg:text-2xl opacity-0 relative whitespace-nowrap text-center">
            I was brought to and discovered a modality through which I learned 
            of and 
          </h2>
        </div>
        <div className="wrap-text hidden sm:block overflow-hidden capitalize">
          <h2 className="para text-sm md:text-lg lg:text-2xl opacity-0 relative whitespace-nowrap text-center">
          experienced the power of compassion. The frequency of Compassion works seamlessly 
          </h2>
        </div>
        <div className="wrap-text hidden sm:block overflow-hidden capitalize">
          <h2 className="para text-sm md:text-lg lg:text-2xl opacity-0 relative whitespace-nowrap text-center">
          with the deepest layers of our field. Distortions that I needed to push with 
          </h2>
        </div>
        <div className="wrap-text hidden sm:block overflow-hidden capitalize">
          <h2 className="para text-sm md:text-lg lg:text-2xl opacity-0 relative whitespace-nowrap text-center">
            dissolving effortlessly with this frequency. This is such a sound
            were
          </h2>
        </div>
        <div className="wrap-text hidden sm:block overflow-hidden capitalize">
          <h2 className="para text-sm md:text-lg lg:text-2xl opacity-0 relative whitespace-nowrap text-center">
            vast topic and one that has been
          </h2>
        </div>
        <div className="wrap-text hidden sm:block overflow-hidden capitalize">
          <h2 className="para text-sm md:text-lg lg:text-2xl opacity-0 relative whitespace-nowrap text-center">
            a primary theme for me.
          </h2>
        </div>

        <div className="wrap-text sm:hidden overflow-hidden capitalize">
          <h2 className="para text-sm md:text-2xl lg:text-3xl opacity-0 relative whitespace-nowrap text-center">
            Hey, This is <span className="font-bold">Isshaan Jhangiani.</span>
          </h2>
        </div>
        <div className="wrap-text sm:hidden overflow-hidden capitalize">
          <h2 className="para text-sm md:text-lg lg:text-2xl opacity-0 relative whitespace-nowrap text-center">
            I've worked with different numeric frequencies
          </h2>
        </div>
        <div className="wrap-text sm:hidden overflow-hidden capitalize">
          <h2 className="para text-sm md:text-lg lg:text-2xl opacity-0 relative whitespace-nowrap text-center">
            in my sessions with sound.
          </h2>
        </div>
        <div className="wrap-text sm:hidden overflow-hidden capitalize">
          <h2 className="para text-sm md:text-lg lg:text-2xl opacity-0 relative whitespace-nowrap text-center">
            At some point, I knew I had plateaued.
          </h2>
        </div>
        <div className="wrap-text sm:hidden overflow-hidden capitalize">
          <h2 className="para text-sm md:text-lg lg:text-2xl opacity-0 relative whitespace-nowrap text-center">
            I was bumping up against a limit,
          </h2>
        </div>
        <div className="wrap-text sm:hidden overflow-hidden capitalize">
          <h2 className="para text-sm md:text-lg lg:text-2xl opacity-0 relative whitespace-nowrap text-center">
            and as I desired to deepen my work, I discovered
          </h2>
        </div>
        <div className="wrap-text sm:hidden overflow-hidden capitalize">
          <h2 className="para text-sm md:text-lg lg:text-2xl opacity-0 relative whitespace-nowrap text-center">
            a modality through which I learned of and 
          </h2>
        </div>
        <div className="wrap-text sm:hidden overflow-hidden capitalize">
          <h2 className="para text-sm md:text-lg lg:text-2xl opacity-0 relative whitespace-nowrap text-center">
          experienced the  power of  compassion. 
          </h2>
        </div>
        <div className="wrap-text sm:hidden overflow-hidden capitalize">
          <h2 className="para text-sm md:text-lg lg:text-2xl opacity-0 relative whitespace-nowrap text-center">
          The frequency of compassion works  seamlessly.It 
          </h2>
        </div>
        <div className="wrap-text sm:hidden overflow-hidden capitalize">
          <h2 className="para text-sm md:text-lg lg:text-2xl opacity-0 relative whitespace-nowrap text-center">
          goes deep into the layers  of our field.Distortions 
          </h2>
        </div>
        <div className="wrap-text sm:hidden overflow-hidden capitalize">
          <h2 className="para text-sm md:text-lg lg:text-2xl opacity-0 relative whitespace-nowrap text-center">
          that once needed effort to clear now dissolve 
          </h2>
        </div>
        <div className="wrap-text sm:hidden overflow-hidden capitalize">
          <h2 className="para text-sm md:text-lg lg:text-2xl opacity-0 relative whitespace-nowrap text-center">
          effortlessly with this frequency.It's a vast topic,
          </h2>
        </div>
        <div className="wrap-text sm:hidden overflow-hidden capitalize">
          <h2 className="para text-sm md:text-lg lg:text-2xl opacity-0 relative whitespace-nowrap text-center">
          one that has become a primary theme for me.
          </h2>
        </div>
        <div className="wrap-text sm:hidden overflow-hidden capitalize">
          <h2 className="para text-sm md:text-lg lg:text-2xl opacity-0 relative whitespace-nowrap text-center">
            theme for me. Compassion continues
          </h2>
        </div>
        <div className="wrap-text sm:hidden overflow-hidden capitalize">
          <h2 className="para text-sm md:text-lg lg:text-2xl opacity-0 relative whitespace-nowrap text-center">
            to be central in my work.
          </h2>
        </div>
      </div>
      <div className="soon absolute z-10 top-[25%] md:top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden">
        <h1 className="soon-text opacity-0 text-5xl md:text-6xl lg:text-7xl text-white text-center uppercase font-semibold relative translate-y-full">
          COMING SOON
        </h1>
      </div>
      <div
        id="keepscroll"
        className="absolute left-1/2 -translate-x-1/2 bottom-7 flex flex-col items-center"
      >
        <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
          <div
            id="ring-lg"
            className="w-full h-full border border-zinc-400 rounded-full absolute"
          ></div>
          <div
            id="ring"
            className="keep-scroll w-8 h-8 md:w-10 md:h-10 rounded-full border border-zinc-300 text-white flex items-center justify-center"
          >
            <i className="ri-arrow-drop-down-line text-lg text-zinc-300"></i>
          </div>
        </div>
        <h6 className="text-white text-sm md:text-[.8vw] font-medium mt-2">
          Keep Scrolling
        </h6>
      </div>
      <div className="absolute top-[35%] md:top-[38%] z-30 left-1/2 -translate-x-1/2 rounded-tl-3xl rounded-tr-3xl flex flex-col items-center justify-center">
        <div className="overflow-hidden">
          <h3
            ref={mailref}
            className="text-lg md:text-xl lg:text-2xl text-zinc-300"
          >
            idj@ioftheancient.com
          </h3>
        </div>
        <div
          ref={connectref}
          id="connect-btn"
          className="text-white overflow-hidden px-4 py-2 md:px-6 md:py-3 rounded-full relative border border-white mt-4"
        >
          <div
            id="circle-btn"
            className="w-full h-full bg-white absolute rounded-[50%] left-1/2 -translate-x-1/2 top-[100%]"
          ></div>
          <Link
            id="btn"
            href="mailto:idj@ioftheancient.com"
            className="relative z-10"
          >
            Let's Connect
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
