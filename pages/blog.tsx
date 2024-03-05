import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Blog() {
  const router = useRouter();

  const navigateTo = () => {
    window.open('https://www.c2defi.com', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="h-screen bg-cover bg-center" style={{ backgroundImage: 'url(./br.jpg)', backgroundSize: 'auto', backgroundRepeat: 'repeat'}}>
      <div className="flex flex-col items-center justify-center h-full">
        <h2 className="text-green-400 text-3xl font-electrolize mb-8">
          Check out my blog C2DeFi by clicking on the image below:
        </h2>
        <div onClick={navigateTo} className="cursor-pointer">
          <Image src="/blog.jpg" alt="C2DeFi Blog" width={600} height={400} />
        </div>
      </div>
    </div>
  );
}

