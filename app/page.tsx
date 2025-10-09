import Link from "next/link";
import Image from "next/image";
import { getDictionary } from "./lib/get-dictionary";

import { Comments } from "./components/comments";
import { FeaturesGrid } from "./components/features-grid";
import { MarketingSection } from "./components/marketing-section";

import { AnimatedTooltip } from "./components/animated-tooltip";
import { Button } from "./components/button";
import { ColourfulText } from "./components/colorful-text";
import * as Icons from "./components/icons";
import { SocialIcon } from "react-social-icons";
import FeaturesSection from "./components/features-section"

import type { Locale } from "./config/i18n-config";

const people = [
  {
    id: 1,
    name: "Andrew Huberman",
    designation: "Neuroscientist",
    image: "/andrew_huberman_pic.jpg",
    telegramLink: "",
    whatsappLink: "https://www.youtube.com/@hubermanlab",
  },
  {
    id: 2,
    name: "Casey Zander",
    designation: "Dating Coach Youtuber",
    image: "/casey_zander_pic.jpg",
    telegramLink: "https://t.me/kevin_samuel_bot",
    whatsappLink: "https://www.youtube.com/@hubermanlab",
  },
  {
    id: 3,
    name: "Daniel Brada",
    designation: "Self help influencer",
    image: "/daniel_brada_pic.webp",
    telegramLink: "",
    whatsappLink: "https://www.youtube.com/@hubermanlab",
  },
  {
    id: 4,
    name: "Gary Vaynerchuk",
    designation: "Entreprenuer",
    image: "/gary_vaynerchuk_pic.jpg",
    telegramLink: "",
    whatsappLink: "https://www.youtube.com/@hubermanlab",
  },
  {
    id: 5,
    name: "Jordan B. Peterson",
    designation: "Psychoanalyst",
    image: "/jordan_peterson_pic.jpg",
    telegramLink: "",
    whatsappLink: "https://www.youtube.com/@hubermanlab",
  },
  {
    id: 6,
    name: "Healthy Gamer GG",
    designation: "Psychologist",
    image: "/healthygamergg_pic.jpg",
    telegramLink: "",
    whatsappLink: "https://www.youtube.com/@hubermanlab",
  },
];

export default async function IndexPage({
  params: { lang },
}: {
  params: {
    lang: Locale;
  };
}) {
  const dict = await getDictionary(lang);

  return (
    <>
    <Image alt="bg2" src={"/magicpattern_god_rays.png"} className="w-screen h-screen z-[-2]" fill={true} objectFit="cover"></Image>
    <Image alt="bg" src={"/bg.svg"} className="w-screen h-screen z-[-10]" fill={true} objectFit="cover"></Image>
      <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 md:mb-24 max-w-[98rem]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="flex flex-col items-start h-full w-full">
            <div className="flex flex-col pt-4 md:pt-12 w-full">
              {/* Title */}
              <div className="mt-8 md:mt-0 lg:mt-20 mb-4">
                <div className="text-left text-[70px] md:text-6xl font-semibold leading-tight md:leading-[4rem] xl:leading-[4rem]">
                  {dict.marketing.title ||
                    "Fans can talk with you "}
                  <ColourfulText className="" text="24/7" />
                </div>
              </div>
              {/* Subtitle */}
              <div className="hidden md:block md:max-w-120 lg:max-w-160">
                <span className="text-neutral-500 text-3xl md:text-2xl leading-relaxed">
                <ColourfulText className="font-medium" text="Your voice"/> enhanced with technology, <ColourfulText className="font-medium" text="at your fans' fingertips"/>
                </span>
              </div>
              {/* CTA Buttons */}
              <div className="mb-2 md:mt-8 w-full z-10">
                <Link
                  // TODO: Add waitlist link
                  href="https://calendly.com/replyfanapp/30min"
                  target="_blank"
                >
                  <Button className="px-8 py-6 sm:py-12 md:py-10 h-auto w-full text-2xl text-center justify-center sm:h-12 md:rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium gap-2">
                    {dict.marketing.primary_cta}
                    <Icons.ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
              {/* Available Apps Section */}
              <div className="text-sm sm:text-base md:text-lg text-gray-800 flex items-center gap-1 ty:gap-2 flex-wrap">
                <span>Available in</span>
                <SocialIcon
                  network="whatsapp"
                  className="!h-6 !w-6 sm:!h-5 sm:!w-5 md:!h-6 md:!w-6"
                />
                <span className="font-semibold text-sm sm:text-base">WhatsApp</span>
                <span className="font-semibold">&</span>
                <SocialIcon
                  network="telegram"
                  className="!h-5 !w-5 sm:!h-5 sm:!w-5 md:!h-6 md:!w-6"
                />
                <span className="font-semibold text-sm sm:text-base">Telegram</span>
              </div>
              {/* Influencers section */}
              <div className="flex flex-col items-center justify-start mt-12 md:mt-32 w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="w-full md:max-w-[440px]">
                    <span className="text-neutral-500 text-2xl">
                      {dict.marketing.contributors.contributors_desc}
                    </span>
                  </div>
                </div>
                <div className="w-full flex justify-start mt-4">
                  <AnimatedTooltip items={people} />
                </div>
              </div>
            </div>
          </div>
          {/* Image */}
          <div className="flex justify-center mt-8 mb-12 md:mb-0 lg:justify-end xl:justify-center z-1">
            <div className="flex flex-col items-end w-fit">
              <Image
                src="/chat_mockup.svg"
                width={460}
                height={900}
                alt="Chat mockup"
                className="lg:block object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[98rem] mx-auto">
        <FeaturesGrid dict={dict.marketing.features_grid} />
      </section>

      <section id="how-it-works" className="max-w-[98rem] w-10/12 lg:w-11/12 my-40 mx-auto overflow-x-hidden">
        <div className="mb-10 md:mb-18 font-bold text-gray-800 text-4xl md:text-5xl md:leading-[4rem] xl:leading-[4rem] text-center md:text-left">
          How it works
        </div>
        <div className="my-10 flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-8 flex-wrap">
          <Image
            src="/it_works_1.svg"
            width={320}
            height={320}
            alt="Step 1"
            className="w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[320px] h-auto flex-shrink-0"
          />
          <Image
            src="/arrow.svg"
            width={60}
            height={60}
            alt="Arrow"
            className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 flex-shrink-0 rotate-90 lg:rotate-0 transition-transform duration-300"
          />
          <Image
            src="/it_works_2.svg"
            width={320}
            height={320}
            alt="Step 2"
            className="w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[320px] h-auto flex-shrink-0"
          />
          <Image
            src="/arrow.svg"
            width={60}
            height={60}
            alt="Arrow"
            className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 flex-shrink-0 rotate-90 lg:rotate-0 transition-transform duration-300"
          />
          <Image
            src="/it_works_3.svg"
            width={320}
            height={320}
            alt="Step 3"
            className="w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[320px] h-auto flex-shrink-0"
          />
        </div>
      </section>

      <section id="features" className="max-w-[98rem] w-10/12 lg:w-11/12 mb-24 mx-auto overflow-x-hidden">
      <div className="mb-10 md:mb-18 font-bold text-gray-800 text-4xl md:text-5xl md:leading-[4rem] xl:leading-[4rem] text-center md:text-left">
          Features
        </div>
        <FeaturesSection/>
      </section>

      <section className="w-full px-8 sm:px-0 sm:pt-24 md:px-0 md:pt-8 xl:px-0 xl:pt-24 overflow-x-hidden">
        <div className="flex h-full flex-col items-left pb-[100px] pt-10">
          <div className="max-w-[98rem] w-full sm:w-10/12 lg:w-11/12 mx-auto">
            <div>
              <h1 className="mb-6 text-left font-bold text-4xl md:text-5xl">
                {dict.marketing.people_comment.title}
              </h1>
            </div>
            <div className="mb-6 text-lg text-neutral-500">
              {dict.marketing.people_comment.desc}
            </div>
          </div>
          <div className="w-full overflow-x-hidden">
            <Comments />
          </div>
        </div>
      </section>


      {/* <section id="marketing" className="container flex flex-col my-40 mx-auto">
        <MarketingSection dict={dict.marketing.right_side} />
      </section> */}

    </>
  );
}