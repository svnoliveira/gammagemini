import { Container } from "@/components/ui/fragments/Container";
import { HomeCallToaction } from "../HomeCallToAction";
import { WebsiteCarousel } from "../WebsiteCarousel";
import { VeteranSection } from "./VeteranSection";
import { AboutUsSection } from "./AboutUsSection";
import { ServicesSection } from "./ServicesSection";
import { AdvantageSection } from "./AdvantageSection";

export const HomeDetails = () => {
  return (
    <section>
      <Container component="div">
        <AboutUsSection />
        <ServicesSection />
        <AdvantageSection />
        <VeteranSection />
        <div className="flex flex-col items-center gap-5 pt-2 pb-9">
          <HomeCallToaction />
        </div>
      </Container>

      <WebsiteCarousel />
    </section>
  );
};
