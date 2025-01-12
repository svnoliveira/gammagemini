
import { Container } from "@/components/ui/fragments/Container";
import Image from "next/image";

export default function ContactPage() {
  return (
    <Container component="main">
        <div className="h-[90dvh] w-full flex items-center justify-center">
      <Image src="/contato.jpg" alt="Hero" width={1361} height={487} />
        </div>
    </Container>
  );
}
