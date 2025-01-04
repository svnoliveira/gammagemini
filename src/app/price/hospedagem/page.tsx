import { HospedagemHero } from "@/components/Hospedagem/Hero";
import { Container } from "@/components/ui/fragments/Container";

export default function HospedagemPage() {
  return (
    <main
          className="relative bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/backgrounds/host.png')" }}
        >
          <div className="absolute inset-0 bg-background opacity-40 z-10">
          </div>
          <Container component="div" className="z-20 relative">
          <HospedagemHero />
            </Container>
        </main>
  );
};
