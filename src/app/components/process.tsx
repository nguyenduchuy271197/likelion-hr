import { Title } from "@/components/ui/title";

interface Step {
  title: string;
  description: string;
  src: string;
}

const steps: Step[] = [
  {
    title: "I work for the ‘company’.",
    description:
      "To be precise, we work for the company's people = talent, and the company's competitiveness = growth. This is the purpose of implementation pursued by IMHR and the standard for judging value.",
    src: "",
  },
  {
    title: "I work for the ‘company’.",
    description:
      "To be precise, we work for the company's people = talent, and the company's competitiveness = growth. This is the purpose of implementation pursued by IMHR and the standard for judging value.",
    src: "",
  },
  {
    title: "I work for the ‘company’.",
    description:
      "To be precise, we work for the company's people = talent, and the company's competitiveness = growth. This is the purpose of implementation pursued by IMHR and the standard for judging value.",
    src: "",
  },
  {
    title: "I work for the ‘company’.",
    description:
      "To be precise, we work for the company's people = talent, and the company's competitiveness = growth. This is the purpose of implementation pursued by IMHR and the standard for judging value.",
    src: "",
  },
];

export default function Process() {
  return (
    <section className="bg-cover bg-center">
      <div className="container">
        <div className="space-y-16">
          <Title variant="h2">What we do</Title>
          <div className="">
            <ul className="flex flex-col gap-8">
              {steps.map((step, index) => (
                <li
                  key={index}
                  className="p-8 flex-col flex sm:flex-row sm:items-center sm:gap-8 border-2 rounded-lg bg-muted/50 gap-2 max-w-4xl"
                  style={{
                    marginLeft: `${index * 4}rem`,
                  }}
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
          </div>
        </div>
      </div>
    </section>
  );
}
