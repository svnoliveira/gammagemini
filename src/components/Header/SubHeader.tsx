
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { HomeCallToaction } from "../home/HomeCallToAction";

export const SubHeader = () => {
  return (
    <section className="flex flex-col gap-1 px-3 items-center justify-end relative pt-4 lg:pt-0">
      <NavigationMenu>
        <NavigationMenuList className="flex flex-col lg:flex-row gap-1 m-1">
          {/* <NavigationMenuItem>
            <Link href="/price/websites" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <span className="text-white font-rmmono font-bold hover:text-foreground ">Websites</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/price/hospedagem" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <span className="text-white focus:bg-main font-rmmono font-bold hover:text-foreground ">Hospedagem</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem> */}
          <NavigationMenuItem>
            <HomeCallToaction />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </section>
  );
};
