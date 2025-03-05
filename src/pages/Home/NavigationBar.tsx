import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { User } from "lucide-react";

export const NavigationBar = (): JSX.Element => {
  const eventsMenu: { title: string; href: string; description: string }[] = [
    {
      title: "Past Events",
      href: "/#",
      description: "Library of our previous events.",
    },
    {
      title: "Download Certificate",
      href: "/#",
      description: "Download your certificate from previous events.",
    },
  ];
  return (
    <NavigationMenu>
      <NavigationMenuList className="grid gap-2 p-4 grid-flow-col">
        <NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/#">
            <NavigationMenuLink>Home</NavigationMenuLink>
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Events</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[500px] gap-2 p-4 grid-cols-2">
              {eventsMenu.map((eventMenuItem) => {
                return (
                  <NavigationMenuLink asChild key={eventMenuItem.title}>
                    <a
                      href={eventMenuItem.href}
                      className="group rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                    >
                      <div className="text-lg font-medium">
                        {eventMenuItem.title}
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        {eventMenuItem.description}
                      </p>
                    </a>
                  </NavigationMenuLink>
                );
              })}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button>
            <User /> Members
          </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
