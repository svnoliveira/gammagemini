import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "../ui/card"
import { MainHeading } from "../ui/typography/MainHeading"

export const HospedagemHero = () => {
    return (
        <section>
            <MainHeading>Preços e Planos : Hospedagem</MainHeading>
            <Card>
                <CardHeader>Cloud Básico</CardHeader>
                <CardDescription>Hospedagem em cloud.
                </CardDescription>
                    <CardContent>
                        <p>Hospedagem simples essencial para iniciar!</p>
                    </CardContent>
                <CardFooter>69R$ / mes</CardFooter>
            </Card>
            <Card>
                <CardHeader>Cloud Básico Database</CardHeader>
                <CardDescription>Hospedagem em cloud com banco de dados.
                </CardDescription>
                    <CardContent>
                        <p>Hospedagem inicial + API + Banco de dados.</p>
                    </CardContent>
                <CardFooter>99R$ / mes</CardFooter>
            </Card>
            <Card>
                <CardHeader>Cloud Intermediário Database</CardHeader>
                <CardDescription>Hospedagem em cloud com banco de dados.
                </CardDescription>
                    <CardContent>
                        <p>Hospedagem avançada + API + Banco de dados.</p>
                    </CardContent>
                <CardFooter>99R$ / mes</CardFooter>
            </Card>
            <Card>
                <CardHeader>Cloud Premium Database</CardHeader>
                <CardDescription>Hospedagem em cloud com banco de dados.
                </CardDescription>
                    <CardContent>
                        <p>Hospedagem alta performance + API + Banco de dados.</p>
                    </CardContent>
                <CardFooter>199R$ / mes</CardFooter>
            </Card>
            <Card>
                <CardHeader>Cloud Dedicada</CardHeader>
                <CardDescription>Hospedagem em cloud com banco de dados.
                </CardDescription>
                    <CardContent>
                        <p>Hospedagem exclusiva, máxima performance e capacidade de acessos simultâneos.</p>
                    </CardContent>
                <CardFooter>349R$ / mes</CardFooter>
            </Card>
        </section>
    )
}