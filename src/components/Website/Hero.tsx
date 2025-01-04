
import { PriceCard } from "../ui/fragments/PriceCard";
import { MainHeading } from "../ui/typography/MainHeading";

export const WebsiteHero = () => {
  return (
    <section className="mb-10 min-h-[90dvh]">
      <div className="text-center text-white py-8 backdrop-blur-md rounded-lg mb-5">
        <MainHeading>Preços e Planos : Websites</MainHeading>
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        <PriceCard
          title="Landing page"
          description="Página para captação de leads, divulgação de produto ou serviço."
          content="Divulgue um produto, serviço ou promova um evento com uma página de alta velocidade com botões para call to action e indexação com nota alta de SEO o que garante a maior propagação nos mecanismos de pesquisa."
          price={600}
          host="hospedagem sugerida: plano cloud básico - 69.00 R$"
        />
        <PriceCard
          title="Portfolio"
          description="Página para divulgação de trabalhos realizados."
          content="Mostre ao mundo suas realizações, divulgue trabalhos anteriores e mostre aos seus clientes seu potencial!"
          price={600}
          host="hospedagem sugerida: plano cloud básico database - 99.00 R$"
        />
        <PriceCard
          title="Institucional"
          description="Página com informações gerais da sua marca."
          content="Use como cartão de entrada do seu negócio, página profissional com explicações e imagens dos seus produtos e serviços, ideal para que clientes procurando sua marca na internet tenham amplo acesso ás suas informações."
          price={2000}
          host="hospedagem sugerida: plano cloud básico database - 99.00 R$"
        />
        {/* <PriceCard
          title="Sistema web"
          description="Página ligada ao banco de dados com API para diversas funções."
          content="Sistema com área de administrador e gerenciamento de dados como exemplo: cadastro de produtos para inventário, cadastro e genrênciamento de funcionários, geração de estatísticas baseado em dados e muito mais, entre em contato e encontraremos uma solução para desenvolver o sistema que você precisa."
          price={1000}
          host="hospedagem sugerida: plano cloud básico database - 99.00 R$"
        /> */}
        <PriceCard
          title="E-Commerce"
          description="Página de vendas online, sua loja virtual."
          content="Venda seus produtos ou serviços na internet, com integração a meios de pagamento digital, área de administrador, carrinho de compras, histórico e área do cliente."
          price={3000}
          host="hospedagem sugerida: plano cloud intermediário - 169.00 R$"
        />
      </div>
    </section>
  );
};
