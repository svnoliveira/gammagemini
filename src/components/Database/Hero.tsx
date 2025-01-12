
import { PriceCard } from "../ui/fragments/PriceCard";
import { MainHeading } from "../ui/typography/MainHeading";

export const DatabaseHero = () => {
  return (
    <section className="mb-10 min-h-[90dvh]">
      <div className="text-center text-white py-8 backdrop-blur-md rounded-lg mb-5">
        <MainHeading>Preços e Planos : Bancos de Dados</MainHeading>
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        <PriceCard 
            title="Módulo Básico"
            description="Um banco de dados simples para armazenar informações de um site ou aplicativo"
            content="API com funcções de cadastro de usuários, login, autenticação e área de administrador."
            price={500}
            host="hospedagem sugerida: plano cloud básico database - 139.00 R$"
        />
        <PriceCard 
            title="Módulo New Model"
            description="Módulo adicional para ser adicionado ao básico."
            content="Novo módulo com criação, listagem, edição e remoção de uma nova modeal (exemplo: produtos, agendamentos, etc)"
            price={500}
            host="hospedagem sugerida: plano cloud básico database - 139.00 R$"
        />
        <PriceCard 
            title="Módulo Custom"
            description="Módulo adicional para ser adicionado ao básico."
            content="Novo módulo com função adicional sob medida, (exemplo: salvamento de arquivos, geração de PDF, analise de dados, etc)"
            price={500}
            host="hospedagem sugerida: plano cloud básico database - 139.00 R$"
            />
        <PriceCard 
            title="Módulo E-commerce"
            description="Módulo adicional para ser adicionado ao básico."
            content="Módulo responsável por gerenciar pedidos e interagir com meio de pagamento digital, salvando históricos e pedidos feitos em e-commerce."
            price={1000}
            host="hospedagem sugerida: plano cloud premium database - 349.00 R$"
        />
      </div>
    </section>
  );
};
