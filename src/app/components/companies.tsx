import { Title } from "@/components/ui/title";
import Image from "next/image";

interface Company {
  title: string;
  src: string;
}

export const companies: Company[] = [
  {
    title: "BMS Global",
    src: "/assets/workspaces/bms.svg",
  },
  {
    title: "OCB Bank",
    src: "/assets/workspaces/ocb.svg",
  },
  {
    title: "AllGrow Labo",
    src: "/assets/workspaces/allgrow.svg",
  },
  {
    title: "Cafe24",
    src: "/assets/workspaces/cafe24.svg",
  },
  {
    title: "GL",
    src: "/assets/workspaces/gl.svg",
  },
  {
    title: "Nam A Bank",
    src: "/assets/workspaces/nama.svg",
  },
  {
    title: "FPT",
    src: "/assets/workspaces/fpt.svg",
  },
];

export default function Companies() {
  return (
    <section>
      <div className="max-w-screen-xl px-8 mx-auto">
        <div className="space-y-16">
          <Title variant="h2">Trusted By</Title>
          <div className="flex flex-wrap items-center justify-center gap-x-20 gap-y-10">
            {companies.map((company) => (
              <div
                className="relative w-[180px] aspect-[2/1]"
                key={company.title}
              >
                <Image
                  src={company.src}
                  alt={company.title}
                  className="object-contain brightness-0 invert opacity-70"
                  fill
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
