import { Card, CardContent, CardHeader } from "@/components/ui/card"

export const HomeDetails = () => {
    return (
         <section>
            <div>
                <p>Na era da comunicação digital, não passe mais apenas seu telefone, 
                    tenha a praticidade de passar seu endereço em www!
                </p>
                <div>
                    <Card >
                      <CardHeader>
                        "Como entro em contato?"
                      </CardHeader>
                        <CardContent>
                            <ul>
                                <li>(11) 9999-9999</li><li>www.minhamarca.com</li>
                                <li>Difícil decorar</li><li>Fácil lembrar</li>
                                <li>Nenhuma informação</li><li>Diversas informações, inclusive o telefone</li>
                            </ul>
                        </CardContent>
                    </Card>
                    <p></p>
                </div>
            </div>
            <div>
                <p>Já tem um endereço? faça um upgrade para um framework moderno</p>
                <Card>
                    <CardHeader>
                        Comparação com wordpress e hospedagem convencional
                    </CardHeader>
                    <CardContent>
                        <ul>
                            <li>Wordpress</li><li>Gamma Gemini</li>
                            <li>Feito com templates e moldes prontos</li><li>Feito do zero, personalizado</li>
                            <li>restrições e mensalidades extras</li><li>Todas possibilidades em aberto sem custo adicional</li>
                            <li>Lentidão por carregar elementos desnecessários</li><li>Máxima peformance carregando apenas o ideal e sistema de cache</li>
                            <li>Hospedagem de baixa qualidade, sujeita a virus</li><li>Hospedagem na cloud (nuvem) utilizando as tecnologias mais modernas</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
            <div>Mande um email marcando uma entrevista</div>
            <div>ou</div>
            <div>responda um rápido questionário e nós entraremos em contato com você</div>
         </section>
    )
}