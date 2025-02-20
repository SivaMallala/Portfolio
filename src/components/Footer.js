import Image from 'next/image';
import React from 'react';

function Footer() {
  return (
    <div className='mt-14'>
      <div className="relative flex flex-col items-center">
        <Image className='w-[70%] rounded-3xl opacity-80' width={980}
          height={453} src='/footer/spidermeme.jpg' alt='Spiderman meme' />

        {/* Git */}
        <a href='https://github.com/SivaMallala' target="_blank" rel="noopener noreferrer">
          <p className='absolute top-[22%] left-[27%] md:top-[25%] md:left-[29%] lg:top-[28%] lg:left-[29%] custom-1440:top-[30%] custom-1440:left-[28%]'>
            <Image className='w-6 sm:w-14' width={56} height={56} src='/footer/github.png' alt='GitHub'/>
          </p>
        </a>

        {/* LinkedIn */}
        <a href='https://www.linkedin.com/in/sivamallala007/' target="_blank" rel="noopener noreferrer">
          <p className='absolute top-[5%] left-[45%] md:top-[7%] md:left-[50%] lg:top-[9%] lg:left-[50%] custom-1440:top-[11%] custom-1440:left-[50%]'>
            <Image width={56} height={56} className='w-6 sm:w-14' src='/footer/linkedin.png' alt='LinkedIn'/>
          </p>
        </a>

        {/* Gmail */}
        <a href='mailto:mallalasivachand@gmail.com' target="_blank" rel="noopener noreferrer">
          <p className='absolute top-[27%] left-[66%] md:top-[35%] md:left-[68%] lg:top-[36%] lg:left-[69%] custom-1440:top-[35%] custom-1440:left-[69%]'>
            <Image width={56} height={56} className='w-6 sm:w-14' src='/footer/gmail.png' alt='Gmail'/>
          </p>
        </a>
      </div>

      <div className="max-w-4xl w-full m-auto mt-8 pt-8 sm:mt-4 sm:pt-4 text-center border-t ">
        <p className="flex flex-col items-center justify-center ">
          <div className="inline-flex items-center uppercase text-xs font-bold tracking-widest">
            Made with{" "}
            <div className="space-x-2 inline-flex items-center -mt-1 ml-3">
              <span>
                <Image src="/skills/icons/react.png" width={30} height={30} title="React" alt='React' />
              </span>
              <span>
                <Image src="/skills/icons/nextjs.png" width={30} height={30} className="invert" title="NextJS" alt='NextJS' />
              </span>
              <span>
                <Image src="/skills/icons/tailwind.png" width={30} height={30} title="TailwindCSS" alt='TailwindCSS' />
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
