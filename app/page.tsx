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
      <section className="container w-11/12 mx-auto md:mb-0">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="flex flex-col items-start h-full">
            <div className="flex flex-col pt-4 md:pt-36 lg:pt-36 xl:pt-36">
              {/* Title */}
              <div className="mt-20 md:mt-0 lg:mt-20 mb-4">
                <div className="max-w-4xl text-left text-5xl font-semibold md:text-5xl xl:text-6xl md:leading-[4rem] xl:leading-[4rem]">
                  {dict.marketing.title ||
                    "Ship your apps to the world easier with "}
                  <ColourfulText className="" text="24/7" />
                </div>
              </div>
              {/* Subtitle */}
              <div className="max-w-120 lg:max-w-160">
                <span className="text-neutral-500 text-xl lg:text-2xl">
                <ColourfulText className="font-medium" text="Your voice"/> enhanced with technology, <ColourfulText className="font-medium" text="at your fans’ fingertips"/>
                </span>
              </div>
              {/* CTA Buttons */}
              <div className="mb-2 mt-8 flex w-full flex-col justify-center space-y-4 sm:flex-row sm:justify-start sm:space-x-4 sm:space-y-0 z-10">
                <Link
                  // TODO: Add waitlist link
                  href="https://calendly.com/replyfanapp/30min"
                  target="_blank"
                >
                  <Button className="bg-blue-600 hover:bg-blue-500 text-white text-left rounded-full text-lg pr-48 pl-8 h-12 font-medium">
                    {dict.marketing.primary_cta}
                    <Icons.ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
              {/* Available Apps Section */}
              <div className="text-lg color-gray-800 flex align-center gap-0.5">
                <span>Available in</span>
                <SocialIcon
                  network="whatsapp"
                  style={{ height: 24, width: 24 }}
                  className="ml-2.5"
                />{" "}
                <span className="font-semibold mx-0.5 align-middle inline-block">WhatsApp</span>
                <span className="font-semibold mx-0.5">&</span>
                <SocialIcon
                  network="telegram"
                  style={{ height: 24, width: 24 }}
                  className="ml-2"
                />
                <span className="font-semibold mx-0.5 align-middle inline-block">Telegram</span>
              </div>
              {/* Influencers section */}
              <div className="flex flex-col items-center justify-start mt-24 md:mt-32 w-full">
                <div className="flex flex-col items-start justify-start mb-4 w-full">
                  <div className="w-full md:max-w-[440px]">
                    <span className="text-neutral-500 text-2xl">
                      {dict.marketing.contributors.contributors_desc}
                    </span>
                  </div>
                </div>
                <div className="w-full flex ml-0">
                  <AnimatedTooltip items={people} />
                </div>

              </div>
            </div>
          </div>
          {/* Image */}
          <div className="hidden lg:block z-1">
            <div className="flex flex-col mx-auto lg:items-end xl:items-center">
              <Image
                src="/chat_mockup.svg"
                width={460}
                height={900}
                alt="Chat mockup"
                className="hidden lg:block lg:w-[380px] xl:w-[480px] lg:h-[70vh] xl:h-[80vh] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto">
        <FeaturesGrid dict={dict.marketing.features_grid} />
      </section>

      <section id="how-it-works" className="container my-40 mx-auto overflow-x-hidden">
        <div className="mb-18 max-w-4xl text-center mx-auto text-5xl font-light text-gray-800  md:leading-[4rem] xl:leading-[4rem]">
          How it works
        </div>
        <div className="my-10">
          <Image
            src="/how_it_works.svg"
            width={1400}
            height={800}
            alt="How it works"
            className="mx-auto block max-w-full h-auto"
          />
        </div>
      </section>

      <section id="features" className="container flex flex-col my-40 mx-auto max-w-120 md:max-w-240 lg:max-w-680 overflow-x-hidden">
      <div className="mb-18 max-w-105 md:max-w-4xl text-start md:text-center w-full mx-auto text-5xl font-light text-gray-800 md:leading-[4rem] xl:leading-[4rem]">
          Features
        </div>
        <FeaturesSection/>
      </section>

      <section className="w-full px-8 pt-10 sm:px-0 sm:pt-24 md:px-0 md:pt-24 xl:px-0 xl:pt-24 overflow-x-hidden">
        <div className="flex h-full w-full flex-col items-center pb-[100px] pt-10">
          <div>
            <h1 className="mb-6 text-center text-3xl font-bold md:text-5xl">
              {dict.marketing.people_comment.title}
            </h1>
          </div>
          <div className="mb-6 text-lg text-neutral-500">
            {dict.marketing.people_comment.desc}
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
