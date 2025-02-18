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
            Knowing what you want to say and not being able to say it is
            frustrating.
          </h2>
          <p className="max-w-[500px] text-muted-foreground text-xl mb-4">
          QuickSpeak is an designed to make life easier for patients with Parkinson's and other speech challenges by helping them communicate more effectively and efficiently. 
          
          Express yourself with ease by quickly creating questions, responses, and phrases using predictive text. Once you know what you want to say, QuickSpeak can say it for you. Choose from a collection of voices to find one that fits, adjust volume, and save your voice and commonly used phrases for later use. 
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link to="/register" className="mt-4 mb-16">
              Try it out!
            </Link>
          </Button>
          <h2 className="text-3xl mb-3">
            Less time trying. More time speaking.
          </h2>
        </section>
      </main>
    </>
  );
}
