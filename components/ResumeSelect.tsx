"use client"

import { useState } from 'react';

const ResumeSelect = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelection = (event: { target: { value: any; }; }) => {
    const value = event.target.value;
    setSelectedOption(value);

    if (value === 'ipfs') {
      window.open('https://ipfs.io/ipfs/QmYaQaPwexLTMikb4Du7ADcv76nE9FQ1Ebhw53LA3D3JpQ?filename=Daniel%20Magro%20Resume.pdf', '_blank');
    } else if (value === 'local') {
      window.location.href = '/Daniel-Magro-Resume.pdf';
    }
  };

  return (
    <>
      <div className="bg-black text-xl text-green-300">
        <select
          value={selectedOption}
          onChange={handleSelection}
          className="bg-black text-xl text-green-300 p-2 rounded"
          defaultValue=""
        >
        <option value="" disabled>Select Resume Location</option>
        <option value="ipfs">Download from IPFS</option>
        <option value="local">Download Locally</option>
        </select>
      </div>
    </>
  );
};

export default ResumeSelect;