// components/Im
import React from 'react';
import Image from 'next/image';

const imagesInfo = [
  {
    src: '/shops/prudential.jpg',
    name: 'Prudential',
    position: ['Global Fixed Income', 'Portfolio Management'] // Split the text
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
    position: ['U.S. Institutional', 'Interest Rate Sales'] // Split the text
  },
  {
    src: '/shops/merrill.jpg',
    name: 'Merrill Lynch',
    position: ['Global Institutional', 'Interest Rate Sales'] // Split the text
  }
];

const ImageCards = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center h-screen overflow-x-auto">
      {imagesInfo.map(({ src, name, position }) => (
        <div key={name} className="card bg-white shadow-lg rounded-lg p-4 m-4 flex flex-col items-center" style={{ width: '200px' }}>
          <Image src={src} alt={name} width={200} height={200} objectFit="cover" className="rounded-lg" />
          <h2 className="text-lg font-bold mt-2">{name}</h2>
          <p className="text-md text-slate-500 text-center">
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
