import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "../card";

interface IPriceCardProps {
  title: string;
  description: string;
  content: string;
  price: number;
  host?: string;
}

export const PriceCard = ({
  title,
  description,
  content,
  price,
  host,
}: IPriceCardProps) => {
  return (
    <Card className="w-[350px] bg-background/30 backdrop-blur-lg">
      <CardHeader className="font-semibold text-lg">
        {title}
        <CardDescription className="text-xs">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 justify-between h-[180px]">
        <p className="text-sm text-pretty">
          {content}
        </p>

        {host && (
          <Link href="/price/hospedagem">
            <p className="text-sm text-pretty cursor-pointer hover:underline">{host}</p>
          </Link>
        )}
      </CardContent>
      <CardFooter className="text-lg font-extrabold italic justify-end">
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price)}
      </CardFooter>
    </Card>
  );
};
