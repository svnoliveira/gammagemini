"use server"
import Image from "next/image";
import { Container } from "../ui/fragments/Container";

export const Header = async () => {
  return (
    <header className="bg-main">
      <Container component="div" className="flex flex-row justify-start items-start p-2">
      <div className="border-2 border-border">
        <Image
          src={"/gammagemini.png"}
          height={60}
          width={60}
          alt="Gamma Genini logo"
        />
      </div>
    </Container>
    </header>
  );
};
