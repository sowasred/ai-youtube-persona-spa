import Image from "next/image";
import { GlowingEffect } from "./glowing-effect";

export default function Feature({
  isSoon,
  isLeft,
  title,
  subtitle,
  imgSrc,
  imgAlt,
}: {
  isSoon: boolean;
  isLeft: boolean;
  title: string;
  subtitle: string;
  imgSrc: string;
  imgAlt: string;
}) {
  return (
    <>
      {/* <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        /> */}
        <div className="flex flex-col lg:flex-row gap-4 mx-auto items-center">
          {/* Text content - always first on mobile, positioned based on isLeft on desktop */}
          <div className={`flex lg:flex-1 justify-center items-start flex-col w-full order-1 ${isLeft ? 'lg:order-1 lg:mr-16' : 'lg:order-2 lg:ml-16'}`}>
            {/* {isSoon ? <span className="border rounded-full border-blue-500 font-medium text-sm text-capitalized px-4 py-1 mb-2 text-blue-500">Coming Soon</span> : <></>} */}
            <h3 className="text-2xl font-medium text-gray-900 md:text-3xl lg:text-5xl lg:mb-2">{title}</h3>
            <h4 className="text-lg font-medium text-gray-600 md:text-xl lg:text-3xl">{subtitle}</h4>
          </div>
          {/* Image - always second on mobile, positioned based on isLeft on desktop */}
          <div className={`flex lg:flex-1 lg:max-w-full order-2 ${isLeft ? 'lg:order-2' : 'lg:order-1'}`}>
            <Image src={imgSrc} width={800} height={513} alt={imgAlt} />
          </div>
          </div>
    </>
  )
}
