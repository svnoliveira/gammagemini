import { CircleCheckBig } from "lucide-react";

export const HoverableLi = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="text-lg text-pretty font-nippo">
      <CircleCheckBig className="inline-block w-4 h-4 mr-2" />
      <button className="relative overflow-hidden font-semibold text-secondary-foreground transition-colors duration-300 ease-in-out group">
        <span className="absolute inset-0 w-0 bg-secondary-foreground transition-all duration-300 ease-in-out group-hover:w-full"></span>
        <span className="relative group-hover:text-primary transition-colors duration-300">
          {children}
        </span>
      </button>
    </li>
  );
};
