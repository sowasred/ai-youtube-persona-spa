import Link from "next/link";
import Image from "next/image";
import { getDictionary } from "./lib/get-dictionary";

import { Comments } from "./components/comments";
import { FeaturesGrid } from "./components/features-grid";
import { MarketingSection } from "./components/marketing-section";

import { AnimatedTooltip } from "./components/animated-tooltip";
import { BackgroundLines } from "./components/background-lines";
import { Button } from "./components/button";
import { ColourfulText } from "./components/colorful-text";
import * as Icons from "./components/icons";
import { SocialIcon } from "react-social-icons";

import type { Locale } from "./config/i18n-config";

const people = [
  {
    id: 1,
    name: "Andrew Huberman",
    designation: "Neuroscientist",
    image: "/andrew_huberman_pic.jpg",
    link: "https://x.com/nextify2024",
  },
  {
    id: 2,
    name: "Casey Zander",
    designation: "Dating Coach Youtuber",
    image: "/casey_zander_pic.jpg",
    link: "https://x.com/BingxunYao",
  },
  {
    id: 3,
    name: "Daniel Brada",
    designation: "Self help influencer",
    image: "/daniel_brada_pic.webp",
  },
  {
    id: 4,
    name: "Gary Vaynerchuk",
    designation: "Entreprenuer",
    image: "/gary_vaynerchuk_pic.jpg",
  },
  {
    id: 5,
    name: "Jordan B. Peterson",
    designation: "Psychoanalyst",
    image: "/jordan_peterson_pic.jpg",
  },
  {
    id: 6,
    name: "Healthy Gamer GG",
    designation: "Psychologist",
    image: "/healthygamergg_pic.jpg",
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
    <Image alt="bg2" src={"/magicpattern-god-rays.png"} className="w-screen h-screen z-[-2]" fill={true} objectFit="cover"></Image>
    <Image alt="bg" src={"/bg.svg"} className="w-screen h-screen z-[-10]" fill={true} objectFit="cover"></Image>
      <section className="container mx-auto">
        <div className="grid grid-cols-1 gap-10 xl:grid-cols-2 h-screen mb-22">
          <div className="flex flex-col items-start h-full">
            <div className="flex flex-col pt-4 md:pt-36 lg:pt-36 xl:pt-36 pl-2">
              {/* Title */}
              <div className="mt-20 mb-4">
                <div className="max-w-4xl text-left text-5xl font-semibold md:text-5xl xl:text-6xl md:leading-[4rem] xl:leading-[4rem]">
                  {dict.marketing.title ||
                    "Ship your apps to the world easier with "}
                  <ColourfulText className="" text="24/7" />
                </div>
              </div>
              {/* Subtitle */}
              <div>
                <span className="text-neutral-500 text-xl lg:text-2xl">
                <ColourfulText className="font-medium" text="Personal chatbot"/> powered by your voice, <ColourfulText className="font-medium" text="at your fans’ fingertips"/>
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

                <Link
                  href="https://calendly.com/replyfanapp/30min"
                  target="_blank"
                >
                  <Button className="text-blue-500 border border-blue-600 bg-white rounded-full text-lg pl-8 pr-10 h-12 font-medium">
                    {dict.marketing.secondary_cta}
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
              <div className="flex flex-col items-center justify-start mt-32 w-fit">
              <div className="flex flex-col items-center justify-start mb-4">
                  <div className="w-[440px]">
                    <span className="text-neutral-500 text-2xl">
                      {dict.marketing.contributors.contributors_desc}
                    </span>
                  </div>
                </div>
                <div className="w-fit flex ml-[-100px]">
                  <AnimatedTooltip items={people} />
                </div>

              </div>
            </div>
          </div>
          {/* Image */}
          <div className="hidden h-full w-full lg:block z-10">
            <div className="flex flex-col mt-[-160px] mx-auto items-center ml-12">
              <Image
                src="/chat-mockup.svg"
                width={460}
                height={900}
                alt=""
                className="hidden xl:block lg:w-max-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-8 md:mt-[-180px] xl:mt-[-180px] mx-auto">
        <FeaturesGrid dict={dict.marketing.features_grid} />
      </section>

      <section id="how-it-works" className="container my-40 mx-auto ">
        <div className="mb-12 max-w-4xl text-center mx-auto text-3xl font-semibold md:text-5xl md:leading-[4rem] xl:leading-[4rem]">
          How it works
        </div>
        <div className="mt-20">
          <Image
            src="/how_it_works.svg"
            width={1400}
            height={800}
            alt="How it works"
            className="mx-auto block"
          />
        </div>
      </section>

      <section id="features" className="container flex flex-col my-40 mx-auto">
      <div className="mb-18 max-w-4xl text-center mx-auto text-3xl font-semibold md:text-5xl md:leading-[4rem] xl:leading-[4rem]">
          Features
        </div>
        <MarketingSection dict={dict.marketing.right_side} />
      </section>

      <section className="w-full px-8 pt-10 sm:px-0 sm:pt-24 md:px-0 md:pt-24 xl:px-0 xl:pt-24">
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
    </>
  );
}
