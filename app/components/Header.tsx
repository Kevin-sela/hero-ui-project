import React, { forwardRef } from "react";
import Link from "next/link";
import Image from "next/image";
import VercelDarkLogo from "../../assets/vercel-dark-logo.svg";
import VercelLightLogo from "../../assets/vercel-light-logo.svg";
import { cn } from "../../lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export type HeaderProps = React.HTMLAttributes<HTMLDivElement> & {};

export const Header = forwardRef<HTMLDivElement, HeaderProps>(
  ({ ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          "flex min-h-[64px] sticky top-0 w-full max-w-full justify-center z-[101] bg-background",
          props.className
        )}
      >
        <div className="flex px-6 justify-between items-center w-full max-w-[1400px]">
          <div className="flex gap-x-6">
            <div className="flex">
              <Image
                src={VercelDarkLogo}
                className="hidden dark:block"
                alt="Vercel dark logo"
                height={24}
              />
              <Image
                src={VercelLightLogo}
                className="dark:hidden"
                alt="Vercel light logo"
                height={24}
              />
            </div>
            <div className="w-full">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="font-normal text-muted-foreground">
                      Products
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <Link
                              href="/"
                              className="flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-gradient-to-b from-muted/50 to-muted focus:shadow-md"
                            >
                              <div className="mt-4 mb-2 text-lg font-medium">
                                Designs
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Beautifully designed components built with Radix
                                UI and Tailwind CSS.
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <ListItem href="/docs" title="Introduction">
                          Re-usable components built using Radix UI and Tailwind
                          CSS.
                        </ListItem>
                        <ListItem
                          href="/docs/installation"
                          title="Installation"
                        >
                          How to install dependencies and structure your app.
                        </ListItem>
                        <ListItem
                          href="/docs/primitives/typography"
                          title="Typography"
                        >
                          Styles for headings, paragraphs, lists...etc
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="font-normal text-muted-foreground">
                      Solutions
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        <ListItem
                          href="/docs/primitives/alert-dialog"
                          title="Alert Dialog"
                        >
                          A modal dialog that interrupts the user with important
                          content and expects a response.
                        </ListItem>
                        <ListItem
                          href="/docs/primitives/hover-card"
                          title="Hover Card"
                        >
                          For sighted users to preview content available behind
                          a link.
                        </ListItem>
                        <ListItem
                          href="/docs/primitives/progress"
                          title="Progress"
                        >
                          Displays an indicator showing the completion progress
                          of a task, typically displayed as a progress bar.
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="font-normal text-muted-foreground">
                      Resources
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        <ListItem
                          href="/docs/primitives/alert-dialog"
                          title="Alert Dialog"
                        >
                          A modal dialog that interrupts the user with important
                          content and expects a response.
                        </ListItem>
                        <ListItem
                          href="/docs/primitives/hover-card"
                          title="Hover Card"
                        >
                          For sighted users to preview content available behind
                          a link.
                        </ListItem>
                        <ListItem
                          href="/docs/primitives/progress"
                          title="Progress"
                        >
                          Displays an indicator showing the completion progress
                          of a task, typically displayed as a progress bar.
                        </ListItem>
                        <ListItem
                          href="/docs/primitives/scroll-area"
                          title="Scroll-area"
                        >
                          Visually or semantically separates content.
                        </ListItem>
                        <ListItem href="/docs/primitives/tabs" title="Tabs">
                          A set of layered sections of content—known as tab
                          panels—that are displayed one at a time.
                        </ListItem>
                        <ListItem
                          href="/docs/primitives/tooltip"
                          title="Tooltip"
                        >
                          A popup that displays information related to an
                          element when the element receives keyboard focus or
                          the mouse hovers over it.
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="font-normal text-muted-foreground">
                      Enterprise
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="font-normal text-muted-foreground">
                      Docs
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="font-normal text-muted-foreground">
                      Pricing
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-x-2">
            <Link href="/login" legacyBehavior>
              <a>
                <Button variant="outline">Log In</Button>
              </a>
            </Link>
            <Button variant="outline">Contact</Button>
            <Link href="/signup" legacyBehavior>
              <a>
                <Button variant="default">Sign Up</Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
);

Header.displayName = "Header";

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          {...props}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
