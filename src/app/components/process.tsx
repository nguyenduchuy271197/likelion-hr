import { Title } from "@/components/ui/title";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

const steps = [
  {
    title: "Request for consultation",
    description:
      "Please enter simple information and a manager will call you within 30 minutes.",
  },
  {
    title: "Request for consultation",
    description:
      "Please enter simple information and a manager will call you within 30 minutes.",
  },
  {
    title: "Request for consultation",
    description:
      "Please enter simple information and a manager will call you within 30 minutes.",
  },
  {
    title: "Request for consultation",
    description:
      "Please enter simple information and a manager will call you within 30 minutes.",
  },
  {
    title: "Request for consultation",
    description:
      "Please enter simple information and a manager will call you within 30 minutes.",
  },
  {
    title: "Request for consultation",
    description:
      "Please enter simple information and a manager will call you within 30 minutes.",
  },
  {
    title: "Request for consultation",
    description:
      "Please enter simple information and a manager will call you within 30 minutes.",
  },
  {
    title: "Request for consultation",
    description:
      "Please enter simple information and a manager will call you within 30 minutes.",
  },
  {
    title: "Request for consultation",
    description:
      "Please enter simple information and a manager will call you within 30 minutes.",
  },
];

export default function Process() {
  return (
    <section id="process">
      <div className="container">
        <div className="space-y-16">
          <Title variant="h2">Our Process</Title>
          <div className="grid lg:grid-cols-[1fr_350px] gap-8">
            <ul className="flex flex-col gap-4">
              {steps.map((step, index) => (
                <li
                  key={index}
                  className="p-8 flex-col flex sm:flex-row sm:items-center sm:gap-8 border-2 rounded-lg bg-muted/50 gap-2"
                >
                  <div className="text-red-300/40 text-8xl shrink-0 font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                    <p className="text-foreground/70 text-lg">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="hidden lg:block w-full h-full relative rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1428366890462-dd4baecf492b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2t5c2NyYXBlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                alt="Process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
