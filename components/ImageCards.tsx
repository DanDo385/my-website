// components/ImageCards.tsx
import React from 'react';import Image from 'next/image';
import workData from '../data/work';


const ImageCards = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center h-screen overflow-x-auto">
      {workData.map(({ src, name, position }) => (
        <div key={name} className="card bg-white shadow-lg rounded-lg p-4 m-4 flex flex-col items-center" style={{ width: '200px' }}>
          <Image src={src} alt={name} width={400} height={400} objectFit="cover" className="rounded-lg" />
          <h2 className="text-black text-lg font-bold mt-2">{name}</h2>
          <p className="text-md text-slate-700 text-center">
            {Array.isArray(position) ? position.map((line, index) => (
              <React.Fragment key={index}>
                {line}{index < position.length - 1 && <br />}
              </React.Fragment>
            )) : position}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ImageCards;
