import Link from "next/link";
import { MainHeading } from "../ui/typography/MainHeading";
import { HomeCallToaction } from "./HomeCallToAction";
import { ChevronsDown } from "lucide-react";
import { HomeDetails } from "./HomeDetails";
import { Paragraph } from "../ui/typography/Paragraph";

export const HeroSection = () => {
  return (
    <>
      <section className="flex flex-col justify-evenly gap-10 mt-[10dvh]">
        <MainHeading>
          {"soluções digitais confiáveis".toUpperCase()}
        </MainHeading>
        <MainHeading>
          {"eficientes para o mundo moderno".toUpperCase()}
        </MainHeading>
        <div className="flex flex-col gap-10 items-start">
          <Paragraph className="max-w-[450px]">
            Criamos websites e sistemas modernos, sem moldes, sem templates, sem
            WordPress. Tudo sob medida, com as melhores práticas do mercado para
            desempenho, segurança e escalabilidade.
          </Paragraph>
          <div className="hidden md:block">
            <HomeCallToaction />
          </div>
        </div>
        <Link href="/home-details" legacyBehavior passHref>
          <div className="flex flex-col gap-2 items-center justify-center cursor-pointer">
            <span className="text-sm hover:underline">Saiba Mais</span>
            <ChevronsDown size={18} />
          </div>
        </Link>
        {/* <WebsiteCarousel /> */}
      </section>
      <HomeDetails />
    </>
  );
};
