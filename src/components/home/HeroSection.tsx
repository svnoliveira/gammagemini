import { MainHeading } from "../ui/typography/MainHeading";
import { WebsiteCarousel } from "./WebsiteCarousel";

export const HeroSection = () => {
  return (
    <section className="text-center h-[80dvh]">
      <MainHeading>Tenha uma página sua!</MainHeading>
      <section className="flex flex-row justify-end gap-6 mt-10">
        <span>TEXTEXTEXTES</span>
        <WebsiteCarousel />
      </section>
    </section>
  );
};
