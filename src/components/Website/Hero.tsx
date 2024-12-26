import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "../ui/card"
import { MainHeading } from "../ui/typography/MainHeading"

export const WebsiteHero = () => {
    return (
        <section>
            <MainHeading>Preços e Planos : Websites</MainHeading>
            <Card>
                <CardHeader>Landing page</CardHeader>
                <CardDescription>Página para captação de leads, divulgação de produto ou serviço.
                </CardDescription>
                    <CardContent>
                        <p>Divulgue um produto, serviço ou promova um evento com uma página de alta velocidade com botões para call to action e indexação com nota alta de SEO o que garante a maior propagação nos mecanismos de pesquisa.</p>
                        <p>hospedagem sugerida: plano cloud básico - 69.00 R$</p>
                    </CardContent>
                <CardFooter>600R$ a cada 5 dobras na página</CardFooter>
            </Card>
            <Card>
                <CardHeader>Portfolio</CardHeader>
                <CardDescription>Página para divulgação de trabalhos realizados.
                </CardDescription>
                    <CardContent>
                        <p>Mostre ao mundo suas realizações, divulgue trabalhos anteriores e mostre aos seus clientes seu potencial!</p>
                        <p>hospedagem sugerida: plano cloud básico database - 99.00 R$</p>
                    </CardContent>
                <CardFooter>600R$ (simples) 2000R$ (com área de administrador e banco de dados)</CardFooter>
            </Card>
            <Card>
                <CardHeader>Institucional</CardHeader>
                <CardDescription>Página com informações gerais da sua marca.
                </CardDescription>
                    <CardContent>
                        <p>Use como cartão de entrada do seu negócio, página profissional com explicações e imagens dos seus produtos e serviços, ideal para que clientes procurando sua marca na internet tenham amplo acesso ás suas informações.</p>
                        <p>hospedagem sugerida: plano cloud básico database - 99.00 R$</p>
                    </CardContent>
                <CardFooter>2000R$ (com área de administrador e banco de dados)</CardFooter>
            </Card>
            <Card>
                <CardHeader>Sistema web</CardHeader>
                <CardDescription>Página ligada ao banco de dados com API para diversas funções.
                </CardDescription>
                    <CardContent>
                        <p>Sistema com área de administrador e gerenciamento de dados como exemplo: cadastro de produtos para inventário, cadastro e genrênciamento de funcionários, geração de estatísticas baseado em dados e muito mais, entre em contato e encontraremos uma solução para desenvolver o sistema que você precisa.</p>
                        <p>hospedagem sugerida: plano cloud básico database - 99.00 R$</p>
                    </CardContent>
                <CardFooter>1000R$ (simples)</CardFooter>
            </Card>
            <Card>
                <CardHeader>E-Commerce</CardHeader>
                <CardDescription>Página de vendas online, sua loja virtual.
                </CardDescription>
                    <CardContent>
                        <p>Venda seus produtos ou serviços na internet, com integração a meios de pagamento digital, área de administrador, carrinho de compras, histórico e área do cliente.</p>
                        <p>hospedagem sugerida: plano cloud intermediário - 169.00 R$</p>
                    </CardContent>
                <CardFooter>3000R$</CardFooter>
            </Card>
        </section>
    )
}