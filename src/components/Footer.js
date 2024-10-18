import React from 'react';

function Footer() {
  return (
    <div className='mt-14'>
      <div className="relative flex flex-col items-center">
        <img className='w-[70%] rounded-3xl opacity-80' src='/footer/spidermeme.jpg' alt='Spiderman meme' />

        {/* Git */}
        <a href='https://github.com/SivaMallala' target="_blank" rel="noopener noreferrer">
          <p className='absolute top-[22%] left-[27%] md:top-[25%] md:left-[29%] lg:top-[28%] lg:left-[29%] custom-1440:top-[30%] custom-1440:left-[28%]'>
            <img className='w-6 sm:w-14' src='/footer/github.png' alt='GitHub'/>
          </p>
        </a>

        {/* LinkedIn */}
        <a href='https://www.linkedin.com/in/sivamallala007/' target="_blank" rel="noopener noreferrer">
          <p className='absolute top-[5%] left-[45%] md:top-[7%] md:left-[50%] lg:top-[9%] lg:left-[50%] custom-1440:top-[11%] custom-1440:left-[50%]'>
            <img className='w-6 sm:w-14' src='/footer/linkedin.png' alt='LinkedIn'/>
          </p>
        </a>

        {/* Gmail */}
        <a href='mailto:mallalasivachand@gmail.com' target="_blank" rel="noopener noreferrer">
          <p className='absolute top-[27%] left-[66%] md:top-[35%] md:left-[68%] lg:top-[36%] lg:left-[69%] custom-1440:top-[35%] custom-1440:left-[69%]'>
            <img className='w-6 sm:w-14' src='/footer/gmail.png' alt='Gmail'/>
          </p>
        </a>
      </div>

      <div className="max-w-4xl w-full m-auto mt-8 pt-8 sm:mt-4 sm:pt-4 text-center border-t ">
        <p className="flex flex-col items-center justify-center ">
          <div className="inline-flex items-center uppercase text-xs font-bold tracking-widest">
            Made with{" "}
            <div className="space-x-2 inline-flex items-center -mt-1 ml-3">
              <span>
                <img src="/skills/icons/react.png" width="26" title="React" alt='React' />
              </span>
              <span>
                <img src="/skills/icons/nextjs.png" width="40" className="invert" title="NextJS" alt='NextJS' />
              </span>
              <span>
                <img src="/skills/icons/tailwind.png" width="26" title="TailwindCSS" alt='TailwindCSS' />
              </span>
            </div>
          </div>
          <div className="mt-2 text-xs ">
            Made by{" "}
            <a href="mailto:mallalasivachand@gmail.com" className="text-[#b2bbcf] font-medium">
              Siva Chandu Mallala
            </a>
          </div>
        </p>
      </div>
    </div>
  );
}

export default Footer;
