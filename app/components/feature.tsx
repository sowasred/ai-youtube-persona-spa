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
        <div className="flex flex-col md:flex-row gap-4 mx-auto items-center">
          <div className={`flex md:flex-1 max-w-105 lg:max-w-full order-2 ${isLeft ? "md:order-1 md:ml-8" : "md:order-2 md:mr-8"}`}>
            <Image src={imgSrc} width={600} height={513} alt={imgAlt} />
          </div>
          <div className={`flex max-w-105 md:flex-1 justify-center items-start flex-col w-full order-1 md:ml-8 ${isLeft ? "md:order-2" : "md:order-1"}`}>
            {isSoon ? <span className="border rounded-full border-blue-500 font-medium text-sm text-capitalized px-4 py-1 mb-2 text-blue-500">Coming Soon</span> : <></>}
            <h3 className="text-2xl font-medium text-gray-900 md:text-3xl lg:text-4xl lg:mb-2">{title}</h3>
            <h4 className="text-lg font-medium text-gray-600 md:text-xl lg:text-2xl">{subtitle}</h4>
          </div>
          </div>
    </>
  )
}
