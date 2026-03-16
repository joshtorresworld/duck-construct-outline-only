import { ArrowRight } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm surface-card">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-foreground">
            Row of Ducks
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#pipeline" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Pipeline
          </a>
          <a href="#results" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Results
          </a>
          <a href="/small-business" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Small Business
          </a>
          <a href="/zantaz" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Partners
          </a>
          <a
            href="mailto:patrick@rowofducks.ai"
            className="inline-flex items-center gap-1.5 rounded-sm bg-foreground px-3.5 py-1.5 text-sm font-medium text-background hover:opacity-90 transition-opacity"
          >
            Contact <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
