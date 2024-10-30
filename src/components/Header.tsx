import { Link } from "react-router-dom";
import { ModeToggle } from "./ThemeToggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Separator } from "./ui/separator";
import React from "react";
import { cn } from "@/lib/utils";
import { services } from "@/models/services";

const Header = () => {
  return (
    <header className="flex place-items-center w-full justify-between sticky top-0 z-10 h-14 px-2 py-1 bg-green-900/15 shadow-md border-b border-green-900/50 backdrop-blur-md">
      <div className="flex place-items-center w-full">
        <div className="flex place-items-center px-2 w-fit">
          <img
            src="/src/assets/logo-without-text.png"
            alt="Logo"
            className="h-10 w-10 drop-shadow-[0_0_0.5em_#14512c] dark:drop-shadow-[0_0_0.5em_#5caf7d]"
          />
          <h1 className="ml-2 font-semibold hidden md:flex">
            EJ Joinery Services Ltd
          </h1>
        </div>

        <Separator
          orientation="vertical"
          className="bg-gray-900 dark:bg-white h-8"
        />

        <div className="flex-grow ml-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/about">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {services.map((service) => (
                      <ListItem
                        image={service.image}
                        key={service.href}
                        title={service.title}
                        href={service.href}
                      >
                        {service.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/contact">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      <div>
        <ModeToggle />
      </div>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { image: string }
>(({ className, title, image, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex place-items-center w-full">
            <div className="w-1/4 place-items-center">
              <img src={image} alt={title} className="w-10 h-12" />
            </div>
            <div className="flex flex-col ml-2 w-3/4">
              <div className="text-sm font-medium leading-none">{title}</div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
              </p>
            </div>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;
