function Footer() {
  return (
    <footer className="w-full bg-jm-bg border-t-2 border-jm-fg dark:border-jm-ui py-6 px-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs box-border">
      <p className="text-jm-muted-fg text-center sm:text-left text-[12px]!">
        &copy; 2026 John Mark Gatche &middot; Built with React + Vite
      </p>

      <div className="flex items-center gap-2 text-jm-fg dark:text-jm-light text-[12px]!">
        <span className="w-2 h-2 bg-jm-primary rounded-none inline-block animate-pulse" />
        <span>Available for opportunities</span>
      </div>
    </footer>
  );
}

export default Footer;
