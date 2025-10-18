import { cn } from "./lib/utils/cn";
import Marquee from "./marquee";
import Image from "next/image";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Alex",
    username: "@alex",
    body: "This tool has revolutionized the way I make content.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Shamoki",
    username: "@shamoki",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jason",
    username: "@wangwei",
    body: "I feel like I have a connection my audience.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Kristina",
    username: "@kios",
    body: "My followers said it feels like they’re talking directly to me.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Sky",
    username: "@samtimkun",
    body: "The dashboard shows me exactly what topics my audience craves next",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-36 xs:w-48 sm:w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image 
          className="rounded-full w-8 h-8 sm:w-8 sm:h-8" 
          alt={`${name}'s avatar`} 
          src={img} 
          width={32} 
          height={32}
          unoptimized
        />
        <div className="flex flex-col">
          <figcaption className="font-medium text-black">
            {name}
          </figcaption>
          <p className="text-sm font-medium text-gray-700">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-base md:text-lg">{body}</blockquote>
    </figure>
  );
};

const Comments = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-4 sm:py-20 md:py-20 xl:py-20">
      <Marquee className="[--duration:12s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:12s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};

export { Comments };
