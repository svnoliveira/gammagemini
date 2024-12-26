import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "../ui/card"
import { MainHeading } from "../ui/typography/MainHeading"

export const DatabaseHero = () => {
    return (
        <section>
            <MainHeading>Preços e Planos : Bancos de Dados</MainHeading>
            <Card>
                <CardHeader>Módulo Básico</CardHeader>
                <CardDescription>Um banco de dados simples para armazenar informações de um site ou aplicativo</CardDescription>
                    <CardContent>
                        <p>API com funcções de cadastro de usuários, login, autenticação e área de administrador.</p>
                        <p>hospedagem sugerida: plano cloud básico database - 99.00 R$</p>
                    </CardContent>
                <CardFooter>500R$</CardFooter>
            </Card>
            <Card>
                <CardHeader>Módulo New Model</CardHeader>
                <CardDescription>Módulo adicional para ser adicionado ao básico.</CardDescription>
                    <CardContent>
                        <p>Novo módulo com criação, listagem, edição e remoção de uma nova modeal (exemplo: produtos, agendamentos, etc)</p>
                    </CardContent>
                <CardFooter>500R$</CardFooter>
            </Card>
            <Card>
                <CardHeader>Módulo Custom</CardHeader>
                <CardDescription>Módulo adicional para ser adicionado ao básico.</CardDescription>
                    <CardContent>
                        <p>Novo módulo com função adicional sob medida, (exemplo: salvamento de arquivos, geração de PDF, analise de dados, etc)</p>
                    </CardContent>
                <CardFooter>500R$ (variável de acordo com a complexidade)</CardFooter>
            </Card>
            <Card>
                <CardHeader>Módulo E-commerce</CardHeader>
                <CardDescription>Módulo adicional para ser adicionado ao básico.</CardDescription>
                    <CardContent>
                        <p>Módulo responsável por gerenciar pedidos e interagir com meio de pagamento digital, salvando históricos e pedidos feitos em e-commerce.</p>
                    </CardContent>
                <CardFooter>1000R$</CardFooter>
            </Card>
        </section>
    )
}