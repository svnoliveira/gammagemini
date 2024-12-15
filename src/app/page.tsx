import { SubHeader } from "@/components/Header/SubHeader";
import { HeroSection } from "@/components/home/HeroSection";
import { Container } from "@/components/ui/fragments/Container";

export default function Home() {
  return (
    <Container component="main">
      <SubHeader />
      <HeroSection />
    </Container>
  );
}
