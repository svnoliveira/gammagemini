import { MainHeading } from "../ui/typography/MainHeading";
import { HomeCallToaction } from "./HomeCallToAction";
import { WebsiteCarousel } from "./WebsiteCarousel";

export const HeroSection = () => {
  return (
    <section className="text-center h-[80dvh] py-7">
      <MainHeading>Tenha um Endereço na Internet!</MainHeading>
      <section className="flex flex-row justify-end gap-6 mt-10">
        <HomeCallToaction />
        <WebsiteCarousel />
      </section>
    </section>
  );
};
