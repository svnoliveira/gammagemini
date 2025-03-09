import { GridLine } from "@/components/ui/fragments/GridLine";
import { Separator } from "@/components/ui/separator";
import { HomeCallToaction } from "../HomeCallToAction";

export const ServicesSection = () => {
  return (
    <section>
      <div className="max-w-full lg:max-w-[70%] ml-auto">
        <p className="font-nippo font-light pl-[15px] sm:pl-0 text-1xl sm:text-2xl uppercase mb-3">
          // serviços que podem solucionar seus problemas
        </p>
        <Separator />
        <ul className="flex flex-col gap-4 mt-4">
          <GridLine number="001" title="Landing Page">
            Promova um produto, evento ou serviço com uma página única de baixo
            custo e grande retorno, com captação de leads opcional.
          </GridLine>
          <GridLine number="002" title="Website Institucional">
            Apresente sua marca, produtos e serviços, com informações detalhadas
            e formulários de contato.
          </GridLine>
          <GridLine number="003" title="E-commerce">
            Venda produtos ou serviços online, com integração de pagamento e
            cálculo de frete.
          </GridLine>
          <GridLine number="004" title="Banco de Dados">
            Armazene e gerencie informações de forma segura e eficiente, com
            área de administrador e relatórios com gráficos opcionais.
          </GridLine>
          <GridLine number="005" title="Sistema Web">
            Automatize processos, gerencie informações e integre sistemas com
            uma aplicação web personalizada.
          </GridLine>
          <GridLine number="006" title="Hospedagem">
            Garanta a segurança, velocidade e disponibilidade do seu website com
            hospedagem em cloud
          </GridLine>
        </ul>
      </div>
      <div className="py-12">
        <HomeCallToaction />
      </div>
    </section>
  );
};
