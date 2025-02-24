import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { ModeToggle } from "../ui/darkmode-button";

export const SubHeader = () => {
  return (
    <section className="flex flex-col gap-1 px-3 items-center justify-end relative pt-4 lg:pt-0">
      <span className="text-white font-bold">Preços e planos:</span>
      <NavigationMenu>
        <NavigationMenuList className="flex flex-col lg:flex-row gap-1">
          <NavigationMenuItem>
            <Link href="/price/websites" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <span className="text-white font-bold hover:text-foreground ">Websites</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/price/hospedagem" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <span className="text-white focus:bg-main font-bold hover:text-foreground ">Hospedagem</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/price/database" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <span className="text-white font-bold hover:text-foreground ">Bancos de Dados</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuList>
      </NavigationMenu>
      <Link href={"/contact"} className="absolute -bottom-12 lg:right-0 z-30 hover:underline">CONTATO</Link>
    </section>
  );
};
