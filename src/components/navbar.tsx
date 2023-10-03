import Link from "next/link";
import { Button } from "./ui/button";
import Logo from "./logo";

const routes = [
  {
    id: "solutions",
    path: "#solutions",
    label: "Our Solutions",
  },
  {
    id: "about",
    path: "#about",
    label: "About Us",
  },
  {
    id: "process",
    path: "#process",
    label: "Our Process",
  },
];

export default function Navbar() {
  return (
    <header className="absolute w-full">
      <div className="container">
        <div className="h-[var(--navbar-height)] flex items-center justify-between">
          <Logo />
          <div className="flex items-center">
            <div className="hidden md:block">
              <ul className="flex items-center gap-8">
                {routes.map((route) => (
                  <li
                    key={route.id}
                    className="text-foreground/80 hover:text-foreground"
                  >
                    <Link href={route.path}>{route.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center ml-8 gap-4">
              <Button className="hidden sm:flex">Tham gia ngay</Button>
              {/* <ModeToggle className="hidden sm:flex" /> */}
              {/* <Button variant="ghost" size="icon" className="md:hidden">
                <AlignRight className="w-6 h-6" />
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
