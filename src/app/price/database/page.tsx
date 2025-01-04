import { DatabaseHero } from "@/components/Database/Hero";
import { Container } from "@/components/ui/fragments/Container";

export default function DatabasePage() {
  return (
    <main
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/backgrounds/database.png')" }}
    >
      <div className="absolute inset-0 bg-background opacity-40 z-10"></div>
      <Container component="div" className="z-20 relative">
        <DatabaseHero />
      </Container>
    </main>
  );
}
