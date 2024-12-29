import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Container } from "@/components/ui/fragments/Container";
import { ThinHeading } from "@/components/ui/typography/ThinHeading";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import Image from "next/image";

export const HomeDetails = () => {
  return (
    <section>
      <Container component="div">
        <div>
          <div className="flex flex-col items-center py-11">
            <ThinHeading>
              Na era da comunicação digital, não passe mais apenas seu telefone,
              tenha a praticidade de passar seu endereço em www!
            </ThinHeading>
            <ul className="flex flex-row gap-5 pb-4 pt-12">
              <li>
                <Card>
                  <CardContent className="flex flex-col items-center justify-between py-5 gap-3">
                    <Image
                      src="/details/numbers.png"
                      height={100}
                      width={300}
                      alt="Image of scrambled numbers"
                      className="rounded-md"
                    />
                    <ThumbsDown size={32} />
                  </CardContent>
                </Card>
              </li>
              <li>
                <Card>
                  <CardContent className="flex flex-col items-center justify-between py-5 gap-3">
                    <Image
                      src="/details/google.png"
                      height={100}
                      width={300}
                      alt="Image of a shiny url"
                      className="rounded-md"
                    />
                    <ThumbsUp size={32} />
                  </CardContent>
                </Card>
              </li>
            </ul>
          </div>
          <div>
            <Card className="max-w-2xl mx-auto">
              <CardHeader className="text-center text-xl italic">
                "Como entro em contato?"
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-0">
                  <li className="border-b border-b-foreground/80 font-semibold">
                    Telefone
                  </li>
                  <li className="border-b border-b-foreground/80 font-semibold">
                    Endereço web
                  </li>
                  <li className="pt-3">Difícil decorar</li>
                  <li className="pt-3">Fácil lembrar</li>
                  <li>Nenhuma informação</li>
                  <li>Diversas informações, inclusive o telefone</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center py-11">
            <ThinHeading>
              Já tem um endereço? faça um upgrade para um framework moderno
            </ThinHeading>
            <Image
              src="/details/wordpress-to-nextjs.png"
              height={200}
              width={600}
              alt="word press logo with an arrow upgrading to next.js logo"
              className="rounded-md my-11"
            />
            <Card className="max-w-4xl mx-auto">
              <CardHeader className="text-center text-xl italic">
                Comparação entre wordpress e hospedagem convencional
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-0 list-disc">
                  <li className="border-b border-b-foreground/80 font-semibold list-none">
                    Wordpress
                  </li>
                  <li className="border-b border-b-foreground/80 font-semibold list-none">
                    Next.js
                  </li>
                  <li className="pt-3 text-sm">Feito com templates e moldes prontos</li>
                  <li className="pt-3 text-sm">Feito do zero, personalizado</li>
                  <li className="text-sm">Restrições e mensalidades extras</li>
                  <li className="text-sm">Todas possibilidades em aberto sem custo adicional</li>
                  <li className="text-sm">Lentidão por carregar elementos desnecessários</li>
                  <li className="text-sm">
                    Máxima peformance carregando apenas o ideal e sistema de
                    cache
                  </li>
                  <li className="text-sm">Hospedagem de baixa qualidade, sujeita a virus</li>
                  <li className="text-sm">
                    Hospedagem na cloud (nuvem) utilizando as tecnologias mais
                    modernas
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 pt-2 pb-9">
        <Button>Mande um email marcando uma entrevista</Button>
        
        <Button>
          responda um rápido questionário e nós entraremos em contato com você
        </Button>
        </div>
      </Container>
    </section>
  );
};
