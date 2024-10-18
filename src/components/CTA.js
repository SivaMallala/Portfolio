import React from "react";

function CTA() {
  return (
    <div className="pt-36 relative  w-full">
      <img className="w-30 m-auto mb-2" src="/doodles/lineBreak.svg" />
      <div className="pt-14 pb-10 sm:pb-40">
        <h2 className="text-3xl md:text-5xl font-bold mb-10">
          Interested in Working Together?
        </h2>
        <a
          href="mailto:mallalasivachand@gmail.com"
          className="cursor-pointer font-bold whitespace-nowrap 
        mt-6 px-8 py-3 text-white border-2 rounded-full border-white  hover:bg-[#00c7ff] hover:border-[#00c7ff] transition-colors"
        >
          Get in Touch
        </a>
      </div>

      <img
        className="sqD w-[800px] bottom-[-100px] left-1/2 sm:bottom-[-150px] -translate-x-1/2 object-cover sm:w-[1100px]"
        style={{ zIndex: "-10" }}
        src="/doodles/hero/fancyLines.svg"
      />
    </div>
  );
}

export default CTA;
