interface FakeMacTerminalWindow {
  children: React.ReactNode;
  /** For example: ~/projects/scaffl-ed */
  displayFilePath?: string;
  className?: string;
}

function FakeMacWindow({
  children,
  displayFilePath,
  className,
}: FakeMacTerminalWindow) {
  return (
    <section
      className={`flex flex-col border-2 border-black bg-white drop-shadow-[4px_4px_0px_black] ${className}`}
    >
      <div className="flex gap-4 px-4 py-2.5 bg-[#e8e8e3]">
        <div className="flex items-center gap-2">
          <span className="bg-[rgb(255,95,87)] w-2.5 h-2.5 rounded-full" />
          <span className="bg-[rgb(254,188,46)] w-2.5 h-2.5 rounded-full" />
          <span className="bg-[rgb(40,200,64)] w-2.5 h-2.5 rounded-full" />
        </div>
        <span className="font-mono text-[11px] text-black">
          {displayFilePath}
        </span>
      </div>
      <div className="w-full h-0.5 bg-black" />
      {children}
    </section>
  );
}

export default FakeMacWindow;
