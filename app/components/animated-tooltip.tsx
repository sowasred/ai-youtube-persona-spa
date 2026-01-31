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
import { YouTube } from "./icons";
import { useCreator } from "./creator-interaction";
import type { Creator } from "../data/creators";

export const AnimatedTooltip = ({
  items,
}: {
  items: Creator[];
}) => {
  const { selectedCreatorId, setSelectedCreatorId } = useCreator();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState<{[key: number]: 'left' | 'center' | 'right'}>({});
  const leaveTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const avatarRefs = React.useRef<{ [key: number]: HTMLButtonElement | null }>({});
  const groupRefs = React.useRef<{ [key: number]: HTMLDivElement | null }>({});
  const isAnimatingRef = React.useRef(false);
  const hasInitializedMobileRef = React.useRef(false);
  const springConfig = { stiffness: 100, damping: 10 };
  
  // Create motion values for the currently hovered item
  const x = useMotionValue(0);
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-15, 15]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-20, 20]),
    springConfig
  );
  const calculateTooltipPosition = (element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    // Include name, designation, and social buttons (use max width)
    const tooltipWidth = 320;
    const viewportWidth = window.innerWidth;
    
    const centerPosition = rect.left + rect.width / 2;
    const leftEdge = centerPosition - tooltipWidth / 2;
    const rightEdge = centerPosition + tooltipWidth / 2;
    
    if (leftEdge < 10) {
      // Too close to left edge, align left
      return 'left';
    } else if (rightEdge > viewportWidth - 10) {
      // Too close to right edge, align right
      return 'right';
    } else {
      // Enough space, center it
      return 'center';
    }
  };

  // Clear timeout helper
  const clearLeaveTimeout = React.useCallback(() => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(hover: none), (pointer: coarse)");
    const updateIsTouch = () => setIsTouchDevice(mediaQuery.matches);
    updateIsTouch();
    mediaQuery.addEventListener("change", updateIsTouch);
    return () => {
      mediaQuery.removeEventListener("change", updateIsTouch);
      clearLeaveTimeout();
    };
  }, [clearLeaveTimeout]);

  // Initialize first creator on mobile with tooltip active
  useEffect(() => {
    if (
      typeof window === "undefined" ||
      hasInitializedMobileRef.current ||
      !isTouchDevice ||
      items.length === 0
    ) {
      return;
    }

    const firstCreator = items[0];
    if (!firstCreator) return;

    // Set first creator as selected
    setSelectedCreatorId(firstCreator.id);

    // Show tooltip for first creator after DOM is ready
    // Use requestAnimationFrame to ensure refs are set
    let frameId: number;
    let retryCount = 0;
    const maxRetries = 20; // Maximum 20 retries (about 1 second)
    
    const initTooltip = () => {
      frameId = requestAnimationFrame(() => {
        // Check if the group element exists, if not try again
        const groupElement = groupRefs.current[firstCreator.id];
        if (groupElement) {
          setHoveredIndex(firstCreator.id);
          
          // Calculate tooltip position
          try {
            const position = calculateTooltipPosition(groupElement);
            setTooltipPosition(prev => ({ ...prev, [firstCreator.id]: position }));
          } catch (error) {
            console.warn('Failed to calculate tooltip position on mobile init:', error);
            setTooltipPosition(prev => ({ ...prev, [firstCreator.id]: 'center' }));
          }
          
          hasInitializedMobileRef.current = true;
        } else if (retryCount < maxRetries) {
          // If element not found, try again after a short delay
          retryCount++;
          setTimeout(initTooltip, 50);
        } else {
          // If element still not found after max retries, just show tooltip with center position
          setHoveredIndex(firstCreator.id);
          setTooltipPosition(prev => ({ ...prev, [firstCreator.id]: 'center' }));
          hasInitializedMobileRef.current = true;
        }
      });
    };

    // Start initialization after a small delay to ensure component is mounted
    const initTimer = setTimeout(initTooltip, 150);

    return () => {
      clearTimeout(initTimer);
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [isTouchDevice, items, setSelectedCreatorId]);

  // Reset animation when hoveredIndex changes
  useEffect(() => {
    if (hoveredIndex === null) {
      x.set(0);
      isAnimatingRef.current = false;
    } else {
      isAnimatingRef.current = true;
      // Reset animation position when switching items
      x.set(0);
    }
  }, [hoveredIndex, x]);
  const handleMouseMove = (event: React.MouseEvent<HTMLElement>, itemId: number) => {
    if (isTouchDevice || hoveredIndex !== itemId) return;
    
    const avatarElement = avatarRefs.current[itemId];
    if (!avatarElement) return;
    
    const rect = avatarElement.getBoundingClientRect();
    const avatarCenterX = rect.left + rect.width / 2;
    const mouseX = event.clientX;
    const offsetX = mouseX - avatarCenterX;
    const halfWidth = rect.width / 2;
    
    // Normalize the offset relative to avatar size and clamp to reasonable range
    // Reduced range for smoother, less aggressive movement
    const normalizedOffset = Math.max(-100, Math.min(100, (offsetX / halfWidth) * 80));
    x.set(normalizedOffset);
  };

  const handleMouseEnter = React.useCallback((id: number, _event?: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice) return;
    
    // Clear any pending leave timeout immediately to prevent race conditions
    clearLeaveTimeout();
    
    // Always use the group element (avatar container) for position calculation.
    // If we used event.currentTarget, when the user moves from avatar to tooltip
    // the currentTarget would be the tooltip div, giving wrong rect and making
    // the tooltip jump back (e.g. to center) and overflow again.
    const groupElement = groupRefs.current[id];
    if (groupElement) {
      try {
        const position = calculateTooltipPosition(groupElement);
        setTooltipPosition(prev => ({ ...prev, [id]: position }));
      } catch (error) {
        console.warn('Failed to calculate tooltip position:', error);
        setTooltipPosition(prev => ({ ...prev, [id]: 'center' }));
      }
    }
    
    setHoveredIndex(prevId => {
      if (prevId === id) return prevId;
      return id;
    });
  }, [isTouchDevice, clearLeaveTimeout]);

  const handleMouseLeave = React.useCallback(() => {
    if (isTouchDevice) return;
    
    // Clear any existing timeout first to prevent multiple timeouts
    clearLeaveTimeout();
    
    // Add a small delay before closing to allow movement to buttons
    // This gives users time to move from avatar to tooltip/buttons
    leaveTimeoutRef.current = setTimeout(() => {
      setHoveredIndex(prevId => {
        // Only clear if still the same (prevents clearing if user re-entered)
        if (prevId !== null) {
          return null;
        }
        return prevId;
      });
      leaveTimeoutRef.current = null;
    }, 150); // Delay allows smooth transition to tooltip area
  }, [isTouchDevice, clearLeaveTimeout]);

  const handleAvatarClick = React.useCallback((id: number, event: React.MouseEvent<HTMLButtonElement>) => {
    // Always select the creator to update the TelegramMockUp
    setSelectedCreatorId(id);
    
    // On desktop, clicking should select the creator without interfering with hover
    // On touch devices, also handle tap interaction (toggle tooltip)
    if (isTouchDevice) {
      clearLeaveTimeout();
      setHoveredIndex(prevId => {
        const newHoverState = prevId === id ? null : id;
        
        // Calculate position if opening tooltip
        if (newHoverState !== null) {
          // Use setTimeout to ensure DOM is ready
          setTimeout(() => {
            const groupElement = groupRefs.current[id];
            if (groupElement) {
              try {
                const position = calculateTooltipPosition(groupElement);
                setTooltipPosition(prev => ({ ...prev, [id]: position }));
              } catch (error) {
                console.warn('Failed to calculate tooltip position on click:', error);
                setTooltipPosition(prev => ({ ...prev, [id]: 'center' }));
              }
            }
          }, 0);
        }
        
        return newHoverState;
      });
    }
    // For desktop, hover continues to work normally after selection
  }, [isTouchDevice, setSelectedCreatorId, clearLeaveTimeout]);

  const getTooltipClasses = (itemId: number) => {
    const position = tooltipPosition[itemId] || 'center';
    
    switch(position) {
      case 'left':
        return 'absolute left-0 -top-26 z-50 flex flex-col items-center';
      case 'right':
        return 'absolute right-0 -top-26 z-50 flex flex-col items-center';
      case 'center':
      default:
        return 'absolute left-1/2 -translate-x-1/2 -top-26 z-50 flex flex-col items-center';
    }
  };

  return (
    <>
      {items.map((item) => (
        <div
          ref={(el) => {
            groupRefs.current[item.id] = el;
          }}
          className="group relative -mr-4"
          key={item.name}
          onMouseEnter={(e) => handleMouseEnter(item.id, e)}
          onMouseLeave={handleMouseLeave}
          onMouseMove={(e) => handleMouseMove(e, item.id)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <div 
                className={`${getTooltipClasses(item.id)} pb-1`}
                onMouseEnter={(e) => {
                  // Ensure we maintain hover when mouse enters tooltip area
                  handleMouseEnter(item.id, e);
                }}
                onMouseLeave={handleMouseLeave}
                onMouseMove={(e) => handleMouseMove(e, item.id)}
                style={{ pointerEvents: 'auto' }}
              >
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
                    pointerEvents: 'auto',
                  }}
                  className="flex flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl relative z-50"
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
                {(() => {
                  const buttonCount = [
                    item.telegramLink,
                    item.whatsappLink,
                    item.youtubeLink,
                  ].filter(Boolean).length;
                  const hasThreeButtons = buttonCount === 3;

                  return (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: {
                          type: "spring",
                          stiffness: 260,
                          damping: 10,
                          delay: 0.1,
                        },
                      }}
                      exit={{ opacity: 0 }}
                      className="grid grid-cols-2 ty:flex ty:flex-row gap-1 ty:gap-2 mt-3 mb-0 relative z-50 ty:justify-center"
                      style={{ 
                        pointerEvents: 'auto',
                        transform: 'translateY(0)',
                        marginBottom: 0,
                      }}
                      onClick={(event) => event.stopPropagation()}
                    >
                      {item.telegramLink && (
                        <a
                          href={item.telegramLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="px-2 ty:px-3 py-1 ty:py-1.5 bg-blue-500 hover:bg-blue-600 text-white text-xs ty:text-sm sm:text-lg font-medium rounded-full transition-colors duration-200 flex items-center gap-0.5 ty:gap-1 shadow-lg hover:shadow-xl cursor-pointer relative z-50 justify-self-center ty:justify-self-auto"
                          style={{ pointerEvents: 'auto' }}
                        >
                          <svg className="w-2.5 h-2.5 ty:w-3 ty:h-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                          </svg>
                          <span className="whitespace-nowrap">Telegram</span>
                        </a>
                      )}
                      {item.whatsappLink && (
                        <a
                          href={item.whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="px-2 ty:px-3 py-1 ty:py-1.5 bg-green-500 hover:bg-green-600 text-white text-xs ty:text-sm sm:text-lg font-medium rounded-full transition-colors duration-200 flex items-center gap-0.5 ty:gap-1 shadow-lg hover:shadow-xl cursor-pointer relative z-50 justify-self-center ty:justify-self-auto"
                          style={{ pointerEvents: 'auto' }}
                        >
                          <svg className="w-2.5 h-2.5 ty:w-3 ty:h-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                          </svg>
                          <span className="whitespace-nowrap">WhatsApp</span>
                        </a>
                      )}
                      {item.youtubeLink && (
                        <a
                          href={item.youtubeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className={`px-2 ty:px-3 py-1 ty:py-1.5 bg-red-500 hover:bg-red-600 text-white text-xs ty:text-sm sm:text-lg font-medium rounded-full transition-colors duration-200 flex items-center gap-0.5 ty:gap-1 shadow-lg hover:shadow-xl cursor-pointer relative z-50 ${
                            hasThreeButtons 
                              ? 'col-span-2 ty:col-span-1 justify-self-center ty:justify-self-auto' 
                              : 'justify-self-center ty:justify-self-auto'
                          }`}
                          style={{ pointerEvents: 'auto' }}
                        >
                          <YouTube className="w-2.5 h-2.5 ty:w-3 ty:h-3" />
                          <span className="whitespace-nowrap">YouTube</span>
                        </a>
                      )}
                    </motion.div>
                  );
                })()}
              </div>
            )}
          </AnimatePresence>
          <button
            ref={(el) => {
              avatarRefs.current[item.id] = el;
            }}
            type="button"
            className="block focus:outline-none cursor-pointer"
            onClick={(e) => handleAvatarClick(item.id, e)}
          >
            <Image
              height={100}
              width={100}
              src={item.image}
              alt={item.name}
              className={`relative !m-0 h-40 w-40 md:h-32 md:w-32 lg:h-36 lg:w-36 rounded-full border-2 border-white object-cover object-top !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105 ${
                selectedCreatorId === item.id 
              }`}
              style={selectedCreatorId === item.id ? {
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(59, 130, 246, 0.4), 0 0 60px rgba(59, 130, 246, 0.2)',
                animation: 'pulse-glow 2s ease-in-out infinite'
              } : {}}
            />
          </button>

        </div>
      ))}
    </>
  );
};
