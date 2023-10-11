import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Title } from "@/components/ui/title";
import Image from "next/image";

const elementors = [
  {
    label: "Employees",
    value: "27,000+",
  },
  {
    label: "Countries & Territories",
    value: "28",
  },
  {
    label: "Data Scientists & Data Engineer",
    value: "1000+",
  },
  {
    label: "Branches & Representative Offices",
    value: "71",
  },
];

export default function Elementors() {
  return (
    <section
      className="dark:bg-[url('/background/elementor-bg.avif')] bg-cover"
      id="about"
    >
      <div className="container">
        <div className="flex flex-col gap-16 lg:gap-8 lg:flex-row lg:items-center lg:[&>div]:flex-1 py-28">
          <div className="space-y-12 text-center lg:text-left">
            <Title
              variant="h2"
              className="mx-auto lg:text-left sm:max-w-lg lg:mx-0"
            >
              Advance your journey with expertise around the{" "}
              <span className="text-gradient">world</span>
            </Title>
            <div className="grid gap-12 sm:grid-cols-2 sm:gap-8">
              {elementors.map((elementor) => (
                <div key={elementor.label} className="space-y-2">
                  <h4 className="text-4xl font-bold sm:text-5xl">
                    {elementor.value}
                  </h4>
                  <p className="text-xl text-foreground/80">
                    {elementor.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <AspectRatio
              ratio={16 / 9}
              className="w-full max-w-2xl mx-auto overflow-hidden rounded-lg lg:max-w-none"
            >
              <Image
                src="https://images.unsplash.com/photo-1664575599618-8f6bd76fc670?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80"
                alt="Advance your journey with expertise around the world"
                fill
                className="object-cover"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
}
