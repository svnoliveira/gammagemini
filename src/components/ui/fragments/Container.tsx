import { ReactNode } from "react";

interface IContainerProps {
    component: "main" | "header" | "footer" | "div";
    className?: string;
    children: ReactNode;
}

export const Container = ({component, className, children}:IContainerProps) => {
    if (component === "main") return <main className={`max-w-[1700px] mx-auto ${className}`}>{children}</main>;
    if (component === "header") return <header className={`max-w-[1700px] mx-auto ${className}`}>{children}</header>;
    if (component === "footer") return <footer className={`max-w-[1700px] mx-auto ${className}`}>{children}</footer>;
    return <div className={`max-w-[1700px] mx-auto ${className}`}>{children}</div>;
}