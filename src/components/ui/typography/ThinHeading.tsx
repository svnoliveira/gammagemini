import { ReactNode } from "react";

export const ThinHeading = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className="scroll-m-20 text-xl font-nippo font-extrabold tracking-tight lg:text-2xl text-center sm:text-left">
      {children}
    </h1>
  );
};
