import { ReactNode } from "react";

export const MainHeading = ({children}:{children: ReactNode}) => {
    return(
        <h1 className="scroll-m-20 font-nippo font-medium text-[clamp(1rem,5.05vw,96px)] w-full -tracking-tighter whitespace-nowrap scale-y-150">
            {children}
        </h1>
    )
}