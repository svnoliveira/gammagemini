import { Paragraph } from "@/components/ui/typography/Paragraph";
import Image from "next/image";

export const AboutUsSection = () => {
  return (
    <section className="flex flex-col sm:flex-row gap-4 my-10 sm:my-32">
      <div className="w-full sm:w-[28%]">
        <Image
          src={"/img/girl-laptop.png"}
          alt="Girl with a laptop"
          height={300}
          width={300}
          className="rounded-lg w-full max-w-[300px] mx-auto sm:mx-0 aspect-square object-cover antialiased"
        />
      </div>
      <div className="w-[95%] mx-auto sm:mx-0 sm:w-[70%]">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-0">
            <div className="flex flex-row items-center gap-4 min-w-[200px]">
              <div className="rounded-full h-2 w-2 bg-secondary"></div>
              <div className="font-nippo text-sm ">Sobre nós</div>
            </div>
            <Paragraph className="sm:text-3xl">
              Ajudamos sua marca a prosperar no mundo virtual.
            </Paragraph>
          </div>
          <Paragraph className="sm:text-3xl">
            Através de espaços digitais imersivos e experiências personalizadas
            de desenvolvimento web em Next.js, facilitamos sua conexão com novos
            públicos, aumentamos o engajamento e mantemos sua relevância no
            cenário digital.
          </Paragraph>
        </div>
      </div>
    </section>
  );
};
