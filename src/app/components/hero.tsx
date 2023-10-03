import { Button } from "@/components/ui/button";
import { Title } from "@/components/ui/title";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="dark:bg-[url('/background/hero-bg.avif')] bg-cover">
      <div className="container">
        <div className="h-[calc(100vh-var(--navbar-height))] flex items-center justify-center">
          <div>
            <div className="mx-auto max-w-3xl text-center space-y-8">
              <div>
                <Button variant="outline" size="sm">
                  Get your ticket
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
              <div className="space-y-8">
                <Title variant="h1">
                  Say goodbye to slow, clunky <br />
                  <span className="text-gradient">containers and VMs</span>
                </Title>
                <p className="text-foreground/80 text-xl">
                  OrbStack is the fast, light, and easy way to run Docker
                  containers and Linux. Develop at lightspeed with our Docker
                  Desktop alternative.
                </p>
              </div>
              <div>
                <Button size="lg">Tham gia ngay</Button>
              </div>
            </div>
            <div className="flex justify-center mt-20">
              <Link href="#solutions">
                <ChevronDown
                  className="w-8 h-8 animate-bounce duration-500"
                  strokeWidth={2}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
