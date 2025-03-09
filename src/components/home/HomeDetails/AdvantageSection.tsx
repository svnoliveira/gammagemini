import { HoverableLi } from "@/components/ui/fragments/HoverableLi";
import { Paragraph } from "@/components/ui/typography/Paragraph";
import { CircleCheckBig } from "lucide-react";
import Image from "next/image";

export const AdvantageSection = () => {
  return (
    <section className="bg-secondary py-10 relative left-1/2 -translate-x-1/2 w-screen  text-secondary-foreground flex flex-row">
      <div className="mr-auto ml-6">
        <div className="flex flex-row items-center gap-4 min-w-[200px] mx-auto">
          <div className="rounded-full h-2 w-2 bg-secondary-foreground"></div>
          <div className="font-nippo text-sm "> Diferencial</div>
        </div>
        <Paragraph className="max-w-[500px] mx-auto">
          Gamma gemini oferece uma experiência única e personalizada para cada
          cliente.
        </Paragraph>
        <Paragraph className="max-w-[500px] mx-auto">
          Confira abaixo alguns dos nossos diferenciais:
        </Paragraph>
        <div className="flex items-center justify-center w-full min-w-[50dvw]">
          <ul className="flex flex-col gap-4 mt-4">
            <HoverableLi>Hospedagem em Cloud</HoverableLi>

            <HoverableLi>Responsividade Mobile Inclusa</HoverableLi>

            <HoverableLi>Relatórios de performance do website</HoverableLi>

            <HoverableLi>Suporte 24/7</HoverableLi>

            <HoverableLi>Ultra velocidade</HoverableLi>

            <HoverableLi>
              Melhores práticas para estabilidade e segurança
            </HoverableLi>

            <HoverableLi>Framework moderno (Next.JS)</HoverableLi>

            <HoverableLi>CDN e Page speed Opcional</HoverableLi>
            <HoverableLi>
              Código limpo, sem templates e moldes desnecessários
            </HoverableLi>
          </ul>
        </div>
      </div>
      <div className="w-[50dvw] hidden lg:flex">
        <Image
          src={"/img/girl-designer.png"}
          height={7900}
          width={5300}
          alt="Gril with a computer"
          className="w-full aspect-video mx-auto object-cover my-auto"
        />
      </div>
    </section>
  );
};
