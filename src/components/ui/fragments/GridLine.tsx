import { number } from "zod";
import { Separator } from "../separator";
import { Paragraph } from "../typography/Paragraph";

interface IGridLineProps {
  children: React.ReactNode;
  number: string;
  title: string;
  className?: string;
}

export const GridLine = ({
  children,
  className,
  number,
  title,
}: IGridLineProps) => {
  return (
    <li className={className}>
      <div className="flex flex-col sm:grid sm:grid-cols-3 gap-2 pb-4 sm:pb-0">
        <span className="font-nippo font-bold">[{number}]</span>{" "}
        <span className="font-nippo font-light scale-y-125 text-2xl tracking-tight">
          {title}
        </span>
        <Paragraph>{children}</Paragraph>
      </div>
      <Separator />
    </li>
  );
};
