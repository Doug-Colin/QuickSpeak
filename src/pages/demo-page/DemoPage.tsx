import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <>
      <main>
        <section className="flex flex-col items-center space-x-4">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl font-averia mt-24 mb-12">
            QuickSpeak
          </h1>
          <h2 className="text-3xl mb-3">
          Less time trying. More time speaking.
          </h2>
          <p className="max-w-[500px] text-muted-foreground text-xl mb-4 justify-left">
          QuickSpeak is designed to make life easier for patients with Parkinson's and other speech challenges by helping them communicate more efficiently and effectively. 
          </p>
          <p className="max-w-[500px] text-muted-foreground text-xl mb-4">
          Express yourself with ease by quickly creating statements with predictive text, saving them for later use, and saying them in a voice of your choosing.
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link to="/demo" className="mt-4 mb-16">
              Try it out!
            </Link>
          </Button>
        </section>
      </main>
    </>
  );
}
