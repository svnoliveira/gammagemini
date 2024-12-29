"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const websiteList = [
    "/carrousel/fashion-store.png",
    "/carrousel/elegancia.png",
    "/carrousel/elegancia-2.png",
    "/carrousel/pay.png",
    "/carrousel/saque.png",
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-[45dvw]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="flex items-center justify-center">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-video items-center justify-center p-6">
                  <Image
                    alt="Picture of an website"
                    width={1080}
                    height={960}
                    src={websiteList[index]}
                    className="object-cover rounded-md"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export const WebsiteCarousel = () => {
  return <CarouselPlugin />;
};
