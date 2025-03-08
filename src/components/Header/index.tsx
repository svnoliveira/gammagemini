"use server";
import Image from "next/image";
import { Container } from "../ui/fragments/Container";
import { SubHeader } from "./SubHeader";
import Link from "next/link";

export const Header = async () => {
  return (
    <header>
      <div className="flex justify-start items-start p-2 bg-main">
        <Container
          component="div"
          className="flex flex-col lg:flex-row items-center w-full justify-between"
        >
          <Link href="/" legacyBehavior passHref>
            <div className="flex flex-row items-center gap-3 cursor-pointer">
              <Image
                src={"/gammagemini-logo.png"}
                height={20}
                width={20}
                alt="Gamma Genini logo"
              />
              <h1 className="text-white font-nippo font-semibold text-2xl">
                Gamma Gemini
              </h1>
            </div>
          </Link>
          <SubHeader />
        </Container>
      </div>
    </header>
  );
};
