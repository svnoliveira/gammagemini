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
import Link from "next/link";

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
    <section>
      <h2 className="font-nippo font-bold text-4xl text-center">
        Exemplo de websites desenvolvidos
      </h2>
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-[45dvw] max-h-[65dvh] aspect-w-16 aspect-h-9 ml-auto mr-auto"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="flex items-center justify-center"
            >
              <Link href="http://svnoliveira.com/projects" passHref>
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
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}

export const WebsiteCarousel = () => {
  return <CarouselPlugin />;
};
