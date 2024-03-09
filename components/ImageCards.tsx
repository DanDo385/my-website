import React from 'react';
import Image from 'next/image';

const imagesInfo = [
  {
    src: '/shops/prudential.jpg',
    name: 'Prudential',
    position: 'Global Fixed Income Portfolio Management'
  },
  {
    src: '/shops/pointstate.jpg',
    name: 'Pointstate',
    position: 'Global Macro Trading'
  },
  {
    src: '/shops/nomura.jpg',
    name: 'Nomura',
    position: 'Global Macro Proprietary Trading'
  },
  {
    src: '/shops/jefferies.jpg',
    name: 'Jefferies',
    position: 'U.S. Institutional Interest Rate Sales'
  },
  {
    src: '/shops/merrill.jpg',
    name: 'Merrill Lynch',
    position: 'Global Institutional Interest Rate Sales'
  }
];

const ImageCards = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center h-screen overflow-x-auto">
      {imagesInfo.map(({ src, name, position }) => (
        <div key={name} className="card bg-white shadow-lg rounded-lg p-4 m-4 flex flex-col items-center">
          <Image src={src} alt={name} width={150} height={150} objectFit="cover" className="rounded-lg" />
          <h2 className="text-lg font-bold mt-2">{name}</h2>
          <p className="text-md text-slate-500">{position}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageCards;
