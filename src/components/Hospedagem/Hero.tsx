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
        />
        <PriceCard
          title="Cloud Intermediário"
          description="Hospedagem em cloud."
          content="Hospedagem com mais recursos e capacidade."
          price={99}
        />
        <PriceCard
          title="Cloud Premium"
          description="Hospedagem em cloud."
          content="Hospedagem com alta performance e recursos."
          price={169}
        />
        <PriceCard
          title="Cloud Básico Database"
          description="Hospedagem em cloud com banco de dados."
          content="Hospedagem inicial + API + Banco de dados."
          price={99}
        />
        <PriceCard
          title="Cloud Intermediário Database"
          description="Hospedagem em cloud com banco de dados."
          content="Hospedagem avançada + API + Banco de dados."
          price={149}
        />
        <PriceCard
          title="Cloud Premium Database"
          description="Hospedagem em cloud com banco de dados."
          content="Hospedagem alta performance + API + Banco de dados."
          price={199}
        />
        <PriceCard
          title="Cloud Dedicada"
          description="Hospedagem em cloud com banco de dados."
          content="Hospedagem exclusiva, máxima performance e capacidade de acessos simultâneos."
          price={349}
        />
      </div>
    </section>
  );
};
