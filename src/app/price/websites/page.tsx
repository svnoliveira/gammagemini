import { Container } from "@/components/ui/fragments/Container";
import { WebsiteHero } from "@/components/Website/Hero";


export default function WebsitesPage() {
  return (
    <main
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/backgrounds/blur.png')" }}
    >
      <div className="absolute inset-0 bg-background opacity-10 z-10">
      </div>
      <Container component="div" className="z-20 relative">
          <WebsiteHero />
        </Container>
    </main>
  );
}
