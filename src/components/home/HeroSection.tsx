import Link from "next/link";
import { MainHeading } from "../ui/typography/MainHeading";
import { HomeCallToaction } from "./HomeCallToAction";
import { WebsiteCarousel } from "./WebsiteCarousel";
import { ChevronsDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="text-center h-[80dvh] flex flex-col justify-evenly items-center gap-10">
      <section className="flex flex-col gap-6">
        <WebsiteCarousel />
        <MainHeading>Tenha um Endereço na Internet!</MainHeading>
        <HomeCallToaction />
        <Link href="/home-details" legacyBehavior passHref>
          <div className="flex flex-col gap-2 items-center justify-center cursor-pointer">
            <span className="text-sm hover:underline">Saiba Mais</span>
            <ChevronsDown size={18} />
          </div>
        </Link>
      </section>
    </section>
  );
};
