import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ThinHeading } from "@/components/ui/typography/ThinHeading";

export const VeteranSection = () => {
  return (
    <section>
      <div className="flex flex-col items-center py-11">
        <ThinHeading>
          Já tem um endereço? faça um upgrade para um framework moderno
        </ThinHeading>
        <Image
          src="/details/wordpress-to-nextjs.png"
          height={200}
          width={600}
          alt="word press logo with an arrow upgrading to next.js logo"
          className="rounded-md my-11"
        />
        <Card className="max-w-4xl mx-auto">
          <CardHeader className="text-center font-nippo text-xl italic uppercase">
            Wordpress vs Next.JS
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-2 gap-0 list-disc">
              <li className="border-b border-b-foreground/80 font-nippo font-semibold list-none">
                Wordpress
              </li>
              <li className="border-b border-b-foreground/80 font-nippo font-semibold list-none">
                Next.js
              </li>
              <li className="pt-3 text-sm font-rmmono">
                Feito com templates e moldes prontos
              </li>
              <li className="pt-3 text-sm font-rmmono">
                Feito do zero, personalizado
              </li>
              <li className="text-sm font-rmmono">
                Restrições e mensalidades extras
              </li>
              <li className="text-sm font-rmmono">
                Todas possibilidades em aberto sem custo adicional
              </li>
              <li className="text-sm font-rmmono">
                Lentidão por carregar elementos desnecessários
              </li>
              <li className="text-sm font-rmmono">
                Máxima peformance carregando apenas o ideal e sistema de cache
              </li>
              <li className="text-sm font-rmmono">
                Hospedagem de baixa qualidade, sujeita a virus
              </li>
              <li className="text-sm font-rmmono">
                Hospedagem na cloud (nuvem) utilizando as tecnologias mais
                modernas
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
