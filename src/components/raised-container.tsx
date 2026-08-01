interface RaisedContainerProps {
  children: React.ReactNode;
  className?: string;
}

function RaisedContainer({ children, className }: RaisedContainerProps) {
  return (
    <section
      className={`flex flex-col border gap-2 bg-white dark:bg-jm-bg border-jm-fg rounded-md drop-shadow-[4px_4px_0px_var(--color-jm-fg)] px-5 py-6 ${className}`}
    >
      {children}
    </section>
  );
}

export default RaisedContainer;
