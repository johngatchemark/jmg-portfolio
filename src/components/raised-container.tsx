interface RaisedContainerProps {
  children: React.ReactNode;
  className?: string;
}

function RaisedContainer({ children, className }: RaisedContainerProps) {
  return (
    <section
      className={`flex flex-col border gap-2 bg-white dark:bg-[#121218] border-jm-fg dark:border-jm-ui rounded-md shadow-[4px_4px_0px_var(--color-jm-fg)] dark:shadow-[4px_4px_0px_var(--color-jm-shadow)] px-5 py-6 ${className}`}
    >
      {children}
    </section>
  );
}

export default RaisedContainer;
