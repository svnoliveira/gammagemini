"use server"
import Image from "next/image";
import { Container } from "../ui/fragments/Container";
import { SubHeader } from "./SubHeader";

export const Header = async () => {
  return (
    <header>
      <div className="flex flex-row justify-start items-start p-2 bg-main">
      <div className="border-2 border-border">
        <Image
          src={"/gammagemini-logo.png"}
          height={60}
          width={60}
          alt="Gamma Genini logo"
        />
      </div>
      </div>
      <Container component="div">
      <SubHeader />
      </Container>
    </header>
  );
};
