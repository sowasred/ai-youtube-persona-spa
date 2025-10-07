"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

type Item = {
  id: number;
  name: string;
  designation: string;
  image: string;
  telegramLink: string;
  whatsappLink: string;
}

export const AnimatedTooltip = ({
  items,
}: {
  items: Item[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(hover: none), (pointer: coarse)");
    const updateIsTouch = () => setIsTouchDevice(mediaQuery.matches);
    updateIsTouch();
    mediaQuery.addEventListener("change", updateIsTouch);
    return () => mediaQuery.removeEventListener("change", updateIsTouch);
  }, []);
  const handleMouseMove = (event: React.MouseEvent<HTMLImageElement>) => {
    const { currentTarget, nativeEvent } = event;
    const halfWidth = currentTarget.offsetWidth / 2;
    x.set(nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  const handleMouseEnter = (id: number) => {
    if (isTouchDevice) return;
    setHoveredIndex(id);
  };

  const handleMouseLeave = () => {
    if (isTouchDevice) return;
    setHoveredIndex(null);
  };

  const handleAvatarTap = (id: number) => {
    if (!isTouchDevice) return;
    setHoveredIndex((current) => (current === id ? null : id));
  };

  return (
    <>
      {items.map((item) => (
        <div
          className="group relative -mr-4"
          key={item.name}
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={handleMouseLeave}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <div className="absolute -left-32 -top-26 z-50 flex translate-x-1/2 flex-col items-center">
                {/* Large invisible hover area to keep tooltip visible when moving to buttons */}
                <div
                  className="absolute inset-0 pointer-events-auto"
                  style={{
                    width: '250px',
                    height: '140px',
                    left: '-75px',
                    top: '-20px',
                  }}
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                  onClick={(event) => event.stopPropagation()}
                />
                {/* Main tooltip box */}
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.6 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 260,
                      damping: 10,
                    },
                  }}
                  exit={{ opacity: 0, y: 20, scale: 0.6 }}
                  style={{
                    translateX: translateX,
                    rotate: rotate,
                    whiteSpace: "nowrap",
                  }}
                  className="flex flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
                  onClick={(event) => event.stopPropagation()}
                >
                  <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent " />
                  <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent " />
                  <div className="relative z-30 text-base font-bold text-white">
                    {item.name}
                  </div>
                  <div className="text-xs text-white">{item.designation}</div>
                </motion.div>

                {/* Social Media Buttons - Separate from main tooltip */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 260,
                      damping: 10,
                      delay: 0.1,
                    },
                  }}
                  exit={{ opacity: 0, y: 10 }}
                  className="flex gap-2 mt-3"
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                  onClick={(event) => event.stopPropagation()}
                >
                  {item.telegramLink && (
                    <a
                      href={item.telegramLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium rounded-full transition-colors duration-200 flex items-center gap-1 shadow-lg hover:shadow-xl"
                    >
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                      Telegram
                    </a>
                  )}
                  {item.whatsappLink && (
                    <a
                      href={item.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-3 py-1.5 bg-green-500 hover:bg-green-600 text-white text-xs font-medium rounded-full transition-colors duration-200 flex items-center gap-1 shadow-lg hover:shadow-xl"
                    >
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      WhatsApp
                    </a>
                  )}
                </motion.div>
              </div>
            )}
          </AnimatePresence>
          <button
            type="button"
            className="block focus:outline-none"
            onClick={() => handleAvatarTap(item.id)}
          >
            <Image
              onMouseMove={(event) => {
                if (isTouchDevice) return;
                handleMouseMove(event);
              }}
              height={100}
              width={100}
              src={item.image}
              alt={item.name}
              className="relative !m-0 h-32 w-32 md:h-20 md:w-20 rounded-full border-2 border-white object-cover object-top !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105"
            />
          </button>

        </div>
      ))}
    </>
  );
};
