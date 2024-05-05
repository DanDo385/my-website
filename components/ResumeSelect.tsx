"use client"

import { useState } from 'react';

const ResumeSelect = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelection = (event: { target: { value: any; }; }) => {
    const value = event.target.value;
    setSelectedOption(value);

    if (value === 'ipfs') {
      window.open('https://ipfs.io/ipns/k51qzi5uqu5dgkjaf7zt6nxstzmgbdi4k5oin4tilivkndufklhso4l7c1n1ml', '_blank');
    } else if (value === 'local') {
      // Trigger local file download here
      // For security reasons, browsers restrict direct file downloads from a select option,
      // so you need a workaround like setting window.location or using a library to manage downloads.
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