const Footer = () => {
  return (
    <footer className="border-t border-foreground/5 py-8">
      <div className="container flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold tracking-[0.15em] uppercase text-foreground">
            Row of Ducks
          </span>
          <p className="text-xs text-muted-foreground mt-1">
            Enterprise AI Operations & Data Solutions
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a href="mailto:patrick@rowofducks.ai" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            patrick@rowofducks.ai
          </a>
          <span className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Row of Ducks
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
