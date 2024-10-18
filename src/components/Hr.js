import React from 'react';

function Hr({ heading }) {
  return (
    <div className="w-[80%] h-1 bg-[#00c7ff] rounded-full relative">
      <div className="absolute top-[-25px] left-1/2 transform -translate-x-1/2 w-fit h-fit p-3 bg-[#00c7ff] rounded-full flex items-center justify-center">
        <p className="text-[#000435] font-mono font-bold text-xl z-[100]">
          {heading}
        </p>
      </div>
    </div>
  );
}

export default Hr;
