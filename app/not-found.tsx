import Link from "next/link";
import Image from "next/image";
import { Button } from "./components/button";
import { ColourfulText } from "./components/colorful-text";
import * as Icons from "./components/icons";

export default function NotFound() {
  return (
    <>
      <Image 
        alt="bg2" 
        src="/magicpattern_god_rays.png" 
        className="w-screen h-screen z-[-2]" 
        fill={true} 
        objectFit="cover"
      />
      <Image 
        alt="bg" 
        src="/bg.svg" 
        className="w-screen h-screen z-[-10]" 
        fill={true} 
        objectFit="cover"
      />
      
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold text-foreground dark:text-white">
              4<ColourfulText className="inline" text="0" />4
            </h1>
          </div>
          
          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 dark:text-white">
              Oops! Page not found
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto dark:text-white">
              The page you're looking for seems to have vanished into the digital void. 
              Don't worry, even the best AI assistants sometimes take a wrong turn!
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/">
              <Button className="cta-button px-8 py-4 h-auto text-lg font-medium bg-blue-600 hover:bg-blue-500 text-white rounded-full gap-3">
                <Icons.ChevronLeft className="!h-5 !w-5" />
                <span>Go Home</span>
              </Button>
            </Link>
            
            <Link href="https://calendly.com/replyfanapp/30min" target="_blank">
              <Button 
                variant="outline" 
                className="px-8 py-4 h-auto text-lg font-medium border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full gap-3 transition-all duration-300"
              >
                <span>Get Help</span>
                <Icons.ArrowRight className="!h-5 !w-5" />
              </Button>
            </Link>
          </div>
          
          {/* Fun Message */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-border dark:text-white">
            <p className="text-card-foreground text-base md:text-lg">
              <ColourfulText className="font-semibold" text="Pro tip:" /> 
              {" "}While you're here, why not check out how our AI can help you connect with your fans 24/7?
            </p>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/40 rounded-full blur animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/40 rounded-full blur animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-500/40 rounded-full blur animate-pulse delay-500"></div>
        </div>
      </div>
    </>
  );
}
