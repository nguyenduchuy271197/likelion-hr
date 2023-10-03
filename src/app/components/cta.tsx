import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTA() {
  return (
    <section>
      <div className="max-w-screen-lg mx-auto px-8">
        <div className="flex flex-col items-center gap-8 px-8 py-12 rounded-3xl bg-gradient-to-b from-red-600 via-red-600 to-red-400">
          <h3 className="text-2xl font-bold text-center sm:text-3xl">
            Let us accompany you on your digital transformation journey.
          </h3>
          <Button size="lg" variant="secondary">
            <Link href="#">Liên hệ ngay</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
