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

import HowItWorks from "../public/how_it_works.svg"

// import { WavyBackground } from "./components/wavy-background";

import type { Locale } from "./config/i18n-config";
import { VideoScroll } from "./components/video-scroll";

const people = [
  {
    id: 1,
    name: "tianzx",
    designation: "CEO at Nextify",
    image: "https://avatars.githubusercontent.com/u/10096899",
    link: "https://x.com/nextify2024",
  },
  {
    id: 2,
    name: "jackc3",
    designation: "Co-founder at Nextify",
    image: "https://avatars.githubusercontent.com/u/10334353",
    link: "https://x.com/BingxunYao",
  },
  {
    id: 3,
    name: "imesong",
    designation: "Contributor",
    image: "https://avatars.githubusercontent.com/u/3849293",
  },
  {
    id: 4,
    name: "ziveen",
    designation: "Contributor",
    image: "https://avatars.githubusercontent.com/u/22560152",
  },
  {
    id: 5,
    name: "Zenuncl",
    designation: "Independent Software Developer",
    image: "https://avatars.githubusercontent.com/u/3316062",
  },
  {
    id: 6,
    name: "Innei",
    designation: "Indie Developer",
    image: "https://avatars.githubusercontent.com/u/41265413",
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
      <section className="container mx-auto">
        <div className="grid grid-cols-1 gap-10 xl:grid-cols-2 mb-48">
          <div className="flex flex-col items-start h-full">
              <div className="flex flex-col pt-4 md:pt-36 lg:pt-36 xl:pt-36 mx-auto pl-4">
                <div className="mt-20">
                  <div className="mb-6 max-w-4xl text-left text-5xl font-semibold dark:text-zinc-100 md:text-5xl xl:text-6xl md:leading-[4rem] xl:leading-[4rem]">
                    {dict.marketing.title ||
                      "Ship your apps to the world easier with "}
                    <ColourfulText text="24/7" />
                  </div>
                </div>

                <div className="mt-1">
                  <span className="text-neutral-500 dark:text-neutral-400 text-xl lg:text-2xl">
                    {dict.marketing.sub_title ||
                      "Your complete All-in-One solution for building SaaS services."}
                  </span>
                </div>

                <div className="mb-4 mt-6 flex w-full flex-col justify-center space-y-4 sm:flex-row sm:justify-start sm:space-x-8 sm:space-y-0 z-10">
                  <Link
                    // TODO: Add waitlist link
                    href="https://"
                    target="_blank"
                  >
                    <Button className="bg-blue-600 hover:bg-blue-500 text-white rounded-full text-lg px-6 h-12 font-medium">
                      {dict.marketing.primary_cta}
                      <Icons.ArrowRight className="h-5 w-5" />
                    </Button>
                  </Link>

                  <Link
                    href="https://github.com/saasfly/saasfly"
                    target="_blank"
                  >
                    <Button className="text-blue-400 border border-blue-600 hover:border-blue-500 rounded-full text-lg px-6 h-12 font-medium">
                      {dict.marketing.secondary_cta}
                    </Button>
                  </Link>
                </div>

                <div className="flex sm:flex-row flex-col items-center justify-start mt-4 w-fit">
                  <div className="flex">
                    <AnimatedTooltip items={people} />
                  </div>
                  <div className="flex flex-col items-center justify-start mt-4 sm:ml-8 xl:mt-0">
                    <div className="w-[400px]">
                      {/* <span className="font-semibold">9 </span> */}
                      <span className="text-neutral-500 dark:text-neutral-400 text-xl">
                        {dict.marketing.contributors.contributors_desc}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

          </div>
          <BackgroundLines className="h-full">
          <div className="hidden h-full w-full xl:block bg-background">
            <div className="flex flex-col pt-18 ml-56">
              {/* TODO: Put Iphone mockup video here */}

              <Image
                src="/chat-mockup.svg"
                width={360}
                height={740}
                className="dark:hidden"
                alt=""
              />
              <Image
                src="/chat-mockup.svg"
                width={360}
                height={740}
                className="hidden dark:block"
                alt=""
              />
            </div>
          </div>
          </BackgroundLines>
        </div>
      </section>

      <section className="container mt-8 md:mt-[-180px] xl:mt-[-180px] mx-auto">
        <FeaturesGrid dict={dict.marketing.features_grid} />
      </section>

      <section id="how-it-works" className="container mt-20 mx-auto ">
        <div className="mb-6 max-w-4xl text-center mx-auto text-5xl font-semibold dark:text-zinc-100 md:text-5xl xl:text-6xl md:leading-[4rem] xl:leading-[4rem]">
          How it works
        </div>
        <div className="">
          {/* Light mode image: visible by default, hidden in dark mode */}
          <Image
            src="/how_it_works_light.svg"
            width={1000}
            height={400}
            alt="How it works"
            className="mx-auto block dark:hidden"
          />
          {/* Dark mode image: hidden by default, visible in dark mode */}
          <Image
            src="/how_it_works_dark.svg"
            width={1000}
            height={400}
            alt="How it works (dark)"
            className="mx-auto hidden dark:block"
          />
        </div>
      </section>

      <section className="container flex flex-col pt-44 mx-auto">
        <MarketingSection dict={dict.marketing.right_side} />
      </section>

      {/* <section className="container pt-8">
        <VideoScroll dict={dict.marketing.video} />
      </section> */}

      <section className="w-full px-8 pt-10 sm:px-0 sm:pt-24 md:px-0 md:pt-24 xl:px-0 xl:pt-24">
        <div className="flex h-full w-full flex-col items-center pb-[100px] pt-10">
          <div>
            <h1 className="mb-6 text-center text-3xl font-bold dark:text-zinc-100 md:text-5xl">
              {dict.marketing.people_comment.title}
            </h1>
          </div>
          <div className="mb-6 text-lg text-neutral-500 dark:text-neutral-400">
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
