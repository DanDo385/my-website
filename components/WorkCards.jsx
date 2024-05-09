// components/WorkCards.tsx
import React from 'react';
import Image from 'next/image';

const WorkCards = ({ workData }) => {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center">
      {workData.map(({ src, name, position }, index) => (
        <div key={index} className="card bg-white shadow-lg rounded-lg p-4 m-4 flex flex-col items-center" style={{ width: '300px' }}>
          <Image src={src} alt={name} width={300} height={300} className="text-black rounded-lg" />
          <h2 className="text-black text-lg font-bold mt-2">{name}</h2>
          <p className="text-md text-slate-500 text-center">
            {Array.isArray(position) ? position.join(', ') : position}
          </p>
        </div>
      ))}
    </div>
  );
};

export default WorkCards;
