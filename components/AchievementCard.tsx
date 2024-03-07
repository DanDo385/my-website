// components/AchievementCard.tsx
import Image from 'next/image';

const AchievementCard = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
      {/* Avatar */}
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0">
          <Image src="/psu5.jpg" alt="Avatar" width={50} height={50} className="rounded-full" />
        </div>
        <div className="ml-3">
          <div className="font-bold text-xl">The Pennsylvania State University</div>
          <p className="text-slate-700 text-base">University Park, PA</p>
        </div>
      </div>

      {/* Updated Table */}
      <table className="table-auto w-full">
        <tbody>
          <tr>
            <td className="border px-4 py-2">Class:</td>
            <td className="border px-4 py-2">2006</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border px-4 py-2">Major:</td>
            <td className="border px-4 py-2">Finance</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">GPA:</td>
            <td className="border px-4 py-2">3.73</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border px-4 py-2">Major GPA:</td>
            <td className="border px-4 py-2">3.93</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Honors:</td>
            <td className="border px-4 py-2">Magna Cum Laude</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AchievementCard;

  