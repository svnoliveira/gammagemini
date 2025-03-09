import { ReactNode } from "react";

interface IParagraphProps {
  children: ReactNode;
  className?: string;
}

export const Paragraph = ({ children, className }: IParagraphProps) => {
  return (
    <p
      className={`${className} pl-[15px] pr-[15px] sm:pr-0 text-xl text-justify hyphens-auto font-rmmono font-medium`}
    >
      {children}
    </p>
  );
};
