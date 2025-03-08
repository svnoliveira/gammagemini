import Link from "next/link";
import { MainHeading } from "../ui/typography/MainHeading";
import { HomeCallToaction } from "./HomeCallToAction";
import { ChevronsDown } from "lucide-react";
import { HomeDetails } from "./HomeDetails";

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
        <div className="flex flex-col gap-10 items-start pl-[15px]">
          <div className="max-w-[450px] text-xl text-justify hyphens-auto font-rmmono font-medium">
            Criamos websites e sistemas modernos, sem moldes, sem templates, sem
            WordPress. Tudo sob medida, com as melhores práticas do mercado para
            desempenho, segurança e escalabilidade.
          </div>
          <HomeCallToaction />
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
