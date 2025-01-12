import { PriceCard } from "../ui/fragments/PriceCard";
import { MainHeading } from "../ui/typography/MainHeading";

export const HospedagemHero = () => {
  return (
    <section className="mb-10 min-h-[90dvh]">
      <div className="text-center text-white py-8 backdrop-blur-md rounded-lg mb-5">
        <MainHeading>Preços e Planos : Hospedagem</MainHeading>
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        <PriceCard
          title="Cloud Básico"
          description="Hospedagem em cloud."
          content="Hospedagem simples essencial para iniciar!"
          price={69}
          perks={["1GB RAM", "4GB armazenamento", "30 usuários simultâneos"]}
        />
        <PriceCard
          title="Cloud Intermediário"
          description="Hospedagem em cloud."
          content="Hospedagem com mais recursos e capacidade."
          price={99}
          perks={["2GB RAM", "10GB armazenamento", "100 usuários simultâneos"]}
        />
        <PriceCard
          title="Cloud Premium"
          description="Hospedagem em cloud."
          content="Hospedagem com alta performance e recursos."
          price={169}
          perks={["4GB RAM", "20GB armazenamento", "300 usuários simultâneos"]}
        />
        <PriceCard
          title="Cloud Básico Database"
          description="Hospedagem em cloud com banco de dados."
          content="Hospedagem inicial + API + Banco de dados."
          price={139}
          perks={["1GB RAM", "4GB armazenamento", "30 usuários simultâneos", "Banco de dados PostgreSQL"]}
        />
        <PriceCard
          title="Cloud Intermediário Database"
          description="Hospedagem em cloud com banco de dados."
          content="Hospedagem avançada + API + Banco de dados."
          price={199}
          perks={["2GB RAM", "10GB armazenamento", "100 usuários simultâneos", "Banco de dados PostgreSQL"]}
        />
        <PriceCard
          title="Cloud Premium Database"
          description="Hospedagem em cloud com banco de dados."
          content="Hospedagem alta performance + API + Banco de dados."
          price={349}
          perks={["4GB RAM", "20GB armazenamento", "300 usuários simultâneos", "Banco de dados PostgreSQL", "Manutenção 2hr semanais sem custo adicional"]}
        />
      </div>
    </section>
  );
};
