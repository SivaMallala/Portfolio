import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <>
      <div
        className="relative heroElem w-full pt-20 pb-40 mb-3 m-auto flex justify-center text-center flex-col items-center z-1"
        style={{ maxWidth: "1200px" }}
      >
        <p className="text-xl mb-5">Hey, Im Siva Chandu.</p>
        <h1 className="heroTitle inline-block max-w-2xl lg:max-w-4xl  w-auto relative text-xl md:text-3xl lg:text-5xl tracking-tighter mb-10 font-bold">
        Im a <span className=" text-[#00c7ff]"><i>full-stack developer</i></span> passionate about creating powerful and elegant{" "}
          <span className=" text-[#00c7ff]"><i>web applications</i></span> and <span className=" text-[#00c7ff]"><i>Coding</i></span>...
          <Image
            className="sqD  w-16 top-[-90px] right-[5%] sm:top-[-90px] sm:right-[170px]"
            style={{ animationDelay: "0.1s" }}
            src="/doodles/hero/html.svg"
            alt="img"
          />
          <Image
            className="sqD hidden sm:block  top-[75px] right-0 w-11"
            style={{ animationDelay: "0.2s" }}
            src="/doodles/hero/nextjs.svg"
            alt="img"
          />
          <Image
            className="sqD bottom-[-300px] -right-1/4 sm:right-[-20%] opacity-55 lg:bottom-[-310px] lg:right-[-120px] w-[400px]"
            style={{ animationDelay: "0.3s" }}
            src="/doodles/hero/ironhero.png"
            alt="img"
          />
          <Image
            className="sqD hidden sm:block bottom-[-340px] left-[-180px]"
            style={{ animationDelay: "0.4s" }}
            src="/doodles/hero/coder.svg"
            alt="img"
          />
          <Image
            className="sqD hidden sm:block left-[100px] lg:left-[160px] bottom-[-150px]"
            style={{ animationDelay: "0.5s" }}
            src="/doodles/hero/js.svg"
            alt="img"
          />
          <Image
            className="sqD bottom-[-320px] right-[65%] sm:right-[45%]"
            style={{ animationDelay: "0.6s" }}
            src="/doodles/hero/dino.svg"
            alt="img"
          />
          <Image
            className="sqD right-[-60px] sm:right-0 bottom-[-180px] lg:[5%]"
            style={{ animationDelay: "0.7s" }}
            src="/doodles/hero/paintbrush.svg"
            alt="img"
          />
          <Image
            className="sqD  hidden sm:block sm:top-[-130px] sm:left-[15%] lg:top-[-130px] lg:left-[120px]"
            src="/doodles/hero/pop1.svg"
            alt="img"
          />
          <Image
            className="sqD left-[-35px] bottom-[-85px] sm:bottom-[-100px] sm:left-5 opacity-40"
            style={{ animationDelay: "0.9s" }}
            src="/doodles/hero/code.svg"
            alt="img"
          />
        </h1>
        <div
          
        >
          <a href="../Siva Chandu Mallala.pdf"
    download="Siva Chandu Mallala"
    target="_blank"  className="cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-white border-2 text-xl rounded-full border-white hover:bg-[#00c7ff] hover:text-white hover:border-[#00c7ff] transition-colors">
           Resume

          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
