import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/fragments/Container";
import Image from "next/image";

export default function ContactPage() {
  return (
    <Container component="main">
      <div className="min-h-[90dvh] w-full flex flex-col-reverse lg:flex-row">
        <div className="mt-10 flex flex-col items-center w-full lg:max-w-[50%] gap-8">
          <a href="http://wa.me/5534991436020">
            <Image
              src="/contato.jpg"
              alt="Hero"
              width={1361}
              height={487}
              className="lg:w-[50dvw] lg:h-[18dvw] object-cover"
            />
          </a>
          <a
            href="mailto:gammageminiweb@gmail.com"
            className="font-nippo text-2xl"
          >
            <Button className="sm:min-w-96 max-w-[95dvw]">
              Mande um email: gammageminiweb@gmail.com
            </Button>
          </a>
          <a href="http://wa.me/5534991436020" className="font-nippo text-2xl">
            <Button className="sm:min-w-96 max-w-[95dvw]">
              WhatsApp: (34) 9 9143-6020{" "}
              <Image
                src={"/icons/whatsapp.svg"}
                alt="whatsapp icon"
                height={30}
                width={30}
              />
            </Button>
          </a>
        </div>
        <div className="max-w-[28rem] mx-auto mt-10 gap-4 flex flex-col">
          <h1 className="text-3xl font-nippo font-bold text-center">
            Marque uma reunião
          </h1>
          <ContactForm />
        </div>
      </div>
    </Container>
  );
}
