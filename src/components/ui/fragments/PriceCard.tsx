import Link from "next/link";
import { CircleCheckBig } from "lucide-react"
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
  perks?: string[];
}

export const PriceCard = ({
  title,
  description,
  content,
  price,
  host,
  perks
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

        { perks && perks.length > 0 && (
          <ul>
            {perks.map((perk, index) => (
              <li key={index} className="text-sm text-pretty">
                <CircleCheckBig className="inline-block w-4 h-4 mr-2" />
                <span>{perk}</span>
                </li>
            ))}
          </ul>)}
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
